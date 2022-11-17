import { GroupModel } from "../group.model.js"


export const groupDelete = async(req, res) => {
    await GroupModel.deleteOne({_id:req.params.id})
    return res.json({message:"Group removed successfully"})
}