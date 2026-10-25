import { users } from "../constant.js";

export const getAllUsers = (req, res) => {
  res.status(200).json({
    status: "success",
    ok: true,
    total: users.length,
    data: { users },
  });
};

export const getUser = (req, res) => {
  return res
    .status(200)
    .json({ status: "success", ok: true, data: { user: req.user } });
};

export const createUser = (req, res) => {
  const newUser = {
    id: users.at(-1).id + 1,
    name: req.body.name,
  };
  users.push(newUser);
  res.status(201).json({
    status: "success",
    ok: true,
    data: { user: newUser },
  });
};

export const updateUser = (req, res) => {
  const user = req.user;
  user.name = req.body.name;
  res.status(200).json({
    status: "success",
    ok: true,
    data: { user },
  });
};

export const deleteUser = (req, res) => {
  const index = users.findIndex((u) => u.id === req.user.id);
  users.splice(index, 1);
  res.status(203).send();
};
