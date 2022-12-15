import { UserModel } from "../user.model.js";
import _ from "lodash";

export const userDelete = async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.id).populate(
      "ownerGroups",
      "suscribedGroups"
    );

    if (!_.isEmpty(user.ownerGroups)) {
      return res
        .status(400)
        .json({
          message:
            "No puedes borrar tu cuenta con grupos creados todavía existentes",
        });
    }

    user.deleteAt = new Date();

    await Promise.all([
      user.suscribedGroups.map(async (group) => {
        if (!group) return null;
        group.users = [
          ...group.users.filter(
            (userId) => userId.toString() !== user._id.toString()
          ),
        ];
        await group.save();
      }),
      user.save(),
    ]);

    return res.json({ message: "User removed successfully" });
  } catch (error) {
    return res.status(400).json({ message: "Error" });
  }
};
