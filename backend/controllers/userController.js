import User from "../models/userModel.js"
import Helper from "../models/helperModel.js";
import Recruiter from "../models/recruiterModel.js";

// export const updateRecruiterController = async (req, res) => {
//     const user = req.user;
//     const data = req.body;
//   if (user.type == "recruiter") {
//     recruiterModel.findOne({ userId: user._id })
//       .then((recruiter) => {
//         if (recruiter == null) {
//           res.status(404).json({
//             message: "User does not exist",
//           });
//           return;
//         }
//         if (data.firstName) {
//           recruiter.firstName = data.firstName;
//         }
//         if (data.lastName) {
//           recruiter.lastName = data.lastName;
//         }
//         if (data.contactNumber) {
//           recruiter.contactNumber = data.contactNumber;
//         }
//         if (data.bio) {
//           recruiter.bio = data.bio;
//         }
//         recruiter
//           .save()
//           .then(() => {
//             res.json({
//               message: "User information updated successfully",
//             });
//           })
//           .catch((err) => {
//             res.status(400).json(err);
//           });
//       })
//       .catch((err) => {
//         res.status(400).json(err);
//       });
//   } else {
//     helperModel.findOne({ userId: user._id })
//       .then((helper) => {
//         if (helper == null) {
//           res.status(404).json({
//             message: "User does not exist",
//           });
//           return;
//         }
//         if (data.firstName) {
//           helper.firstName = data.firstName;
//         }
//         if (data.lastName) {
//           helper.lastName = data.lastName;
//         }
//         if (data.AadharNumber) {
//           helper.AadharNumber = data.AadharNumber;
//         }
//         if (data.DOB) {
//           helper.DOB = data.DOB;
//         }
//         if (data.Gender) {
//           helper.Gender = data.Gender;
//         }
//         if (data.MobileNo) {
//           helper.MobileNo = data.MobileNo;
//         }
//         if (data.Religion) {
//           helper.Religion = data.Religion;
//         }
//         if (data.Nationality) {
//           helper.Nationality = data.Nationality;
//         }
//         if (data.Disability) {
//           helper.Disability = data.Disability;
//         }
//         if (data.MaritalStatus) {
//           helper.MaritalStatus = data.MaritalStatus;
//         }
//         if (data.jobSector) {
//           helper.jobSector = data.jobSector;
//         }
//         if (data.jobExperience) {
//           helper.jobExperience = data.jobExperience;
//         }
//         if (data.jobLocation) {
//           helper.jobLocation = data.jobLocation;
//         }
//         if (data.availability) {
//           helper.availability = data.availability;
//         }
//         if (data.educationQulaification) {
//           helper.educationQulaification = data.educationQulaification;
//         }
//         if (data.expectedSalary) {
//           helper.expectedSalary = data.expectedSalary;
//         }
//         console.log(helper);
//         helper
//           .save()
//           .then(() => {
//             res.json({
//               message: "User information updated successfully",
//             });
//           })
//           .catch((err) => {
//             res.status(400).json(err);
//           });
//       })
//       .catch((err) => {
//         res.status(400).json(err);
//       });
//   }
//   try {
//     const { id } = req.params;
//     const { firstName, lastName, contactNumber, bio } =
//       req.body;

//     // Find the recruiter by ID
//     const recruiter = await Recruiter.findById(id);

//     if (!recruiter) {
//       return res.status(404).json({ message: "Recruiter not found" });
//     }

//     // Update the recruiter details
//     recruiter.firstName = firstName;
//     recruiter.lastName = lastName;
//     recruiter.contactNumber = contactNumber;
//     recruiter.bio = bio;

//     // Save the updated recruiter
//     await recruiter.save();

//     res.json({
//       success: true,
//       message: "Recruiter details updated successfully",
//     });
//   } catch (error) {
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// };

// export const updateHelperController = async (req, res) =>{
//   try {
//     const { id } = req.params;
//     const updateData = req.body;

//     const helper = await Helper.findById(id);

//     if (!helper) {
//       return res.status(404).json({ error: "Helper not found" });
//     }

//     // Update helper fields
//     helper.firstName = updateData.firstName;
//     helper.lastName = updateData.lastName;
//     helper.AadharNumber = updateData.AadharNumber;
//     helper.DOB = updateData.DOB;
//     helper.Gender = updateData.Gender;
//     helper.MobileNo = updateData.MobileNo;
//     helper.Religion = updateData.Religion;
//     helper.Nationality = updateData.Nationality;
//     helper.Address = updateData.Address;
//     helper.Disability = updateData.Disability;
//     helper.MaritalStatus = updateData.MaritalStatus;
//     helper.jobSector = updateData.jobSector;
//     helper.jobExperience = updateData.jobExperience;
//     helper.jobLocation = updateData.jobLocation;
//     helper.availability = updateData.availability;
//     helper.educationQualification = updateData.educationQualification;
//     helper.expectedSalary = updateData.expectedSalary;

//     // Save updated helper details
//     await helper.save();

//     res
//       .status(200)
//       .json({ success: true, message: "Helper details updated successfully" });
//   } catch (error) {
//     res.status(500).json({ error: "Internal server error" });
//   }
// };

export const updateRecruiterController = async (req, res, next) => {
  try {
    const { firstName, lastName, email, contactNumber, bio } = req.body;
    if (!firstName || !lastName || !email || !contactNumber || !bio) {
      next("please provide all fields");
    }

    const user = await Recruiter.findOne({ _id: req.user.user._id });

    if (!user) {
      return res.status(404).json({ message: "Recruiter not found" });
    }

    // Update the recruiter details
    user.email = email;
    user.firstName =  firstName;
    user.lastName = lastName;
    user.contactNumber = contactNumber;
    user.bio = bio;

    // Save the updated recruiter
    await user.save();
    const token = user.createJwt();

    res.json({
      user, 
      token,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const updateHelperController = async (req, res) => {
  // try {
  //   const { email } = req.body;

  //   const helper = await User.findOne({ email });

  //   if (!helper) {
  //     return res.status(404).json({ error: "Helper not found" });
  //   }

  //   // Update helper fields
  //   helper.firstName = req.body.firstName || helper.firstName;
  //   helper.lastName = req.body.lastName || helper.lastName;
  //   helper.AadharNumber = req.body.AadharNumber || helper.AadharNumber;
  //   helper.DOB = req.body.DOB || helper.DOB;
  //   helper.Gender = req.body.Gender || helper.Gender;
  //   helper.MobileNo = req.body.MobileNo || helper.MobileNo;
  //   helper.Religion = req.body.Religion || helper.Religion;
  //   helper.Nationality = req.body.Nationality || helper.Nationality;
  //   helper.Address = req.body.Address || helper.Address;
  //   helper.Disability = req.body.Disability || helper.Disability;
  //   helper.MaritalStatus = req.body.MaritalStatus || helper.MaritalStatus;
  //   helper.jobSector = req.body.jobSector || helper.jobSector;
  //   helper.jobExperience = req.body.jobExperience || helper.jobExperience;
  //   helper.jobLocation = req.body.jobLocation || helper.jobLocation;
  //   helper.availability = req.body.availability || helper.availability;
  //   helper.educationQualification =
  //     req.body.educationQualification || helper.educationQualification;
  //   helper.expectedSalary = req.body.expectedSalary || helper.expectedSalary;

  //   // Save updated helper details
  //   await helper.save();

  //   res
  //     .status(200)
  //     .json({ success: true, message: "Helper details updated successfully" });
  // } catch (error) {
  //   res.status(500).json({ error: "Internal server error" });
  // }
};