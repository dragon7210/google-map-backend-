import { Delivery } from "../models/index.js";

export const DeliveryAdd = async (req, res) => {
  const { sel, selProduct } = req.body.deliveryInfo;
  const { lat, lng } = req.body.pos[0];
  console.log(req.body);
  const temp = [];
  selProduct.forEach((element) => {
    temp.push(element.value);
  });
  try {
    await Delivery.create({
      name: sel,
      products: temp.toString(),
      position_lat: lat,
      position_lng: lng,
    });
    res.json({ msg: "Add successful" });
  } catch (error) {}
};

export const getDeliverys = async (req, res) => {
  try {
    const allDilvery = await Delivery.findAll();
    res.json(allDilvery);
  } catch (error) {
    console.log(error);
  }
};

export const DeliveryDel = async (req, res) => {
  console.log(123);
  try {
    await Delivery.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({ msg: "Delete Successful" });
  } catch (error) {}
};
