import { UserModel } from "../user.model.js";
import bcrypt from "bcrypt";

export const userCreate = async (req, res) => {
  try {
    const user = await UserModel.findOne({
      $or: [
        { userName: req.body.userName },
        { tlfNumber: req.body.tlfNumber },
        { email: req.body.email },
      ],
    });
    if (user) {
      return res
        .status(400)
        .json({ message: "UserName, PhoneNumber or Email already registered" });
    }
    const userData = new UserModel(req.body);

    const password = userData.password
    const hash = await bcrypt.hash(password, 10)
    userData.password = hash
    await userData.save();

    return res.status(201).json(userData);
  } catch (error) {
    console.log(error)
    return res.status(400).json({ message: "Error validate in fields" });
  }
};
