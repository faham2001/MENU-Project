const express = require('express');
const router = express.Router();
const Menu = require('../models/menuModel');

// Fetch all menus
router.get('/', async (req, res) => {
  try {
    const menus = await Menu.find();
    res.json(menus);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add new menu
router.post('/', async (req, res) => {
  const { name, description, items } = req.body;
  try {
    const newMenu = new Menu({ name, description, items });
    await newMenu.save();
    res.status(201).json(newMenu);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Fetch menu by ID
router.get('/:id', async (req, res) => {
  try {
    const menu = await Menu.findById(req.params.id);
    res.json(menu);
  } catch (err) {
    res.status(404).json({ error: "Menu not found" });
  }
});

module.exports = router;
