const express = require("express");
const router = express.Router();
const menuItemController = require("../controllers/menuItemController");

// POST request to add a new menu item
router.post("/", menuItemController.createMenuItem);

// GET request for one menu item by id
router.get("/:id", menuItemController.getMenuItemById);

// GET request for all menu items
router.get("/", menuItemController.getAllMenuItems);

// PUT request to update a menu item by id
router.put("/:id", menuItemController.updateMenuItem);

// DELETE request to delete a menu item by id
router.delete("/:id", menuItemController.deleteMenuItem);

module.exports = router;
