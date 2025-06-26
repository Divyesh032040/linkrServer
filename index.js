import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';

import connectDB from './src/config/db.js';
import contactRoutes from './src/routes/contact.routes.js';


dotenv.config();


const app = express();

connectDB();

// Global Middlewares
app.use(cors()); 
app.use(express.json()); 
app.use(helmet()); 
app.use(morgan('dev')); 


app.use('/api/v1', contactRoutes);


app.get('/', (req, res) => {
  res.send('API is running...');
});


// Start the server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server started on http://localhost:${PORT}`);
});
