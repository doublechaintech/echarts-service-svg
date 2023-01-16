const fs = require('fs').promises;
const fsSync = require('fs');

// // This must run inside a function marked `async`:
// const file = await fs.readFile('filename.txt', 'utf8');
// await fs.writeFile('filename.txt', 'test');


const writeFile=async (filepath,content)=>{
    await fs.writeFile(filepath, content);
}

const readFile=async (filepath)=>{
    const content = await fs.readFile(filepath, 'utf8');
    return content;
    
}
const fileExists=async (filepath)=>{
    const result =  fsSync.existsSync(filepath);
    //console.log("result, result",result)
    return result
    



}
const storageLib={writeFile,readFile,fileExists}
export default storageLib;
