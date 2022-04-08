import { Schema, model } from 'mongoose';
import multilingualSchema from '../../schemas/multilingual.schema';
import imageSchema from '../../schemas/image.schema';

const StoriesSchema = new Schema({
  title: multilingualSchema,
  description: multilingualSchema,
  Image: imageSchema,
  position: Number,
});

export default model('Stories', StoriesSchema);