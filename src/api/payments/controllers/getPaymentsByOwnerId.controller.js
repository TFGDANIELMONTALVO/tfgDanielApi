import { GroupModel } from "../../groups/group.model.js"
import { differenceInDays } from "date-fns";
import _ from "lodash";
import { PaymentsModel } from "../payments.model.js";

export const getPaymentsByOwnerId = async (req, res) => {
    try {
        const groups = await GroupModel.find({ownerId: req.params.id}).populate("payments")
        if (_.isEmpty(groups)) {
            return res.status(400).json({ error: "group not found" });    
        }

        const today = new Date()

        let completedPayments = []

        let pendingPayments = []

        let totalAmountCompleted = 0
        let totalAmountPending = 0

        await groups.reduce(async(prev,group)=>{
            await prev;
            await group.payments.reduce(async(prev2, payment) => {
                await prev2;
                if (differenceInDays(today, payment.createdAt)<30) {
                    if (payment.status === "Completed") {
                        await PaymentsModel.populate(payment, {path: "groupId"})
                        completedPayments.push(payment)
                        totalAmountCompleted+=payment.quantity
                    }
                    if (payment.status === "Pending") {
                        pendingPayments.push(payment)
                        totalAmountPending+=payment.quantity
                    }
                }
                
            }, Promise.resolve())
        }, Promise.resolve())


        const paymentsCompletedByGroup = _.groupBy(completedPayments, "groupId._id")
        const paymentsPendingByGroup = _.groupBy(pendingPayments, "groupId._id")


        

        return res.status(200).json({
            totalAmountCompleted, 
            totalAmountPending, 
            completedPayments:paymentsCompletedByGroup, 
            pendingPayments: paymentsPendingByGroup})
    } catch (error) {
        console.log(error)
    }
}