const exp = require('express');
const router = exp.Router();

router.get('/henk', (req,res)=>
{
    res.send("Hello world!");
});

module.exports = router;