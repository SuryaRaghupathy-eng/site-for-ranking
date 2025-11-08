import { Resend } from 'resend';

const resend = process.env.RESEND_API_KEY 
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

interface SendVerificationEmailParams {
  to: string;
  firstName: string;
  verificationToken: string;
}

export async function sendVerificationEmail({
  to,
  firstName,
  verificationToken,
}: SendVerificationEmailParams): Promise<boolean> {
  if (!resend) {
    console.error('RESEND_API_KEY is not set. Email will not be sent.');
    return false;
  }

  try {
    const verificationUrl = `${process.env.REPLIT_DEV_DOMAIN || 'http://localhost:5000'}/verify?token=${verificationToken}`;
    
    const { error } = await resend.emails.send({
      from: 'RankCascade <onboarding@resend.dev>',
      to,
      subject: 'Verify your RankCascade account',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Verify your email</title>
          </head>
          <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f9fafb;">
            <table role="presentation" style="width: 100%; border-collapse: collapse;">
              <tr>
                <td align="center" style="padding: 40px 0;">
                  <table role="presentation" style="width: 600px; border-collapse: collapse; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);">
                    <tr>
                      <td style="padding: 40px 40px 20px 40px;">
                        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 32px;">
                          <div style="width: 48px; height: 48px; background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%); border-radius: 8px; display: flex; align-items: center; justify-content: center; color: white; font-size: 24px; font-weight: bold;">
                            R
                          </div>
                          <span style="font-size: 24px; font-weight: 600; color: #111827;">RankCascade</span>
                        </div>
                        
                        <h1 style="margin: 0 0 16px 0; font-size: 24px; font-weight: 600; color: #111827;">
                          Hi ${firstName}!
                        </h1>
                        
                        <p style="margin: 0 0 24px 0; font-size: 16px; line-height: 24px; color: #6b7280;">
                          Thanks for signing up for RankCascade! We're excited to have you on board.
                        </p>
                        
                        <p style="margin: 0 0 24px 0; font-size: 16px; line-height: 24px; color: #6b7280;">
                          Please verify your email address by clicking the button below:
                        </p>
                        
                        <table role="presentation" style="margin: 32px 0;">
                          <tr>
                            <td>
                              <a href="${verificationUrl}" style="display: inline-block; padding: 14px 32px; background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%); color: #ffffff; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 16px;">
                                Verify Email Address
                              </a>
                            </td>
                          </tr>
                        </table>
                        
                        <p style="margin: 24px 0 0 0; font-size: 14px; line-height: 20px; color: #9ca3af;">
                          Or copy and paste this link into your browser:
                        </p>
                        <p style="margin: 8px 0 0 0; font-size: 14px; line-height: 20px; color: #06b6d4; word-break: break-all;">
                          ${verificationUrl}
                        </p>
                      </td>
                    </tr>
                    
                    <tr>
                      <td style="padding: 32px 40px; background-color: #f9fafb; border-top: 1px solid #e5e7eb; border-radius: 0 0 8px 8px;">
                        <p style="margin: 0; font-size: 14px; line-height: 20px; color: #6b7280;">
                          If you didn't create an account with RankCascade, you can safely ignore this email.
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error('Error sending verification email:', error);
      return false;
    }

    return true;
  } catch (error) {
    console.error('Error sending verification email:', error);
    return false;
  }
}
