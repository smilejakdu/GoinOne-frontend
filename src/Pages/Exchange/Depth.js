import React, { Component } from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact_Depth from "highcharts-react-official";
import highchartsMore from "highcharts/highcharts-more";
highchartsMore(Highcharts);

class Depth extends Component {
  constructor() {
    super();
    this.state = {
      options: {
        chart: {
          type: "area",
          zoomType: "xy"
        },
        title: {
          text: "ETH-BTC Market Depth"
        },
        xAxis: {
          minPadding: 0,
          maxPadding: 0,
          plotLines: [
            {
              color: "#888",
              value: 0.1523,
              width: 1,
              label: {
                text: "Actual price",
                rotation: 90
              }
            }
          ],
          title: {
            text: "Price"
          }
        },
        yAxis: [
          {
            lineWidth: 1,
            gridLineWidth: 1,
            title: null,
            tickWidth: 1,
            tickLength: 5,
            tickPosition: "inside",
            labels: {
              align: "left",
              x: 8
            }
          },
          {
            opposite: true,
            linkedTo: 0,
            lineWidth: 1,
            gridLineWidth: 0,
            title: null,
            tickWidth: 1,
            tickLength: 5,
            tickPosition: "inside",
            labels: {
              align: "right",
              x: -8
            }
          }
        ],
        legend: {
          enabled: false
        },
        plotOptions: {
          area: {
            fillOpacity: 0.2,
            lineWidth: 1,
            step: "center"
          }
        },
        tooltip: {
          headerFormat:
            '<span style="font-size=10px;">Price: {point.key}</span><br/>',
          valueDecimals: 2
        },
        series: [
          {
            name: "Bids",
            data: [
              [0.1524, 0.948665],
              [0.1539, 35.510715],
              [0.154, 39.883437],
              [0.1541, 40.499661],
              [0.1545, 43.262994000000006],
              [0.1547, 60.14799400000001],
              [0.1553, 60.30799400000001],
              [0.1558, 60.55018100000001],
              [0.1564, 68.381696],
              [0.1567, 69.46518400000001],
              [0.1569, 69.621464],
              [0.157, 70.398015],
              [0.1574, 70.400197],
              [0.1575, 73.199217],
              [0.158, 77.700017],
              [0.1583, 79.449017],
              [0.1588, 79.584064],
              [0.159, 80.584064],
              [0.16, 81.58156],
              [0.1608, 83.38156]
            ],
            color: "#03a7a8"
          },
          {
            name: "Asks",
            data: [
              [0.1435, 242.521842],
              [0.1436, 206.49862099999999],
              [0.1437, 205.823735],
              [0.1438, 197.33275],
              [0.1439, 153.677454],
              [0.144, 146.007722],
              [0.1442, 82.55212900000001],
              [0.1443, 59.152814000000006],
              [0.1444, 57.942260000000005],
              [0.1445, 57.483850000000004],
              [0.1446, 52.39210800000001],
              [0.1447, 51.867208000000005],
              [0.1448, 44.104697],
              [0.1449, 40.131217],
              [0.145, 31.878217],
              [0.1451, 22.794916999999998],
              [0.1453, 12.345828999999998],
              [0.1454, 10.035642],
              [0.148, 9.326642],
              [0.1522, 3.76317]
            ],
            color: "#fc5857"
          }
        ]
      }
    };
  }

  // componentDidMount() {
  //   fetch(
  //     "https://crix-api-endpoint.upbit.com/v1/crix/candles/days?code=CRIX.UPBIT.KRW-BTC&count=100&"
  //   )
  //     .then(res => {
  //       console.log(res);
  //       return res.json();
  //     })
  //     .then(csvReceive => {
  //       console.log("open", csvReceive[0].openingPrice); //데이터 들어오는지 확인
  //       console.log("high", csvReceive[0].highPrice);
  //       console.log("low", csvReceive[0].lowPrice);
  //       console.log("close", csvReceive[0].tradePrice);

  //       const mockArray = [];
  //       for (let i = 0; i < csvReceive.length; i++) {
  //         mockArray.push([
  //           // csvReceive[i].timestamp,
  //           csvReceive[i].openingPrice,
  //           csvReceive[i].highPrice,
  //           csvReceive[i].lowPrice,
  //           csvReceive[i].tradePrice
  //         ]);
  //       }
  //       console.log(mockArray);

  //       //Moving Average 그릴때 i의 배열.length 조건 설정 주의!
  //       const mockMovAvg5 = [];
  //       for (let i = 0; i < csvReceive.length - 4; i++) {
  //         mockMovAvg5.push(
  //           (csvReceive[i + 0].tradePrice +
  //             csvReceive[i + 1].tradePrice +
  //             csvReceive[i + 2].tradePrice +
  //             csvReceive[i + 3].tradePrice +
  //             csvReceive[i + 4].tradePrice) /
  //             5
  //         );
  //       }
  //       console.log(mockMovAvg5[97]);

  //       let movavgavg = 0;
  //       let sum = 0;
  //       let std = [];
  //       for (let i = 0; i < csvReceive.length - 4; i++) {
  //         movavgavg += mockMovAvg5[i] / (csvReceive.length - 4);
  //         sum +=
  //           ((csvReceive[i + 4].tradePrice - movavgavg) ^ 2) /
  //             csvReceive.length -
  //           4;
  //         std = Math.sqrt(sum);
  //       }
  //       console.log(movavgavg);
  //       console.log(sum);
  //       console.log(std);

  //       const mockBB = [];
  //       for (let i = 0; i < csvReceive.length - 4; i++) {
  //         mockBB.push([mockMovAvg5[i] - 500 * std, mockMovAvg5[i] + 500 * std]);
  //       }

  //       console.log(mockBB);

  //       const CopyOptions = { ...this.state.options }; //초기 state 객체 복사
  //       CopyOptions.series[0].data = mockArray; // 복사된 state 의 data 만 업데이트
  //       CopyOptions.series[1].data = mockMovAvg5; // 복사된 state 의 data 만 업데이트
  //       CopyOptions.series[2].data = mockBB; // 복사된 state 의 data 만 업데이트
  //       // CopyOptions.series[3].data = mockBBlower; // 복사된 state 의 data 만 업데이트
  //       // CopyOptions.series[1].data = csvReceive;
  //       console.log("check", CopyOptions); // 데이터만 잘 업데이트 되었는지 확인
  //       // console.log(CopyOptions.series[1].data);

  //       // this.setState({ options: CopyOptions }); // 데이터
  //     });
  // }

  render() {
    return (
      <>
        <div className="chartbox">
          <HighchartsReact_Depth
            className="highhigh"
            highcharts={Highcharts}
            options={this.state.options}
          ></HighchartsReact_Depth>
        </div>
      </>
    );
  }
}

export default Depth;
