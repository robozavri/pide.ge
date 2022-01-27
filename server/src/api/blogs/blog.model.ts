import { Schema, model } from 'mongoose';
import multilingualSchema from '../../schemas/multilingual.schema';
import metaTagsSchema from '../../schemas/metaTags.schema';
import imageSchema from '../../schemas/image.schema';

const BlogSchema = new Schema({
  id: Number,
  category: { type: Schema.Types.ObjectId, ref: 'BlogCtegories' },
  name: multilingualSchema,
  description: multilingualSchema,
  fbImage: imageSchema,
  thumbnail: imageSchema,
  views: Number,
  liked: Number,
  readTime: Number,
  updateDate: Date,
  createDate: Date,
  status: String,
  meta: metaTagsSchema,
  position: Number,
});

export default model('Blog', BlogSchema);