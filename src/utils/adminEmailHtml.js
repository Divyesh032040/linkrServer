export function adminEmailHtml({ firstName, lastName, email, phoneNumber, services, message }) {
  return `
    <div style="font-family: Arial, sans-serif; color: #222;">
      <h2 style="color: #2196F3;">New Contact Form Submission</h2>
      <p>
        <strong>Client Details:</strong><br>
        Name: ${firstName} ${lastName}<br>
        Email: ${email}<br>
        Phone: ${phoneNumber || 'N/A'}<br>
        Services Interested: ${services || 'N/A'}
      </p>
      <p>
        <strong>Message:</strong><br>
        ${message}
      </p>
      <hr style="border: none; border-top: 1px solid #eee;">
      <p style="font-size: 0.9em; color: #888;">
        This is an automated notification from your website contact form.
      </p>
    </div>
  `;
} 