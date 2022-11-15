import { Schema, model } from "mongoose";

const schemaPayments = new Schema({
    groupId:[{type:Schema.Types.ObjectId, ref:"groups"}],
    userId:[{type:Schema.Types.ObjectId, ref:"groups"}],
    status:{type:String},
    quantity:{type:String}
});

export const PaymentsModel = model('payments', schemaPayments);