'use client'

import { createContext, useContext, useState, useCallback, useEffect, ReactNode } from 'react'
import { motion } from 'framer-motion'
import { Volume2, VolumeX, Settings } from 'lucide-react'
import { IconDraw } from './icon-draw'

interface SoundSystemContextType {
  isEnabled: boolean
  volume: number
  toggle: () => void
  setVolume: (volume: number) => void
  playSound: (soundId: SoundId) => void
}

type SoundId =
  | 'hover'
  | 'click'
  | 'success'
  | 'error'
  | 'notification'
  | 'transition'
  | 'draw'
  | 'whoosh'
  | 'pop'

const SoundSystemContext = createContext<SoundSystemContextType | undefined>(undefined)

interface SoundSystemProviderProps {
  children: ReactNode
}

// Audio buffer for different sounds using Web Audio API
const createAudioContext = () => {
  if (typeof window === 'undefined') return null

  const AudioContext = window.AudioContext || (window as any).webkitAudioContext
  return new AudioContext()
}

// Generate procedural sounds
const createSound = (audioContext: AudioContext, frequency: number, duration: number, type: OscillatorType = 'sine') => {
  const oscillator = audioContext.createOscillator()
  const gainNode = audioContext.createGain()

  oscillator.connect(gainNode)
  gainNode.connect(audioContext.destination)

  oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime)
  oscillator.type = type

  gainNode.gain.setValueAtTime(0.1, audioContext.currentTime)
  gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration)

  oscillator.start()
  oscillator.stop(audioContext.currentTime + duration)
}

const soundDefinitions: Record<SoundId, { frequency: number; duration: number; type?: OscillatorType }> = {
  hover: { frequency: 800, duration: 0.1, type: 'sine' },
  click: { frequency: 1200, duration: 0.05, type: 'square' },
  success: { frequency: 600, duration: 0.2, type: 'sine' },
  error: { frequency: 200, duration: 0.3, type: 'sawtooth' },
  notification: { frequency: 880, duration: 0.15, type: 'triangle' },
  transition: { frequency: 440, duration: 0.3, type: 'sine' },
  draw: { frequency: 1000, duration: 0.1, type: 'triangle' },
  whoosh: { frequency: 300, duration: 0.2, type: 'sawtooth' },
  pop: { frequency: 1500, duration: 0.08, type: 'square' },
}

export function SoundSystemProvider({ children }: SoundSystemProviderProps) {
  const [isEnabled, setIsEnabled] = useState(false)
  const [volume, setVolumeState] = useState(0.3)
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null)

  useEffect(() => {
    // Load preferences from localStorage
    const savedEnabled = localStorage.getItem('sound-enabled')
    const savedVolume = localStorage.getItem('sound-volume')

    if (savedEnabled !== null) {
      setIsEnabled(savedEnabled === 'true')
    }
    if (savedVolume !== null) {
      setVolumeState(parseFloat(savedVolume))
    }

    // Initialize audio context on first user interaction
    const initAudio = () => {
      const context = createAudioContext()
      setAudioContext(context)
      document.removeEventListener('click', initAudio)
    }

    document.addEventListener('click', initAudio)
    return () => document.removeEventListener('click', initAudio)
  }, [])

  const toggle = useCallback(() => {
    const newEnabled = !isEnabled
    setIsEnabled(newEnabled)
    localStorage.setItem('sound-enabled', newEnabled.toString())
  }, [isEnabled])

  const setVolume = useCallback((newVolume: number) => {
    setVolumeState(newVolume)
    localStorage.setItem('sound-volume', newVolume.toString())
  }, [])

  const playSound = useCallback((soundId: SoundId) => {
    if (!isEnabled || !audioContext || volume === 0) return

    try {
      const sound = soundDefinitions[soundId]
      if (sound) {
        const oscillator = audioContext.createOscillator()
        const gainNode = audioContext.createGain()

        oscillator.connect(gainNode)
        gainNode.connect(audioContext.destination)

        oscillator.frequency.setValueAtTime(sound.frequency, audioContext.currentTime)
        oscillator.type = sound.type || 'sine'

        const adjustedVolume = volume * 0.1 // Keep sounds subtle
        gainNode.gain.setValueAtTime(adjustedVolume, audioContext.currentTime)
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + sound.duration)

        oscillator.start()
        oscillator.stop(audioContext.currentTime + sound.duration)
      }
    } catch (error) {
      console.warn('Sound playback failed:', error)
    }
  }, [isEnabled, audioContext, volume])

  return (
    <SoundSystemContext.Provider value={{ isEnabled, volume, toggle, setVolume, playSound }}>
      {children}
    </SoundSystemContext.Provider>
  )
}

