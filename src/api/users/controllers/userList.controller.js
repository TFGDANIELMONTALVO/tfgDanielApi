import { UserModel } from "../user.model.js"

export const userList = async(req, res) => {
    const users = await UserModel.find({})
    return res.json({
        totalCount:users.length,
        list:users
    })
}