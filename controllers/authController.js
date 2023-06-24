import userModel from "../models/userModel.js";

export const registerController = async(req, res, next) => {

        const { firstName,  lastName, email, password } = req.body
        //validate
        if(!firstName){
           next('First Name is required');
        }
        if (!lastName) {
           next("Last Name is required");
        }
        if(!email){
            next("Email is required");
        }
        if(!password){
            next("Password is required and must be greater than 6 characters");
        }
        const existingUser = await userModel.findOne({email});
        if(existingUser){
            next("Email already exists, Please login");
        }
        const user = await userModel.create({firstName,lastName,email,password});
        //token
        const token = user.createJWT();
        res.status(201).send({
            success: true,
            message:"User created successfully",
            user: {
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email
            },
            token
        });

};