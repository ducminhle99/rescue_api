const fs = require('fs');
const basePath = './uploads/';
const uploadFile = async (fileReq) => {
    console.log(fileReq.files)
    try {
        if (!fileReq.files) {
            throw "no file uploaded";
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
const deleteFile = async (path) => {
    try {
        fs.unlinkSync(basePath+path)
        return;
        //file removed
    } catch(err) {
        throw 'can not delete file err :'+err;
    }
}
module.exports = {
    uploadFile,
    deleteFile
}
