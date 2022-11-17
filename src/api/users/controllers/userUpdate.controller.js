import { UserModel } from "../user.model.js"

export const userUpdate = async(req, res) => {
    const updatedUser = await UserModel.findByIdAndUpdate({_id:req.params.id}, {...req.body}, {new:true})
    return res.json(updatedUser)
}