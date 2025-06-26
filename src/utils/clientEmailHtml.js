export function clientEmailHtml({ firstName, lastName, email, phoneNumber, services, message }) {
  return `
    <div style="font-family: Arial, sans-serif; color: #222;">
      <h2 style="color: #4CAF50;">Thank You for Contacting Us!</h2>
      <p>Dear ${firstName},</p>
      <p>
        We have received your request and appreciate you reaching out.<br>
        Our team will review your message and get back to you as soon as possible.
      </p>
      <hr style="border: none; border-top: 1px solid #eee;">
      <p>
        <strong>Your Details:</strong><br>
        Name: ${firstName} ${lastName}<br>
        Email: ${email}<br>
        Phone: ${phoneNumber || 'N/A'}<br>
        Services Interested: ${services || 'N/A'}<br>
        Message: ${message}
      </p>
      <hr style="border: none; border-top: 1px solid #eee;">
      <p style="font-size: 0.9em; color: #888;">
        If you did not submit this request, please ignore this email.
      </p>
      <p style="color: #4CAF50;">Best regards,<br>Your Company Team</p>
    </div>
  `;
} 