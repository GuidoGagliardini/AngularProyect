const fs = require("fs"); // file system
const uuid = require("uuid");


const saveImage = (file) =>{
    const extensionAllow = ["jpeg","jpg","png","pdf"];
    let fileNameResult = "" //UUID extension
    const {mimetype , filename} = file;
    const extension = mimetype.split("/")[1]; // aca con split separo la cadena y me quedo con la extension[jpg,png,etc]
    if (extensionAllow.includes(extension)){
        const uid = uuid();
        fileNameResult = `${uid}${extension}`;// aca creo el nombre de la imagen quedaria algo asi
                                            // // asd1822e-ansd8123qew-asd9ja0n1.png
        const fileNameTmp = `./public/tmp/${filename}`;
        const fileNameOut = `./public/images/${fileNameResult}`;
        fs.createReadStream(fileNameTmp).pipe(fs.createWriteStream(fileNameOut));
        fs.unlink(fileNameTmp, (error) => console.error(error));
    }
    return fileNameResult;
   
};

module.exports = {
    saveImage
  };