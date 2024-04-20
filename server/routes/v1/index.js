const express = require('express');
const router = express.Router();


const getSignedUrl = (req,res)=>{
try {
    console.log('sign')
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
const parsePdf = (req,res)=>{
    try {
        console.log('parse pdf')
        // Delay the response for 2 minutes
        setTimeout(() => {
            return res.status(201).json({
                success: true,
                message: "Sending parsed data",
                error: {}
            });
        }, 2 * 60 * 1000); 
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