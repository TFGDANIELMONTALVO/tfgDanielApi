import { UserModel } from "../../users/user.model.js";
import { GroupModel } from "../group.model.js";

export const joinGroup = async (req, res) => {
  try {
    const groupDataUpdated = await GroupModel.findByIdAndUpdate(
      { _id: req.params.groupId },
      { $push: { users: req.body._id } },
      { new: true }
    );
    await UserModel.findByIdAndUpdate(
      { _id: req.body._id },
      { $push: { suscribedGroups: req.params.groupId } },
      { new: true }
    );
    return res.status(201).json(groupDataUpdated);
  } catch (error) {
    return res.status(400).json({ message: "Error" });
  }
};
