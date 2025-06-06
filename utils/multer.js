// packages 
const multer = require('multer');
const path = require("path");

// multer storage
const storage = multer.diskStorage({
               destination:function(req,file,cb){
                              cb(null,'uploads/')
               },
               filename:function (req, file, cb) {
    const ext = path.extname(file.originalname);
    cb(null, Date.now() + ext);
  },
})
// multer upload 
const upload = multer({
  storage,
  limits: { fileSize: 1024 * 1024 * 2 },
});

module.exports = upload;
