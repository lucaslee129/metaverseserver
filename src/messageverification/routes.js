const express = require('express');

const controller = require('./controller/index');

const router = express.Router();

//  @route  POST /verify/verifySign
//  @desc   Verification Signature made using Metamask
//  @access Public

router.post('/verifySign', (req, res) => {
  const { signature, address, message } = req.body;
  const result = controller.dataVerify(signature, address, message);
  if (result === true) {
    res.status(200).json({ result: "Success" });
  } else {
    res.status(200).json({ result: "Fail" });
  }
});

module.exports = router;
