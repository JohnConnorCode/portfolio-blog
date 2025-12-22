import { Resend } from 'resend'

// Email notification service using Resend
// Get your API key from https://resend.com/api-keys

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
  const resendApiKey = process.env.RESEND_API_KEY
  const notificationEmail = process.env.NOTIFICATION_EMAIL || 'john@johnconnor.xyz'

  // Log to console for development
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

  if (process.env.NODE_ENV === 'development') {
    console.log(emailContent)
  }

  // Send actual email if API key is configured
  if (resendApiKey) {
    try {
      const resend = new Resend(resendApiKey)

      const { data, error } = await resend.emails.send({
        from: 'Portfolio Contact <onboarding@resend.dev>', // Use your verified domain
        to: [notificationEmail],
        subject: `New Contact Form Submission from ${submission.name}`,
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; color: white; text-align: center;">
              <h1 style="margin: 0; font-size: 24px;">New Contact Form Submission</h1>
            </div>

            <div style="background: #f7f9fc; padding: 30px;">
              <div style="background: white; border-radius: 8px; padding: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                <h2 style="color: #333; margin-top: 0;">Contact Details</h2>

                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666;"><strong>Name:</strong></td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #333;">${submission.name}</td>
                  </tr>
                  <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666;"><strong>Email:</strong></td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><a href="mailto:${submission.email}" style="color: #667eea;">${submission.email}</a></td>
                  </tr>
                  ${submission.company ? `
                  <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666;"><strong>Company:</strong></td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #333;">${submission.company}</td>
                  </tr>
                  ` : ''}
                  ${submission.projectType ? `
                  <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666;"><strong>Project Type:</strong></td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #333;">${submission.projectType}</td>
                  </tr>
                  ` : ''}
                  ${submission.budget ? `
                  <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666;"><strong>Budget:</strong></td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #333;">${submission.budget}</td>
                  </tr>
                  ` : ''}
                </table>

                <h3 style="color: #333; margin-top: 20px;">Message</h3>
                <div style="background: #f7f9fc; padding: 15px; border-radius: 4px; color: #333; line-height: 1.6;">
                  ${submission.message.replace(/\n/g, '<br>')}
                </div>

                <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #eee; color: #999; font-size: 12px;">
                  Received: ${new Date(submission.timestamp || Date.now()).toLocaleString()}
                </div>
              </div>
            </div>

            <div style="background: #333; padding: 20px; text-align: center; color: #999; font-size: 12px;">
              This email was sent from your portfolio contact form.
            </div>
          </div>
        `,
        text: emailContent
      })

      if (error) {
        console.error('Resend error:', error)
        return {
          success: false,
          message: 'Email sending failed'
        }
      }

      return {
        success: true,
        message: 'Email sent successfully'
      }
    } catch (error) {
      console.error('Error sending email:', error)
      return {
        success: false,
        message: 'Email sending failed'
      }
    }
  } else {
    // Still return success for the form submission
    return {
      success: true,
      message: 'Submission received (email notifications not configured)'
    }
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