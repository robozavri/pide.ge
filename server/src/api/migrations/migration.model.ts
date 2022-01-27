import { Schema, model } from 'mongoose';
import multilingualSchema from '../../schemas/multilingual.schema';
import metaTagsSchema from '../../schemas/metaTags.schema';
import imageSchema from '../../schemas/image.schema';

const MigrationSchema = new Schema({
  title: String,
  isDone: Boolean,
  
  position: Number,
});

export default model('Migration', MigrationSchema);