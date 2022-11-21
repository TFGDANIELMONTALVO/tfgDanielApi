import { PaymentsModel } from "../payments.model.js";

export const paymentCreate = async (req, res) => {
    try {
      const paymentData = new PaymentsModel(req.body);
      const groupDataCreated = await paymentData.save();
      //await UserModel.findByIdAndUpdate(groupData.ownerId, {$push: {ownerGroups:groupDataCreated._id}}, {new:true});
      //return res.status(201).json(groupDataCreated);
      return res.status(201).json(paymentData);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Error validate in fields" });
    }
  };