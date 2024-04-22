const express = require('express');
const router = express.Router();
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const getSignedUrl = async(req,res)=>{
try {
    return res.status(201).json({
        success: true,
        message: "Sending signed urls",
        error:{}
    })
} catch (error) {
    console.log("error in extract controller in sigining",error)
    return res.status(500).json({
      data: {},
      success: false,
      message: "Somthing went wrong in genrating signed url",
      error:error
    })
}
}

const parsePdf = async(req,res)=>{
    try {
        console.log('parse pdf')
        await delay(2 * 60 * 1000);
        // Delay the response for 2 minutes
            return res.status(201).json({
                success: true,
                message: "Sending parsed data",
                error: {}
            });
    } catch (error) {
        console.log("error in extract controller in parsing",error)
        return res.status(500).json({
          data: {},
          success: false,
          message: "Somthing went wrong in genrating signed url",
          error:error
        })
    }
}

router.post('/get-signed',getSignedUrl);
router.post('/start',parsePdf);

module.exports = router;