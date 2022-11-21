import { UserModel } from "../user.model.js";

export const userUpdate = async (req, res) => {
  try {
    const updatedUser = await UserModel.findByIdAndUpdate(
      { _id: req.params.id },
      { ...req.body },
      { new: true }
    );
    return res.json(updatedUser);
  } catch (error) {
    return res.status(400).json({ message: "Error" });
  }
};
