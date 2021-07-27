const express = require('express');
const router = express.Router();

const friendController = require('../controllers/friendController');

router.get("/all",friendController.getFriends);
router.get('/requests/received',friendController.getReceivedRequests);
router.get('/requests/sent',friendController.getSentRequests);
router.post("/add",friendController.addFriend);
router.post("/accept",friendController.acceptFriend);
router.post("/cancel",friendController.cancelFriend);
router.post("/remove",friendController.removeFriend);
router.get("/getOnline",friendController.getOnlineFriends);
router.get("/:friendid",friendController.getFriend);

module.exports = router;
