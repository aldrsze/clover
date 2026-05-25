const express = require('express');
const router = express.Router();
const adminOrderController = require('../controllers/adminOrderController');

router.get('/', adminOrderController.getOrders);
router.get('/:id', adminOrderController.getOrderById);
router.put('/:id', adminOrderController.updateOrder);
router.delete('/:id', adminOrderController.deleteOrder);

module.exports = router;
