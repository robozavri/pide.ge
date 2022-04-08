import { Schema, model } from 'mongoose';
import multilingualSchema from '../../schemas/multilingual.schema';
import imageSchema from '../../schemas/image.schema';

const contactSchema = {
    email: String,
    phone: String,
    facebook: String,
};

const promoSchema = {
    title: multilingualSchema,
    image: imageSchema,
};

const CommonSchema = new Schema({
    promo: promoSchema,
    contacts: contactSchema,
});

export default model('Common', CommonSchema);
