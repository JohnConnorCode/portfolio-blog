'use client'
/* eslint-disable @next/next/no-img-element */

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { Upload, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface ImageUploadProps {
  value: string
  onChange: (url: string) => void
  bucket?: string
  label?: string
}

export default function ImageUpload({ 
  value, 
  onChange, 
  bucket = 'blog-images',
  label = 'Featured Image' 
}: ImageUploadProps) {
  const [uploading, setUploading] = useState(false)
  const [dragActive, setDragActive] = useState(false)
  const supabase = createClient()

  const handleUpload = async (file: File) => {
    if (!file) return

    setUploading(true)
    
    const fileExt = file.name.split('.').pop()
    const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`
    const filePath = `${fileName}`

    const { error: uploadError } = await supabase.storage
      .from(bucket)
      .upload(filePath, file)

    if (uploadError) {
      console.error('Upload error:', uploadError)
      alert('Error uploading image')
      setUploading(false)
      return
    }

    const { data: { publicUrl } } = supabase.storage
      .from(bucket)
      .getPublicUrl(filePath)

    onChange(publicUrl)
    setUploading(false)
  }

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleUpload(e.dataTransfer.files[0])
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    if (e.target.files && e.target.files[0]) {
      handleUpload(e.target.files[0])
    }
  }

  const removeImage = () => {
    onChange('')
  }

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium">{label}</label>
      
      <AnimatePresence mode="wait">
        {value ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative rounded-lg overflow-hidden border border-foreground/10"
          >
            <img 
              src={value} 
              alt="Preview" 
              className="w-full h-48 object-cover"
            />
            <button
              onClick={removeImage}
              className="absolute top-2 right-2 p-2 bg-background/80 backdrop-blur rounded-lg hover:bg-background transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            className={`
              relative border-2 border-dashed rounded-lg p-8 text-center transition-colors
              ${dragActive ? 'border-primary bg-primary/5' : 'border-foreground/20 hover:border-foreground/40'}
              ${uploading ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
            `}
          >
            <input
              type="file"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              onChange={handleChange}
              accept="image/*"
              disabled={uploading}
            />
            
            <div className="space-y-2">
              {uploading ? (
                <div className="w-12 h-12 mx-auto border-4 border-primary border-t-transparent rounded-full animate-spin" />
              ) : (
                <Upload className="w-12 h-12 mx-auto text-muted-foreground" />
              )}
              <p className="text-sm text-muted-foreground">
                {uploading ? 'Uploading...' : 'Drop image here or click to upload'}
              </p>
              <p className="text-xs text-muted-foreground">
                PNG, JPG, GIF up to 10MB
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}