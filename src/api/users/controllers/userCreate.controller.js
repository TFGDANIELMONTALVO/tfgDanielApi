import { UserModel } from "../user.model.js"

export const userCreate = async(req, res) => {
    try {
        const user = await UserModel.findOne({$or:[{userName:req.body.userName}, {email:req.body.email}]})
    if (user) {
        return res.status(400).json({message:"UserName or Email already registered"})
    }
    const userData = new UserModel(req.body)
    await userData.save()
    return res.status(201).json(userData)
    } catch (error) {
        return res.status(400).json({message:"Error validate in fields"})
        
    }
}