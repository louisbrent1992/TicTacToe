const express = require("express");
const router = express.Router();
const controller = require("./controller");

// Getting all data requested by user
router.get('/', controller.list)

// Getting all data specified by id that is requested by user
router.get('/:id', controller.list)

// Creating a new data entry
router.post('/:id')

// Updating an existing data entry
router.patch('/:id')

// Deleting an existing data entry 
router.delete('/:id')

module.exports = router;