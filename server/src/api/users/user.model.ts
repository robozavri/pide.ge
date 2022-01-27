import { Schema, model } from 'mongoose';

const MobileSchema = {
  phone: String,
  confirmCode: Number,
  expirationDate: Date,
  isUsed: Boolean,
};

const UserSchema = new Schema({
  email: String,
  firstName: String,
  lastName: String,
  mobile: MobileSchema,

  passwordHash: String,
  isActivated: Boolean,
  activationToken: String,
  role: String,
  joinedAt: Date,
});

UserSchema.index({email: 1}, {unique: true});

export default model('User', UserSchema);
