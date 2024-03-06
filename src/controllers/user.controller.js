import { asyncHandler } from "../utils/asyncHanlder.js";

const registeUser = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "ok",
  });
});


export {registeUser}