import { UserModel } from "../user.model.js";

export const userDelete = async (req, res) => {
  try {
    await UserModel.deleteOne({ _id: req.params.id });
    return res.json({ message: "User removed successfully" });
  } catch (error) {
    return res.status(400).json({ message: "Error" });
  }
};
