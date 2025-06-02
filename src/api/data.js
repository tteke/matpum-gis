import db from "../database/connect";

export const GET = async (req, res, next) => {

  const result = await db.Building.findAll();

  res.send(result);

}
