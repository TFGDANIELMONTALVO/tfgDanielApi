import { UserModel } from "../user.model.js";

export const userLogin = async (req, res) => {
  try {
    const user = await UserModel.findOne({email:req.body.email, password:req.body.password})
    if(!user) {
        return res.status(401).json(false);
    }
    return res.status(200).json(user);
  } catch (error) {
    return res.status(400).json({ message: "Error validate in fields" });
  }
};
