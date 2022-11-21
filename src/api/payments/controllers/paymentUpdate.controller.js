import { PaymentsModel } from "../payments.model.js";

export const paymentUpdate = async (req, res) => {
    try {
      const updatedPayment = await PaymentsModel.findByIdAndUpdate(
        { _id: req.params.id },
        { ...req.body },
        { new: true }
      );
      return res.json(updatedPayment);
    } catch (error) {
      return res.status(400).json({ message: "Error" });
    }
  };