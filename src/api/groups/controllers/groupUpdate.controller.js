import { GroupModel } from "../group.model.js"


export const groupUpdate = async(req, res) => {
    const updatedGroup = await GroupModel.findByIdAndUpdate({_id:req.params.id}, {...req.body}, {new:true})
    return res.json(updatedGroup)
}