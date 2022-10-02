const router = require("express").Router();
const KEY = process.env.PAYPAL_KEY;
// const paypal = require("@paypal/paypal-js")(KEY);

router.post("/payment", (req, res) => {
    paypal.charges.create({
        source: req.body.tokenId,
        amount: req.body.amount,
        currency: "zar",
    }, (paypalErr, paypalRes) => {
        if(paypalErr){
            res.status(500).json(paypalErr);
        }else{
            res.status(200).json(paypalRes);
        }
    });
});

module.exports = router;