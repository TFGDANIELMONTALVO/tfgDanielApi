import { UserModel } from "../../users/user.model.js";
import { GroupModel } from "../group.model.js";

export const groupDelete = async (req, res) => {
  try {
    const group = await GroupModel.findOne({ _id: req.params.id }).populate(
      "users"
    );
    const owner = await UserModel.findOne({ _id: req.body.ownerId._id });

    const ownerGroupsUpdated = [
      ...owner.ownerGroups.filter(
        (groupId) => groupId.toString() !== group._id.toString()
      ),
    ];

    owner.ownerGroups = ownerGroupsUpdated;

    group.deletedAt = new Date();

    await Promise.all([
      group.users.map(async (user) => {
        await UserModel.findByIdAndUpdate(user._id, {
          suscribedGroups: [
            ...user.suscribedGroups.filter(
              (groupId) => groupId.toString() !== group._id.toString()
            ),
          ],
        });
      }),
      owner.save(),
      group.save(),
    ]);

    return res.status(200).json({ message: "Group removed successfully" });
  } catch (error) {
    return res.status(400).json({ message: "Error" });
  }
};
