import SwappedUsers from "../../../models/swappedusers";
import conndb from "../../../middleware/mongoose";

const handler = async (req, res) => {
    if (req.method == "POST") {
        
        try {
            const data = await SwappedUsers.findOne({email:req.body.email});
            const data2 = await SwappedUsers.findOne({email:data.swapbuddy})

            res.status(201).json({success:true,data,data2});
        } catch (error) {
            res.status(400).json({success:false, error: error });
        }
    } else {
        res.status(201).json({success:false, error: "error method" });
    }
};
export default conndb(handler);