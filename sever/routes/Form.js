const express = require("express");

const router = express.Router()

router.get("/form", (res, req) => {
    res.send({data:"Vamo"})
});

router.post("/form", (res, req) => {
    res.send({data:"Vamo"})
});

router.put("/form", (res, req) => {
    res.send({data:"Vamo"})
});

router.delete("/form", (res, req) => {
    res.send({data:"Vamo"})
});

module.exports = router;