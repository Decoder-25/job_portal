import mongoose from 'mongoose';

//schema
const helperSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: [true, "First name is Required"],
  },
  lastName: {
    type: String,
    required: [true, "Last name is Required"],
  },
  AadharNumber: {
    type: Number,
    validate: {
      validator: function (v) {
        const aadharRegex = /^\d{12}$/;
        return aadharRegex.test(v.toString());
      },
      message: "Invalid Aadhar number!",
    },
  },
  DOB: {
    day: {
      type: Number,
    },
    month: {
      type: Number,
    },
    year: {
      type: Number,
    },
  },
  Gender: {
    type: String,
    enum: ["male", "female", "other"],
    default: "male",
  },
  MobileNo: {
    type: Number,
    validate: {
      validator: function (v) {
        return /\+\d{1,4}-\d{10}/.test(v);
      },
      message: "{VALUE} is not a valid phone number!",
    },
  },
  Religion: {
    type: String,
    required: [true, "Religion is required"],
  },
  Nationality: {
    type: String,
    required: [true, "Nationality is required"],
  },
  Address: {
    type: String,
    required: [true, "Address is required"],
  },
  Disability: {
    type: String,
    enum: ["yes", "no"],
    default: "no",
  },
  MaritalStatus: {
    type: String,
    enum: ["married", "unmarried"],
    default: "unmarried",
  },
  jobSector: {
    type: String,
    enum: [
      "househelp",
      "driver",
      "gardener",
      "cook",
      "nightguard",
      "babysitter",
      "caretaker",
      "hometutor",
      "petcarer",
      "housekeeper",
    ],
    default: "househelp",
  },
  jobExperience: {
    type: String,
    enum: ["fresher", "1-5 yrs", "5-10 yrs", "10-15 yrs", "over 15 yrs"],
    default: "fresher",
  },
  jobLocatin: {
    type: String,
    default: "kolkata",
    required: [true, "Your location is required"],
  },
  availability: {
    type: String,
    enum: ["within 10 days", "within 20 days", "from next month"],
    default: "within 10 days",
  },
  educationQulaification: {
    type: String,
    enum: [
      "below matriculation",
      "matriculation",
      "higher secondary",
      "graduate",
      "post-graduate",
    ],
    default: "matriculation",
  },
  expectedSalary: {
    type: Number,
    required: [true, "Salary expectation is required."],
  },
},
{ timestamps: true });

export default mongoose.model('Helper', helperSchema);