import { Schema, model } from 'mongoose';
import multilingualSchema from '../../schemas/multilingual.schema';


const FaqsSchema = new Schema({
  question: multilingualSchema,
  answer: multilingualSchema,
  position: Number,
});

export default model('Faqs', FaqsSchema);