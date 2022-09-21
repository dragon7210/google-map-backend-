import { Delivery } from "../../models/index.js";

export const DeliveryAdd = async (req, res) => {
  const { sel, selProduct } = req.body.deliveryInfo;

  const temp = [];
  selProduct.forEach((element) => {
    temp.push(element.value);
  });
  try {
    await Delivery.create({
      name: sel,
      products: temp.toString(),
      from_lat: req.body.pos[0].lat,
      from_lng: req.body.pos[0].lng,
      to_lat: req.body.pos[1].lat,
      to_lng: req.body.pos[1].lng,
    });
    res.json({ msg: "Add successful" });
  } catch (error) {}
};

export const getDeliverys = async (req, res) => {
  try {
    const allDelivery = await Delivery.findAll();
    res.json(allDelivery);
  } catch (error) {
    console.log(error);
  }
};

export const DeliveryDel = async (req, res) => {
  try {
    await Delivery.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({ msg: "Delete Successful" });
  } catch (error) {}
};
