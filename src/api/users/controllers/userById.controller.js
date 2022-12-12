import { UserModel } from "../user.model.js"

export const userById = async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.id).populate(["ownerGroups", "suscribedGroups"]);
        await UserModel.populate(user, {path: "suscribedGroups.ownerId"})
        return res.json(user);
    } catch (error) {
        return res.status(400).json({ message: "Resource not found" });
    }    
}