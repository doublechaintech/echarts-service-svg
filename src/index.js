const echarts = require('echarts');

// In SSR mode the first parameter does not need to be passed in as a DOM object
const chart = echarts.init(null, null, {
  renderer: 'svg', // must use SVG mode
  ssr: true, // enable SSR
  width: 400, // need to specify height and width
  height: 300
});

// setOption as normal
chart.setOption({
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar'
    }
  ]
});

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

export default {
    port: 3000,
    async fetch(request) {

          const svgStr = chart.renderToSVGString();
          console.log("request text payload", "dd");
          return new Response(svgStr,meta);
    }
}


// Output string


