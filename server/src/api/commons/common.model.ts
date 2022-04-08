import { Schema, model } from 'mongoose';
import multilingualSchema from '../../schemas/multilingual.schema';
import imageSchema from '../../schemas/image.schema';

const contactSchema = {
    email: String,
    phone: String,
};

const promoSchema = {
    title: multilingualSchema,
    image: imageSchema,
};

const aboutUsSchema = {
    content: multilingualSchema,
};
const policySchema = {
    content: multilingualSchema,
};
const privacySchema = {
    content: multilingualSchema,
};

const CommonSchema = new Schema({
    promo: promoSchema,
    contacts: contactSchema,
    aboutUs: aboutUsSchema,
    policy: policySchema,
    privacy: privacySchema,
});

export default model('Common', CommonSchema);
