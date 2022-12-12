import { Schema, model } from "mongoose";

const schemaPayments = new Schema({
    groupId:{type:Schema.Types.ObjectId, ref:"groups", required: true},
    emiterUserId:{type:Schema.Types.ObjectId, ref:"users", required: true},
    recivedUserId:{type:Schema.Types.ObjectId, ref:"users", required: true},
    status: {type:String, enum: ["Completed", "Pending"], required: true},
    quantity:{type:Number, required: true},
    createdAt:{type:Date, default:Date.now}
});

export const PaymentsModel = model('payments', schemaPayments);