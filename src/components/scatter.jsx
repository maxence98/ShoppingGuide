import ReactECharts from 'echarts-for-react';
// TODO: Import echarts components to make it efficient


const Scatter = ({data}) => {
    const options = {
        dataset: [{
            source: data
        }],
        // title: {
        //     text: 'Which kind of milk is the best?', 
        //     textStyle: {
        //         fontWeight: 400,
        //         fontFamily: 'Open Sans',
        //         fontSize: 24
        //     },
        // },
        tooltip: {
            axisPointer: {
            type: 'cross',
            snap: true
            },
            formatter: function(params) {return `
                Product Name: ${params.data.ProductNameEng}<br>
                Brand: ${params.data.Brand}<br>
                Sales Rank: ${params.data.SalesRank}<br>
                Country of Origin: ${params.data.Origin}<br>
                Organic/Non-organic: ${params.data.Organic}<br>
                Fat: ${params.data.LowFat}<br>
                Price: ¥${params.data.Price}<br>
                Net Wt.: ${params.data.NetWt}g<br>
                Quantity: ${params.data.quantity} Packs<br>
                <p class="link">Click the dot to view the product page.</p>`
            }
        },
        legend: {},
        xAxis: {
            name: 'Unit Price (CNY*/Liter)',
            type: 'value',
            max: 45,
            min: 5,
            nameLocation: 'middle',
            nameGap: 30
        },
        yAxis: {
            name: 'Nutrition Fact: Protein (g/100mL)',
            type: 'value',
            max: 4.2,
            min: 2.7,
            nameLocation: 'middle',
            nameGap: 40
        },
        visualMap: [{
            type: 'continuous',
            dimension: 1,
            min: 1,
            max: 100,
            calculable: true,
            text: ['Sales Rank'],
            orient: 'horizontal',
            align: 'left',
            top: 0,
            right: 0,
            inRange: {
                opacity: [1, 0.1],
            }
        }],
        series: [{
            type: 'scatter',
            encode: {
                x: 'UnitPrice',
                y: 'protein'
            }
        }]
    };

    const onEvents = {
        'click': (params) => {
            window.open(params.data.ProductPage) /* Click to open the product page*/
          },
        //'legendselectchanged': this.onChartLegendselectchanged
      }
  
    return (
        <ReactECharts
            option={options} 
            onEvents={onEvents}
        />
    );
  };
  
  export default Scatter;