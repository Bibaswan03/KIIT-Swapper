import Message from "../../../models/message";
import conndb from "../../../middleware/mongoose";
const handler = async (req, res) => {
  if (req.method == "POST") {
    try {
      const { name, roll, email, phone, section, message, reciever } = req.body;
      const data = await Message.find({
        $or: [
          {
            $and: [{ reciever: req.body.reciever }, { email: req.body.email }],
          },
          {
            $and: [{ reciever: req.body.email }, { email: req.body.reciever }],
          },
        ],
      });

      if (data.length == 0) {
        const m = new Message({
          name: name,
          roll: roll,
          email: email,
          phone: phone,
          section: section,
          message: message,
          reciever: reciever,
        });

        const m1 = await m.save();
        res.status(201).json({ success: true, data: m1 });
      }
      else{
        res.status(200).json({ success: false});
      }
      //serverPusher.trigger('messages','new-message',m1);
    } catch (error) {
      res.status(400).send({ success: false, error: "erroe" });
    }
  } else {
    res.status(500).send({ error: "error method" });
  }
};
export default conndb(handler);
