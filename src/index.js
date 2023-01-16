
//import {echarts} from 'echarts'
//const echarts =require('echarts')
import * as echarts from 'echarts';

import ecStat from 'echarts-stat';

import option2 from './chart6';
import storage from './file-storage'
//console.log("echarts",echarts)
//import 'echarts-wordcloud'
import 'echarts-gl'
import { v4 as uuidv4 } from 'uuid';
import { validate as uuidValidate } from 'uuid';



const {readFile,writeFile} = storage;
const URL=require('url').URL;





echarts.registerTransform(ecStat.transform.regression);

// In SSR mode the first parameter does not need to be passed in as a DOM object
const chart = echarts.init(null, null, {
  renderer: 'svg', // must use SVG mode
  ssr: true, // enable SSR
  width: 800, // need to specify height and width
  height: 600
});

// setOption as normal
chart.setOption(option2);
console.log(JSON.stringify(option2,null,4))
// const svgStr = chart.renderToSVGString();
// console.log(svgStr)
// console.log("done")
// process.exit();
const meta={satus: 200,
    headers: {
      "Content-Type": "image/svg+xml",
      "Server":"Double Chain Echarts SVG Server 1.0"
    }
};

//console.log(option2)


// const uri="http://localhost:3000/6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b"
// const url=new URL(uri);
// console.log("pathname", url.pathname)

// const errorImage=await readFile('./data/error-svg.svg')
// console.log("content", content);

//writeFile(`./data/${url.pathname}.json`,url.pathname)
//process.exit();
const handleGet=(request)=>{
  const url=new URL(request.url);

  console.log(url.hostname)
  const svgStr = chart.renderToSVGString();
  //console.log(option2)
  //console.log("request text payload", svgStr);
  return new Response(svgStr,meta);
}

const handleGetImage=async (request)=>{
  const url=new URL(request.url);

  const content=await readFile(`./data/${url.pathname}.json`)
  const chartOutput = echarts.init(null, null, {
    renderer: 'svg', // must use SVG mode
    ssr: true, // enable SSR
    width: 800, // need to specify height and width
    height: 600
  });
  chartOutput.setOption(JSON.parse(content));



  console.log(url.hostname)
  const svgStr = chart.renderToSVGString();
  //console.log(option2)
  //console.log("request text payload", svgStr);
  return new Response(svgStr,meta);
}

const handlePutOption=async (request)=>{
  const url=new URL(request.url);
  const text=await request.text();
  const pathname=url.pathname;
  if(!uuidValidate(pathname.substring(1))){
    const message="not a uuid from request pathname: " + pathname;
    //return {message};
    return new Response(JSON.stringify({message}),meta);
  }
  //console.log(option2)
  //console.log("request text payload", svgStr);
  writeFile(`./data/${url.pathname}.json`,text)
  return new Response(text,meta);
}



const readData=()=>{
  console.log("reading data");
}
export default {
    port: 3000,
    async fetch(request) {

      //request.on("data",()=>readData());

      const url=new URL(request.url);
      if(request.method==='GET'  && url.pathname==='/test'){
        return handleGet(request);
      }
      if(request.method==='GET'  && url.pathname.startsWith('/')){
        return handleGetImage(request);
      }
      if(request.method==='PUT'){
        return handlePutOption(request);
      }
      if(request.method==='POST'){
        return handlePutOption(request);
      }
      




        
          
    }
}


// Output string


