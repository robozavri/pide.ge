import { Schema, model } from 'mongoose';
import multilingualSchema from '../../schemas/multilingual.schema';
import imageSchema from '../../schemas/image.schema';

// const multilingualImage = {
//     en: imageSchema,
//     ge: imageSchema
// };

const contactSchema = {
    email: String,
    phone: String,
    facebook: String,
    location: { lat: Number, lng: Number },
};

const CommonSchema = new Schema({
    header: contactSchema,
});

export default model('Common', CommonSchema);
