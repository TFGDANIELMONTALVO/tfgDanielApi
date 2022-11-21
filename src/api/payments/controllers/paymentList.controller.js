import { PaymentsModel } from "../payments.model.js";

export const paymentList = async (req, res) => {
  try {
    const payments = await PaymentsModel.find({})
    return res.json({
      totalCount: payments.length,
      list: payments,
    });
  } catch (error) {
    return res.status(400).json({ message: "Error" });
  }
};
