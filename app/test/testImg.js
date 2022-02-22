const fs = require('fs');
const basePath = './uploads/';


exports.testImg = async (fileReq) =>{
    // console.log(fileReq);
    try {
        if (!fileReq.files) {
            throw "no file uploaded ";
            return;
        } else {
            let file = fileReq.files.image;
            const filePath = Date.now() + file.name;
            await file.mv(basePath +  filePath);

            const data = {
                name: file.name,
                path: filePath,
                mimetype: file.mimetype,
                size: file.size
            }
            return data;
        }
    } catch (err) {
        throw "file upload err : " + err;
    }
}


