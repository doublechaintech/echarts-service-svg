
//import {echarts} from 'echarts'
//const echarts =require('echarts')
import * as echarts from 'echarts';

import ecStat from 'echarts-stat';

import option2 from './chart6';
import storage from './file-storage'
//console.log("echarts",echarts)

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

console.log(option2)


// const uri="http://localhost:3000/123123"
// const url=new URL(uri);

// console.log("pathname", url.pathname)

const errorImage=await readFile('./data/error-svg.svg')
console.log("content", content);


process.exit();
const handleGet=(request)=>{
  const url=new URL(request.url);

  console.log(url.hostname)
  const svgStr = chart.renderToSVGString();
  //console.log(option2)
  //console.log("request text payload", svgStr);
  return new Response(svgStr,meta);
}

const handleGetImage=(request)=>{
  const url=new URL(request.url);

  console.log(url.hostname)
  const svgStr = chart.renderToSVGString();
  //console.log(option2)
  //console.log("request text payload", svgStr);
  return new Response(svgStr,meta);
}

const handlePutOption=(request)=>{
  const url=new URL(request.url);

  console.log(url.hostname)
  const svgStr = chart.renderToSVGString();
  //console.log(option2)
  //console.log("request text payload", svgStr);
  return new Response(svgStr,meta);
}


export default {
    port: 3000,
    async fetch(request) {
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
      




        
          
    }
}


// Output string


