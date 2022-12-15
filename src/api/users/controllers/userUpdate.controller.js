import { UserModel } from "../user.model.js";
import bcrypt from "bcrypt";


export const userUpdate = async (req, res) => {
  try {
    const bodyUpdated = {...req.body};
    if (req.body.password) {
      const password = bodyUpdated.password
      const hash = await bcrypt.hash(password, 10)
      bodyUpdated.password = hash
    }

    const updatedUser = await UserModel.findByIdAndUpdate(
      { _id: req.params.id },
      { ...bodyUpdated  },
      { new: true }
    );
    
    return res.json(updatedUser);
  } catch (error) {
    return res.status(400).json({ message: "Error" });
  }
};
