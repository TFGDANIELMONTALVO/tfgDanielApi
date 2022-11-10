import { UserModel } from "../user.model.js"

export const userCreate = async(req, res) => {
    const user = await UserModel.findOne({$or:[{userName:req.body.userName}, {email:req.body.email}]})
    if (user) {
        return res.json({message:"UserName or Email already registered"})
    }
    const userData = new UserModel(req.body)
    await userData.save()
    return res.json(userData)
}