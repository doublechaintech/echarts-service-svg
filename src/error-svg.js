import storage from './file-storage'
const {readFile,writeFile,fileExists} = storage;



const genErrorImage=async (props)=>{

    const content =await readFile(`./assets/error-svg.svg`)
    
    let finalContent=content;
    for (const [key, value] of Object.entries(props)) {
        console.log(`${key}: ${value}`);
        finalContent = finalContent.replace(`__${key}__`,`${value}`)
    }

    


    return finalContent;

}




const errorImageLib={genErrorImage}
export default errorImageLib;