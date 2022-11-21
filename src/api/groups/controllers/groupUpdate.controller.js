import { GroupModel } from "../group.model.js";

export const groupUpdate = async (req, res) => {
  try {
    const updatedGroup = await GroupModel.findByIdAndUpdate(
      { _id: req.params.id },
      { ...req.body },
      { new: true }
    );
    return res.json(updatedGroup);
  } catch (error) {
    return res.status(400).json({ message: "Error" });
  }
};
