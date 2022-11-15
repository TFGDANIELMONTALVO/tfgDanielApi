import { Schema, model } from "mongoose";

const schemaGroup = new Schema({
    name:{type:String, trim:true},
    category:{},
    price:{type:Number},
    ownerId:[{type:Schema.Types.ObjectId, ref:"users"}],
    numOfUsers:{type:Number},
    users:[{type:Schema.Types.ObjectId, ref:"users"}],
    payments:{type:Schema.Types.ObjectId, ref:"payments"}
});

export const GroupModel = model('groups', schemaGroup);