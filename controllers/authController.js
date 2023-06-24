import userModel from "../models/userModel.js";

export const registerController = async(req, res) => {
    try {
        const { firstName,  lastName, email, password } = req.body
        //validate
        if(!firstName){
            return res.status(400).send({
                            message:"Please provide first name",
                            success: false,
                        })
        }
        if (!lastName) {
            return res.status(400).send({
                message: "Please provide last name",
                success: false,
            });
        }
        if(!email){
            return res.status(400).send({
                            message:"Please provide email",
                            success: false,
                        })
        }
        if(!password){
            return res.status(400).send({
                            message:"Please provide password",
                            success: false,
                        })
        }
        const existingUser = await userModel.findOne({email})
        if(existingUser){
            res.status(200).send({
                success: false,
                message:"Email already exists, Please login",
            })
        }
        const user = await userModel.create({firstName,lastName,email,password});
        res.status(201).send({
            success: true,
            message:"User created successfully",
            user
        });
    } catch (error) {
        console.error(error);
        res.status(400).send({
            message:"Error in register Controller",
            success: false,
            error
        })
    }
};