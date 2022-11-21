import { Schema, model } from "mongoose";

const schemaPayments = new Schema({
    groupId:[{type:Schema.Types.ObjectId, ref:"groups"}],
    userId:[{type:Schema.Types.ObjectId, ref:"users"}],
    cardNumber:{type:Number, required:true},
    expirationDate:{type:Date, required:true},
    cvv:{type:Number, required:true},
    status:{type:String},
    quantity:{type:String}
});

export const PaymentsModel = model('payments', schemaPayments);