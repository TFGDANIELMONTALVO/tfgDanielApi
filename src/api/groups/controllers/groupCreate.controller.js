import { UserModel } from "../../users/user.model.js";
import { GroupModel } from "../group.model.js";

export const groupCreate = async (req, res) => {
  try {
    const group = new GroupModel(req.body);

    const groupDataCreated = await group.save();
    
    await UserModel.findByIdAndUpdate(group.ownerId, {$push: {ownerGroups:groupDataCreated._id}}, {new:true});

    return res.status(201).json(groupDataCreated);
    
  } catch (error) {
    return res.status(400).json({ message: "Error validate in fields" });
  }
};
