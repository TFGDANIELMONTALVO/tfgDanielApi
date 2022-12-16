import { UserModel } from "../user.model.js";
import bcrypt, { compare } from "bcrypt";

export const userLogin = async (req, res) => {
  try {
    const user = await UserModel.findOne({
      email: req.body.email,
      deleteAt: null,
    });
    if (!user) {
      return res.status(401).json(false);
    }

    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (isMatch) {
      return res.status(200).json(user);
    } else {
      return res.status(400).json(false);
    }
  } catch (error) {
    return res.status(400).json({ message: "Error" });
  }
};
