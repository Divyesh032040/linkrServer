// controllers/contactController.js
import ContactForm from '../modals/ContactFormSchema.js';
import { sendEmail } from '../utils/sendEmail.js';
import { clientEmailHtml } from '../utils/clientEmailHtml.js';
import { adminEmailHtml } from '../utils/adminEmailHtml.js';

export const submitContactForm = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      message,
      services
    } = req.body;

    const newEntry = new ContactForm({
      firstName,
      lastName,
      email,
      phoneNumber,
      message,
      services
    });

    const response = await newEntry.save();
    if(!response){
        return res.status(500).json({
            error:"Fail to save  constact form"
        })
    }
    res.status(201).json({ message: 'Form submitted successfully.' });

    // Prepare HTML email templates
    const clientHtml = clientEmailHtml({ firstName, lastName, email, phoneNumber, services, message });
    const adminHtml = adminEmailHtml({ firstName, lastName, email, phoneNumber, services, message });

    // Send verification email to user
    try {
      await sendEmail(
        email,
        'We Received Your Request',
        clientHtml
      );
    } catch (emailErr) {
      console.error('Failed to send verification email to user:', emailErr);
    }

    // Send notification email to admin
    try {
      await sendEmail(
        process.env.ADMIN_EMAIL,
        'New Contact Form Submission',
        adminHtml
      );
    } catch (adminEmailErr) {
      console.error('Failed to send notification email to admin:', adminEmailErr);
    }
  } catch (error) {
    console.error('Error saving contact form:', error);
    res.status(500).json({ error: 'Server error. Try again later.' });
  }
};
