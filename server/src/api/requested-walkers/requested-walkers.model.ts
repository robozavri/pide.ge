import { Schema, model } from 'mongoose';
import multilingualSchema from '../../schemas/multilingual.schema';
import imageSchema from '../../schemas/image.schema';

const RequestedWalkersSchema = new Schema({
  name: multilingualSchema,
  description: multilingualSchema,
  Image: imageSchema,
  tags: [multilingualSchema],
  position: Number,
});

export default model('RequestedWalkers', RequestedWalkersSchema);