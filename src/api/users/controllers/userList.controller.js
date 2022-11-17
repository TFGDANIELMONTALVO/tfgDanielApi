import { UserModel } from "../user.model.js";

export const userList = async (req, res) => {
  try {
    const users = await UserModel.find({}).populate(["ownerGroups", "suscribedGroups"]);
    // await Promise.all([
    //     UserModel.populate(users, {path:"ownerGroups"}),
    //     UserModel.populate(users, {path:"suscribedGroups"})
    // ])
    return res.json({
      totalCount: users.length,
      list: users,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Error" });
  }
};
