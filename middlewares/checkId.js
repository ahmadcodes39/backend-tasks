import { users } from "../constant.js";

export const checkId = (req, res, next) => {
  const id = Number(req.params.id);
  if (Number.isNaN(id)) {
    return res
      .status(400)
      .json({ status: "fail", ok: false, message: "Id must be a number" });
  }

  const user = users.find((u) => u.id === id);
  if (!user) {
    return res
      .status(400)
      .json({ status: "fail", ok: false, message: "User not found" });
  }
  req.user = user;
  next();
};
