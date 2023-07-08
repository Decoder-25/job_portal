import Helper from "../models/helperModel.js";
import Recruiter from "../models/recruiterModel.js";


export const updateRecruiterController = async (req, res, next) => {
  try {
    const { firstName, lastName, contactNumber, bio } = req.body;
    if (!firstName || !lastName || !contactNumber || !bio) {
      return next("Please provide all fields");
    }

    const user = await Recruiter.findOne({ userId: req.user.userId });

    if (!user) {
      return res.status(404).json({ message: "Recruiter not found" });
    }

    // Update the recruiter details
    user.firstName = firstName;
    user.lastName = lastName;
    user.contactNumber = contactNumber;
    user.bio = bio;

    // Save the updated recruiter
    await user.save();

    res.json({
      message: "Recruiter details updated successfully",
      user,
    });
  } catch (error) {
    next(error);
  }
};

export const updateHelperController = async (req, res, next) => {
  try {
    const {
      firstName,
      lastName,
      AadharNumber,
      DOB,
      Gender,
      MobileNo,
      Religion,
      Nationality,
      Address,
      Disability,
      MaritalStatus,
      jobSector,
      jobExperience,
      jobLocation,
      availability,
      educationQualification,
      expectedSalary,
    } = req.body;
    if (
      !firstName ||
      !lastName ||
      !AadharNumber ||
      !DOB ||
      !Gender ||
      !MobileNo ||
      !Religion ||
      !Nationality ||
      !Address ||
      !Disability ||
      !MaritalStatus ||
      !jobSector ||
      !jobExperience ||
      !jobLocation ||
      !availability ||
      !educationQualification ||
      !expectedSalary
    ) {
      return next("Please provide all fields");
    }

    const user = await Helper.findOne({ userId: req.user.userId });

    if (!user) {
      return res.status(404).json({ message: "Helper not found" });
    }

    // Update the helper details
    user.firstName = firstName;
    user.lastName = lastName;
    user.AadharNumber = AadharNumber;
    user.DOB = DOB;
    user.Gender = Gender;
    user.MobileNo = MobileNo;
    user.Religion = Religion;
    user.Nationality = Nationality;
    user.Address = Address;
    user.Disability = Disability;
    user.MaritalStatus = MaritalStatus;
    user.jobSector = jobSector;
    user.jobExperience = jobExperience;
    user.jobLocation = jobLocation;
    user.availability = availability;
    user.educationQualification = educationQualification;
    user.expectedSalary = expectedSalary;

    // Save the updated helper
    await user.save();

    res.json({
      message: "Helper details updated successfully",
      user,
    });
  } catch (error) {
    next(error);
  }
};