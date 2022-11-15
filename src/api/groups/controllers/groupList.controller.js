import { GroupModel } from "../group.model.js"

export const groupList = async(req, res) => {
    const groups = await GroupModel.find({})
    return res.json({
        totalCount:groups.length,
        list:groups
    })
}