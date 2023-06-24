import mongoose from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcryptjs';
import JWT from 'jsonwebtoken';

//schema
const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "First name is Required"],
    },
    lastName: {
      type: String,
      required: [true, "Last name is Required"],
    },
    email: {
      type: String,
      required: [true, "Email is Required"],
      unique: true,
      validate: validator.isEmail
    },
    password: {
      type: String,
      required: [true, "Password is Required"],
      minlength: [6, "Password length should be greater than 6 characters"],
      select: true,
    },
  },
  { timestamps: true }
);

//middlewares
userSchema.pre('save', async function(){
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

//JWT
userSchema.methods.createJWT = function () {
  return JWT.sign({ userId: this._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
};

export default mongoose.model('User', userSchema);