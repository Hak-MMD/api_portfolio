const { dataModel } = require("../models/Data");
require("dotenv").config();

const getData = async (req, res) => {
  try {
    const data = await dataModel.find({});

    res.status(200).json(data);
  } catch (error) {
    console.error(error);
  }
};

const login = async (req, res) => {
  const role = req.body.role;
  const pass = req.body.pass;
  try {
    if (pass == process.env.PASS && role == process.env.ROLE) {
      return res.status(200).json({ pass, role });
    } else {
      return res.status(400).json({ message: "Wrong credentials!" });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error! Try again later.", error });
  }
};

const editData = async (req, res) => {
  const newData = req.body.data;
  console.log(newData);
  try {
    const data = await dataModel.findOneAndUpdate({}, newData, { new: true });

    res.status(200).json(data);
  } catch (error) {
    console.error(error);
  }
};

const post = async (req, res) => {
  const newData = req.body.data;
  console.log(newData);
  try {
    const data = await dataModel.create(newData);

    res.status(200).json(data);
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getData,
  editData,
  login,
  post,
};
