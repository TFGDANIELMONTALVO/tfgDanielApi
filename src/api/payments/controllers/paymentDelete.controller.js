import { PaymentsModel } from "../payments.model.js";

export const paymentDelete = async (req, res) => {
    try {
      await PaymentsModel.deleteOne({ _id: req.params.id });
      return res.json({ message: "Payment removed successfully" });
    } catch (error) {
      return res.status(400).json({ message: "Error" });
    }
  };