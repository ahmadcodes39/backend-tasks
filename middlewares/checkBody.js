export const checkBody = (req, res,next) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ status: "fail", ok: false, message: "Name is required" });
  }
  req.body.name = name.trim()
  next()
};
