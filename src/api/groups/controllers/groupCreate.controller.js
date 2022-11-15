import { GroupModel } from "../group.model.js"

export const groupCreate = async(req, res) => {
    const groupData = new GroupModel(req.body)
    await groupData.save()
    return res.json(groupData)
}