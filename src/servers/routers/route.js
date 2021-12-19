const express = require('express')
const router = express.Router()

router.get('/api', (req, res) => res.json({data:'home'}))
module.exports = router;