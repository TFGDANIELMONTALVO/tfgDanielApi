import { UserModel } from "../../users/user.model.js";
import { GroupModel } from "../group.model.js";

export const joinGroupDelete = async (req, res) => {
    try {
      const [user, group] = await Promise.all([
          UserModel.findById(req.body.userId),
          GroupModel.findById(req.params.groupId)
      ]);
  
      if (!user || !group) {
        return res.status(404).json({ error: "User or group not found" });
      }
      
      const updatedArrUser = [...user.suscribedGroups.filter((item) => item.toString() !== group._id.toString())];
      const updatedArrGroup = [...group.users.filter((item) => item.toString() !== user._id.toString())];

      //console.log(updatedArrUser)
      //console.log(updatedArrGroup)

      
      user.suscribedGroups = updatedArrUser;
      group.users = updatedArrGroup;

      const updatedUser = await user.save();
      const updatedGroup = await group.save();
      
      //console.log(updatedUser)
  
      await Promise.all([
        GroupModel.populate(updatedGroup, { path: "users" }),
        UserModel.populate(updatedUser, { path: "suscribedGroups" }),
      ]);
  
      return res.status(200).json({
        group: updatedGroup
      });

    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Error" });
    }
  };