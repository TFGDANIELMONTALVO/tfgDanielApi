import { UserModel } from "../../users/user.model.js";
import { GroupModel } from "../group.model.js";
import mongoose from "mongoose";
import { PaymentsModel } from "../../payments/payments.model.js";

export const joinGroup = async (req, res) => {
  try {
    const [user, group] = await Promise.all([
      UserModel.findById(req.body.userId),
      GroupModel.findById(req.params.groupId)
    ]);

    console.log(group)

    if (!user || !group) {
      return res.status(400).json({ error: "user or group not found" });
    }

    if (group.users.length >= group.numOfUsers){
      return res.json({ error: "grupo al maximo"})
    }

    if (
      group.users.includes(user._id) ||
      user.suscribedGroups.includes(group._id)
    ) {
      return res.status(400).json({ error: "User or group already joined" });
    }

    

    group.users.push(mongoose.Types.ObjectId(user._id));
    user.suscribedGroups.push(mongoose.Types.ObjectId(group._id));

    const payment = new PaymentsModel({
      groupId: group._id,
      emiterUserId: user._id,
      recivedUserId: group.ownerId,
      status: "Completed",
      quantity: group.price
    });

    const createdPayment = await payment.save();

    group.payments.push(mongoose.Types.ObjectId(createdPayment._id))

    const groupUpdated = await group.save();
    const userUpdated = await user.save();

    await Promise.all([
      GroupModel.populate(groupUpdated, { path: "users" }),
      UserModel.populate(userUpdated, { path: "suscribedGroups" })
    ]);

    return res.status(200).json({
      group: groupUpdated,
      user: userUpdated,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Error" });
  }
};
