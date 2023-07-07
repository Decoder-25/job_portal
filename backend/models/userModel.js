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
      validate: validator.isEmail,
    },
    password: {
      type: String,
      required: [true, "Password is Required"],
      minlength: [6, "Password length should be greater than 6 characters"],
      select: true,
    },
    role: {
      type: String,
      required: true,
      enum: ['helper', 'recruiter'],
    }
  },
  { timestamps: true }
);

//middlewares
userSchema.pre('save', async function(){
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

//compare password
userSchema.methods.comparePassword = async function(userPassword){
  const isMatch = await bcrypt.compare(userPassword, this.password);
  return isMatch;
};

//JWT
userSchema.methods.createJWT = function () {
  return JWT.sign({ userId: this._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
};

export default mongoose.model('User', userSchema);