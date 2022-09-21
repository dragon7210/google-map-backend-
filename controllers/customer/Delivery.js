import { Delivery } from "../../models/index.js";
import { Users } from "../../models/index.js";

export const allDelivery = async (req, res) => {
  console.log(req.body.userInfo);
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
