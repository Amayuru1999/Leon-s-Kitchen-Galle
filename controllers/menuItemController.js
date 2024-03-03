const MenuItem = require("../model/menuItem");

exports.createMenuItem = async (req, res) => {
  try {
    const menuItem = new MenuItem(req.body);
    const savedMenuItem = await menuItem.save();
    res.status(201).json(savedMenuItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getAllMenuItems = async (req, res) => {
  try {
    const menuItems = await MenuItem.find();
    res.json(menuItems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getMenuItemById = async (req, res) => {
  try {
    const menuItem = await MenuItem.findById(req.params.id);
    if (!menuItem) {
      return res.status(404).json({ message: "MenuItem not found" });
    }
    res.json(menuItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateMenuItem = async (req, res) => {
  try {
    const updatedMenuItem = await MenuItem.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedMenuItem) {
      return res.status(404).json({ message: "MenuItem not found" });
    }
    res.json(updatedMenuItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteMenuItem = async (req, res) => {
  try {
    const menuItem = await MenuItem.findByIdAndDelete(req.params.id);
    if (!menuItem) {
      return res.status(404).json({ message: "MenuItem not found" });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/*
const MenuItem = require("../model/menuItem");

// Create a new
const createMenuItem = async (req, res) => {
  try {
    const menuItem = new MenuItem({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
      imageUrl: req.body.imageUrl,
    });
    const savedMenuItem = await menuItem.save();
    res.status(201).json(savedMenuItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getAllMenuItems = async (req, res) => {
  try {
    const menuItems = await MenuItem.find();
    res.json(menuItems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getMenuItemById = async (req, res) => {
  try {
    const menuItem = await MenuItem.findById(req.params.id);
    if (menuItem) {
      res.json(menuItem);
    } else {
      res.status(404).json({ message: "MenuItem not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateMenuItem = async (req, res) => {
  try {
    const menuItem = await MenuItem.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (menuItem) {
      res.json(menuItem);
    } else {
      res.status(404).json({ message: "MenuItem not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a menu item by ID
const deleteMenuItem = async (req, res) => {
  try {
    const menuItem = await MenuItem.findByIdAndDelete(req.params.id);
    if (menuItem) {
      res.json({ message: "MenuItem deleted successfully" });
    } else {
      res.status(404).json({ message: "MenuItem not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Group and export all controller functions
module.exports = {
  createMenuItem,
  getAllMenuItems,
  getMenuItemById,
  updateMenuItem,
  deleteMenuItem,
};
*/
