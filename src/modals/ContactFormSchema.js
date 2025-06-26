// models/ContactForm.js
import mongoose from 'mongoose';

const ContactFormSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  },
  phoneNumber: {
    type: String,
    required: true,
    trim: true
  },
  message: {
    type: String,
    required: true
  },
  services: {
    type: [String],
    enum: [
      'Website design',
      'Content creation',
      'UX design',
      'Strategy & consulting',
      'User research',
      'Other'
    ],
    default: []
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('ContactForm', ContactFormSchema);
