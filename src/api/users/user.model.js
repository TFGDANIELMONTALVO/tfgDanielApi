import { Schema, model } from "mongoose";

const schemaUser = new Schema({
    userName:{type:String, unique:true},
    email:{type:String, unique:true},
    ownerGroups:[{type:Schema.Types.ObjectId, ref:"groups"}]
});

export const UserModel = model('users', schemaUser);