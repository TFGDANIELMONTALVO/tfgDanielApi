import { UserModel } from "../user.model.js"

export const userUpdate = async(req, res) => {
    await UserModel.findByIdAndUpdate(req.params.id)
    
    const userData = new UserModel(req.params)
    await userData.update()
    return res.json({message:"User removed successfully"})
}