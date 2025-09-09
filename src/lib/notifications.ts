// Email notification service
// In production, replace with SendGrid, Resend, or similar service

interface ContactSubmission {
  name: string
  email: string
  company?: string
  projectType?: string
  budget?: string
  message: string
  timestamp?: string
}

export async function sendEmailNotification(submission: ContactSubmission) {
  // For now, log to console with clear formatting
  // In production, integrate with email service
  
  const emailContent = `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📧 NEW CONTACT FORM SUBMISSION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
From: ${submission.name}
Email: ${submission.email}
Company: ${submission.company || 'Not provided'}
Project Type: ${submission.projectType || 'Not specified'}
Budget: ${submission.budget || 'Not specified'}
Time: ${submission.timestamp || new Date().toISOString()}

Message:
${submission.message}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  `
  
  console.log(emailContent)
  
  // Store in local storage for admin panel (temporary solution)
  if (typeof window !== 'undefined') {
    const submissions = JSON.parse(localStorage.getItem('contact_submissions') || '[]')
    submissions.push(submission)
    localStorage.setItem('contact_submissions', JSON.stringify(submissions))
  }
  
  // Return success
  return {
    success: true,
    message: 'Notification logged'
  }
}

// Function to retrieve submissions (for admin panel)
export function getStoredSubmissions(): ContactSubmission[] {
  if (typeof window === 'undefined') return []
  return JSON.parse(localStorage.getItem('contact_submissions') || '[]')
}

// Function to clear submissions
export function clearStoredSubmissions() {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('contact_submissions')
  }
}