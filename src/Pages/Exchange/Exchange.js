import React, { Component } from "react";
<<<<<<< HEAD
import styled, { css } from "styled-components";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import highchartsMore from "highcharts/highcharts-more";
import "./Exchange.scss";

highchartsMore(Highcharts);

class Exchange extends Component {
  constructor() {
    super();
    this.state = {
      options: {
        chart: {
          mapNavigation: {
            enableMouseWheelZoom: true
          },
          tooltip: {
            split: true
          },
          legend: {
            align: "left",
            verticalAlign: "top",
            floating: true
          },
          credits: {
            enabled: false
          },

          styleMode: true,
          zoomType: "xy",
          type: "arearange",
          height: (9 / 16) * 80 + "%",
          // (9 / 16) * 100 + "%"
          // width: 1000,
          spaceLeft: 500,
          // marginRight: 300,
          // spacingTop: 100,
          // spacingBottom: 100,
          scrollablePlotArea: {
            // minWidth: 3000,
            // maxWidth: 100,
            scrollPositionX: 0
          }
        },
        // rangeSelector: {
        //   selected: 2
        // },
        series: [
          {
            name: "AltCoin",
            type: "spline",
            data: [],
            // pointStart: Date.UTC(2019, 11, 1),
            // pointInterval: 24 * 3600 * 1000,
            color: "blue",
            upColor: "red"
          },
          {
            name: "Moving Average (5Day)",
            type: "line",
            data: [],
            // pointStart: Date.UTC(2019, 11, 6),
            // pointInterval: 24 * 3600 * 1000,
            marker: { enabled: false },
            color: "green"
          },
          {
            name: "Bollinger Band",
            type: "arearange",
            data: [],
            // pointStart: Date.UTC(2019, 11, 6),
            // pointInterval: 24 * 3600 * 1000,
            marker: { enabled: false },
            color: "black",
            fillOpacity: 0.3
          }
          // {
          //   name: "Bollinger Band lower",
          //   type: "spline",
          //   data: [],
          //   pointStart: Date.UTC(2019, 11, 1),
          //   pointInterval: 24 * 3600 * 1000,
          //   marker: { enabled: false }
          // }
        ],
        title: {
          text: "BTC-Candle-Chart(KRW)"
        },
        // plotOptions: {
        //   series: {
        //     // fillOpacity: 0.1
        //   }
        // },
        xAxis: {
          type: "datetime",
          title: {
            text: ""
          }
        },
        yAxis: {
          title: {
            text: "BTC Price (KRW)"
          },
          min: 6000000,
          max: 12000000
        }
      }
    };
  }

  componentDidMount() {
    fetch(
      "https://crix-api-endpoint.upbit.com/v1/crix/candles/days?code=CRIX.UPBIT.KRW-BTC&count=100&"
    )
      .then(res => {
        console.log(res);
        return res.json();
      })
      .then(csvReceive => {
        console.log("timestamp", csvReceive[0].timestamp);
        console.log("open", csvReceive[0].openingPrice); //데이터 들어오는지 확인
        console.log("high", csvReceive[0].highPrice);
        console.log("low", csvReceive[0].lowPrice);
        console.log("close", csvReceive[0].tradePrice);
        //
        // CandleChart 그리기용
        const mockArray = [];
        for (let i = 0; i < csvReceive.length; i++) {
          mockArray.push([
            csvReceive[i].timestamp,
            csvReceive[i].openingPrice,
            csvReceive[i].highPrice,
            csvReceive[i].lowPrice,
            csvReceive[i].tradePrice
          ]);
        }
        //
        //Moving Average 그릴때 i의 배열.length 조건 설정 주의!
        const mockMovAvg5 = [];
        for (let i = 0; i < csvReceive.length - 5; i++) {
          mockMovAvg5.push([
            csvReceive[i].timestamp,
            (csvReceive[i + 0].tradePrice +
              csvReceive[i + 1].tradePrice +
              csvReceive[i + 2].tradePrice +
              csvReceive[i + 3].tradePrice +
              csvReceive[i + 4].tradePrice) /
              5
          ]);
        }
        //
        let sum = [];
        let sumAvg = [];
        let std = [];
        //
        //Bollinger Band plotting 에 사용할 Standard Deviation 계산
        for (let i = 0; i < csvReceive.length - 5; i++) {
          sum.push(
            (csvReceive[i + 0].tradePrice - mockMovAvg5[i][1]) ** 2 +
              (csvReceive[i + 1].tradePrice - mockMovAvg5[i][1]) ** 2 +
              (csvReceive[i + 2].tradePrice - mockMovAvg5[i][1]) ** 2 +
              (csvReceive[i + 3].tradePrice - mockMovAvg5[i][1]) ** 2 +
              (csvReceive[i + 4].tradePrice - mockMovAvg5[i][1]) ** 2
          );
          sumAvg.push(sum[i] / 5);
          std.push(Math.sqrt(sumAvg[i]));
          // moving average std 계산
        }

        const mockBB = [];
        for (let i = 0; i < csvReceive.length - 5; i++) {
          mockBB.push([
            csvReceive[i].timestamp,
            mockMovAvg5[i][1] - 2 * std[i],
            mockMovAvg5[i][1] + 2 * std[i]
          ]);
        }
        //
        const CopyOptions = { ...this.state.options }; //초기 state 객체 복사
        CopyOptions.series[0].data = mockArray; // 복사된 state 의 data 만 업데이트
        CopyOptions.series[1].data = mockMovAvg5; // 복사된 state 의 data 만 업데이트
        CopyOptions.series[2].data = mockBB; // 복사된 state 의 data 만 업데이트
        this.setState({ options: CopyOptions }); // state update
      });
  }

  render() {
    return (
      <>
        <div className="chartbox">
          <chartfill>
            <HighchartsReact
              className="highhigh"
              highcharts={Highcharts}
              options={this.state.options}
            ></HighchartsReact>
          </chartfill>
        </div>
      </>
    );
<<<<<<< HEAD
=======
=======
>>>>>>> d68015c... 초기 셋팅 재설정 및 로그인 구현

class Exchange extends Component {
  render() {
    return <div></div>;
<<<<<<< HEAD
>>>>>>> d68015c... 초기 셋팅 재설정 및 로그인 구현
=======
>>>>>>> 0ee342b... working on bollingerband WIP
=======
>>>>>>> d68015c... 초기 셋팅 재설정 및 로그인 구현
  }
}

export default Exchange;
