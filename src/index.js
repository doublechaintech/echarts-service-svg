
//import {echarts} from 'echarts'
//const echarts =require('echarts')
import * as echarts from 'echarts';

import ecStat from 'echarts-stat';

import option2 from './chart6';

//console.log("echarts",echarts)

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
//process.exit();
export default {
    port: 3000,
    async fetch(request) {

          const svgStr = chart.renderToSVGString();
          console.log(option2)
          console.log("request text payload", svgStr);
          return new Response(svgStr,meta);
    }
}


// Output string


