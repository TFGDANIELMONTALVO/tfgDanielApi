import { UserModel } from "../user.model.js";

export const userList = async (req, res) => {
  try {
    const users = await UserModel.find({}).populate([
      "ownerGroups",
      "suscribedGroups",
    ]);
    return res.json({
      totalCount: users.length,
      list: users,
    });
  } catch (error) {
    return res.status(400).json({ message: "Error" });
  }
};
