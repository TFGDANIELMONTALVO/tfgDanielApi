import { UserModel } from "../user.model.js"

export const userDelete = async(req, res) => {
    await UserModel.deleteOne(req.params.id)
    return res.json({message:"User removed successfully"})
}