import { Delivery } from "../../models/index.js";
import { Users } from "../../models/index.js";
import { all } from "../admin/Users.js";

export const allDelivery = async (req, res) => {
  const sel = await Users.findAll({
    where: {
      email: req.body.userInfo,
    },
  });
  try {
    const allDelivery = await Delivery.findAll({
      where: {
        name: sel[0].name,
      },
    });
    res.json(allDelivery);
  } catch (error) {
    console.log(error);
  }
};

export const update = async (req, res) => {
  const { id } = req.params;
  try {
    const delivery = await Delivery.findOne({
      where: {
        id: id,
      },
    });
    delivery.status = req.body.status;
    await delivery.save();
    res.json({ msg: "Update Successful" });
  } catch (error) {}
};