export function useSounds() {
  const context = useContext(SoundSystemContext)
  if (context === undefined) {
    throw new Error('useSounds must be used within a SoundSystemProvider')
  }
  return context
}

// Sound toggle component
export function SoundToggle() {
  const { isEnabled, volume, toggle, setVolume } = useSounds()
  const [showSettings, setShowSettings] = useState(false)

  return (
    <div className="relative">
      <motion.button
        onClick={toggle}
        onHoverStart={() => showSettings && setShowSettings(false)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="p-3 rounded-lg bg-background/10 backdrop-blur-sm border border-border/50 hover:bg-background/20 transition-all duration-200"
      >
        <IconDraw
          icon={isEnabled ? Volume2 : VolumeX}
          size="sm"
          drawSpeed={0.8}
          triggerOnHover={true}
          autoPlay={false}
          className="w-5 h-5"
        />
      </motion.button>

      <motion.button
        onClick={() => setShowSettings(!showSettings)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="ml-2 p-3 rounded-lg bg-background/10 backdrop-blur-sm border border-border/50 hover:bg-background/20 transition-all duration-200"
      >
        <IconDraw
          icon={Settings}
          size="sm"
          drawSpeed={0.8}
          triggerOnHover={true}
          autoPlay={false}
          className="w-5 h-5"
        />
      </motion.button>

      {showSettings && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.95 }}
          className="absolute top-full right-0 mt-2 p-4 bg-background/95 backdrop-blur-xl border border-border/50 rounded-lg shadow-xl min-w-[200px]"
        >
          <div className="space-y-3">
            <div className="text-sm font-medium">Sound Settings</div>

            <div className="space-y-2">
              <div className="text-xs text-muted-foreground">Volume</div>
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={volume}
                onChange={(e) => setVolume(parseFloat(e.target.value))}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                disabled={!isEnabled}
              />
              <div className="text-xs text-muted-foreground text-center">
                {Math.round(volume * 100)}%
              </div>
            </div>

            <div className="text-xs text-muted-foreground pt-2 border-t border-border/30">
              Subtle sounds enhance interactions
            </div>
          </div>
        </motion.div>
      )}
    </div>
  )
}

// Hook for playing sounds with animations
export function useSoundEffect() {
  const { playSound } = useSounds()

  const playWithHaptic = useCallback((soundId: SoundId) => {
    playSound(soundId)

    // Add haptic feedback on supported devices
    if ('vibrate' in navigator) {
      const vibrationPattern = {
        hover: [5],
        click: [10],
        success: [10, 50, 10],
        error: [100],
        notification: [50],
        transition: [20],
        draw: [5],
        whoosh: [30],
        pop: [8],
      }

      navigator.vibrate(vibrationPattern[soundId] || [5])
    }
  }, [playSound])

  return playWithHaptic
}

// Enhanced button with sound
export function SoundButton({
  children,
  onClick,
  soundId = 'click',
  className = '',
  ...props
}: {
  children: React.ReactNode
  onClick?: () => void
  soundId?: SoundId
  className?: string
  [key: string]: any
}) {
  const playSound = useSoundEffect()

  const handleClick = () => {
    playSound(soundId)
    onClick?.()
  }

  return (
    <motion.button
      onClick={handleClick}
      onHoverStart={() => playSound('hover')}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`transition-all duration-200 ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  )
}