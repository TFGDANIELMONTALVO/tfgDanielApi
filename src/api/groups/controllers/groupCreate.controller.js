import { UserModel } from "../../users/user.model.js";
import { GroupModel } from "../group.model.js";

export const groupCreate = async (req, res) => {
  try {
    const groupData = new GroupModel(req.body);
    const groupDataCreated = await groupData.save();
    //console.log(groupDataCreated);
    await UserModel.findByIdAndUpdate(groupData.ownerId, {$push: {ownerGroups:groupDataCreated._id}}, {new:true});
    return res.status(201).json(groupDataCreated);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Error validate in fields" });
  }
};
