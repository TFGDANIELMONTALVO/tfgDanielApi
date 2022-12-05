import { Schema, model } from "mongoose";

const schemaGroup = new Schema({
    ownerId:{type:Schema.Types.ObjectId, ref:"users", required:true},
    category: {type:String, enum: ["Disney+", "Netflix Premium", "HBOmax"], required: true},
    serviceUser:{type:String, trim:true, required:true},
    servicePassword:{type:String, trim:true, required:true},
    price:{type:Number, required:true},
    numOfUsers:{type:Number, required:true},
    users:[{type:Schema.Types.ObjectId, ref:"users"}],
    payments:[{type:Schema.Types.ObjectId, ref:"payments"}],
    createdAt:{type:Date, default:Date.now}
});

export const GroupModel = model('groups', schemaGroup);