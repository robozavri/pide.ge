import { Schema, model } from 'mongoose';
import multilingualSchema from '../../schemas/multilingual.schema';


const BlogCategoriesSchema = new Schema({
  id: Number,
  name: multilingualSchema,
  views: Number,
  sort: Number,
  updateDate: Date,
  createDate: Date,
  status: String,
  position: Number,
});

export default model('BlogCategories', BlogCategoriesSchema);