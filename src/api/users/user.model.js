import { Schema, model } from "mongoose";

const schemaUser = new Schema({
    name:{type:String, trim:true},
    userName:{type:String, unique:true, trim:true},
    tlfNumber:{type:Number, unique:true},
    email:{type:String, unique:true, required:true},
    password:{type:String},
    ownerGroups:[{type:Schema.Types.ObjectId, ref:"groups"}],
    suscribedGroups:[{type:Schema.Types.ObjectId, ref:"groups"}],
    createdAt:{type:Date, default:Date.now},
    deleteAt:{type:Date, default:null}
});

export const UserModel = model('users', schemaUser);