import {Component} from 'react';
import ReactEcharts from 'echarts-for-react';
//import 'echarts/lib/chart/bar';
//const echarts = require('echarts/lib/echarts');
// // 引入柱状图
//require('echarts/lib/chart/bar');
// require('echarts/lib/chart/pie');
// 引入提示框和标题组件
// require('echarts/lib/component/tooltip');
// require('echarts/lib/component/title');
// require('echarts/lib/chart/pictorialBar');
 export default class BarGraph extends Component{
    getOption = () => {
    // option = {
    //     legend: {},
    //     tooltip: {},
    //     dataset: {
    //         source: [
    //             ['product', '2015', '2016', '2017'],
    //             ['Matcha Latte', 43.3, 85.8, 93.7],
    //             ['Milk Tea', 83.1, 73.4, 55.1],
    //             ['Cheese Cocoa', 86.4, 65.2, 82.5],
    //             ['Walnut Brownie', 72.4, 53.9, 39.1]
    //         ]
    //     },
    //     xAxis: {type: 'category'},
    //     yAxis: {},
    //     // Declare several bar series, each will be mapped
    //     // to a column of dataset.source by default.
    //     series: [
    //         {type: 'bar'},
    //         {type: 'bar'},
    //         {type: 'bar'}
    //     ]
    // };
  }
    render(){
        return(
            <ReactEcharts
                option={this.getOption()}/>
        )
    }
 }