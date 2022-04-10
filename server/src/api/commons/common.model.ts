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
    banner: imageSchema,
};
const policySchema = {
    content: multilingualSchema,
    banner: imageSchema,
};
const privacySchema = {
    content: multilingualSchema,
    banner: imageSchema,
};
const faqsSchema = {
    banner: imageSchema,
};

const CommonSchema = new Schema({
    promo: promoSchema,
    contacts: contactSchema,
    aboutUs: aboutUsSchema,
    policy: policySchema,
    privacy: privacySchema,
    faqs: faqsSchema,
});

export default model('Common', CommonSchema);
