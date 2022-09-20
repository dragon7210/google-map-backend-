export * from "./DeliveryModel.js";
export * from "./UserModel.js";
import db from "../config/Database.js";

(async () => {
  await db.sync();
})();
