import React, { Component } from "react";
import styled, { css } from "styled-components";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import highchartsMore from "highcharts/highcharts-more";
import MainLayout from "Components/Layout/SignupLayout";
import "./Main.scss";
import magni from "Img/icon_magni.png";
import { faBorderNone } from "@fortawesome/free-solid-svg-icons";

highchartsMore(Highcharts);

class Main extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      closeprice: "",
      chgrate: "",
      options: {
        chart: {
          tooltip: {
            split: true
          },
          // legend: {
          //   align: "left",
          //   verticalAlign: "top",
          //   floating: true
          // },
          credits: {
            enabled: false
          },
          styleMode: true,
          zoomType: "xy",
          type: "arearange",
          height: 280,
          // (9 / 16) * 100 + "%"
          width: 430,
          // spaceLeft: 100,
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
            name: "BTC",
            // name: "BTC (Close Price)",
            type: "area",
            data: [],
            visible: true,
            // pointStart: Date.UTC(2019, 11, 1),
            // pointInterval: 24 * 3600 * 1000,
            color: {
              linearGradient: {
                x1: 1,
                y1: 0,
                x2: 0,
                y2: 0
              },
              stops: [
                [
                  0,
                  Highcharts.Color("#FF5733")
                    .setOpacity(1)
                    .get("rgba")
                ],
                [
                  1,
                  Highcharts.Color("#FF5733")
                    .setOpacity(0.05)
                    .get("rgba")
                ]
              ]
            },
            fillColor: {
              linearGradient: {
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 1
              },
              stops: [
                [
                  0,
                  Highcharts.Color("#FF5733")
                    .setOpacity(0.05)
                    .get("rgba")
                ],
                [
                  1,
                  Highcharts.Color("#FF5733")
                    .setOpacity(0)
                    .get("rgba")
                ]
              ]
            }
          },
          {
            name: "Moving Average (5Day)",
            // name: "Moving Average (5Day)",
            type: "spline",
            data: [],
            // pointStart: Date.UTC(2019, 11, 6),
            // pointInterval: 24 * 3600 * 1000,
            marker: { enabled: false },
            color: "green",
            visible: false
          },
          {
            name: "Bollinger Band",
            // name: "Bollinger Band",
            type: "arearange",
            data: [],
            // pointStart: Date.UTC(2019, 11, 6),
            // pointInterval: 24 * 3600 * 1000,
            marker: { enabled: false },
            color: "black",
            fillOpacity: 0.2,
            visible: false
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
          enabled: false,
          text: ""
        },
        // plotOptions: {
        //   series: {
        //     // fillOpacity: 0.1
        //   }
        // },
        xAxis: {
          visible: false,
          type: "datetime",
          title: {
            enabled: false,
            text: ""
          },
          labels: { enabled: false }
        },
        yAxis: {
          visible: false,
          title: {
            enabled: false,
            text: ""
          },
          labels: { enabled: false },
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
      // fetch("http://10.58.3.169:8000/exchange/report/1/days", {
      //   method: "GET"
      // // })
      .then(res => {
        console.log(res);
        return res.json();
      })
      .then(csvReceive => {
        console.log(csvReceive);
        // 서버 데이터
        // 서버 데이터
        // console.log("date", csvReceive.data[0].item);
        // console.log("date", csvReceive.data[0].date);
        // console.log("open", typeof parseInt(csvReceive.data[0].opening_price)); //데이터 들어오는지 확인
        // console.log("high", typeof parseInt(csvReceive.data[0].high_price));
        // console.log("low", typeof parseInt(csvReceive.data[0].low_price));
        // console.log("close", typeof parseInt(csvReceive.data[0].trade_price));
        // 서버 데이터
        // 서버 데이터
        //
        // 업비트 URL
        // 업비트 URL
        console.log("date", csvReceive[0].code);
        console.log("date", csvReceive[0].timestamp);
        console.log("open", parseInt(csvReceive[0].openingPrice)); //데이터 들어오는지 확인
        console.log("high", parseInt(csvReceive[0].highPrice));
        console.log("low", parseInt(csvReceive[0].lowPrice));
        console.log("close", parseInt(csvReceive[0].tradePrice));
        console.log("length", parseInt(csvReceive.length));
        // 업비트 URL
        // 업비트 URL

        //
        // CandleChart 그리기용
        const CandleStick = [];
        for (let i = 0; i < csvReceive.length; i++) {
          // CandleStick.push([
          //   csvReceive.data[i].date,
          //   parseInt(csvReceive.data[i].opening_price),
          //   parseInt(csvReceive.data[i].high_price),
          //   parseInt(csvReceive.data[i].low_price),
          //   parseInt(csvReceive.data[i].trade_price)
          // ]);
          CandleStick.push([
            csvReceive[i].timestamp,
            parseInt(csvReceive[i].openingPrice),
            parseInt(csvReceive[i].highPrice),
            parseInt(csvReceive[i].lowPrice),
            parseInt(csvReceive[i].tradePrice)
          ]);
        }

        console.log(CandleStick);
        //
        //Moving Average 그릴때 i의 배열.length 조건 설정 주의!
        const MovAvg5 = [];
        for (let i = 0; i < csvReceive.length - 5; i++) {
          MovAvg5.push([
            // parseInt(csvReceive.data[i].date),
            // (parseInt(csvReceive.data[i + 0].trade_price) +
            //   parseInt(csvReceive.data[i + 1].trade_price) +
            //   parseInt(csvReceive.data[i + 2].trade_price) +
            //   parseInt(csvReceive.data[i + 3].trade_price) +
            //   parseInt(csvReceive.data[i + 4].trade_price)) /
            //   5
            parseInt(csvReceive[i].timestamp),
            (parseInt(csvReceive[i + 0].tradePrice) +
              parseInt(csvReceive[i + 1].tradePrice) +
              parseInt(csvReceive[i + 2].tradePrice) +
              parseInt(csvReceive[i + 3].tradePrice) +
              parseInt(csvReceive[i + 4].tradePrice)) /
              5
          ]);
        }
        //
        // console.log(csvReceive.data[0]);
        // console.log(csvReceive.data[1]);
        // console.log(mockMovAvg5);
        //
        console.log(csvReceive[0]);
        console.log(csvReceive[1]);
        console.log(MovAvg5);
        //
        //
        // Bollinger Band 계산에 필요한 Array 설정
        let sum = [];
        let sumAvg = [];
        let std = [];
        //
        //
        // Bollinger Band plotting 에 사용할 Standard Deviation 계산
        for (let i = 0; i < csvReceive.length - 5; i++) {
          sum.push(
            // (parseInt(csvReceive.data[i + 0].trade_price) -
            //   parseInt(MovAvg5[i][1])) **
            //   2 +
            //   (parseInt(csvReceive.data[i + 1].trade_price) -
            //     parseInt(MovAvg5[i][1])) **
            //     2 +
            //   (parseInt(csvReceive.data[i + 2].trade_price) -
            //     parseInt(MovAvg5[i][1])) **
            //     2 +
            //   (parseInt(csvReceive.data[i + 3].trade_price) -
            //     parseInt(MovAvg5[i][1])) **
            //     2 +
            //   (parseInt(csvReceive.data[i + 4].trade_price) -
            //     parseInt(MovAvg5[i][1])) **
            //     2
            (parseInt(csvReceive[i + 0].tradePrice) -
              parseInt(MovAvg5[i][1])) **
              2 +
              (parseInt(csvReceive[i + 1].tradePrice) -
                parseInt(MovAvg5[i][1])) **
                2 +
              (parseInt(csvReceive[i + 2].tradePrice) -
                parseInt(MovAvg5[i][1])) **
                2 +
              (parseInt(csvReceive[i + 3].tradePrice) -
                parseInt(MovAvg5[i][1])) **
                2 +
              (parseInt(csvReceive[i + 4].tradePrice) -
                parseInt(MovAvg5[i][1])) **
                2
          );
          sumAvg.push(sum[i] / 5);
          std.push(Math.sqrt(sumAvg[i]));
          // moving average std 계산
        }
        console.log(std);

        const BollBand = [];
        for (let i = 0; i < csvReceive.length - 5; i++) {
          BollBand.push([
            parseInt(csvReceive[i].timestamp),
            MovAvg5[i][1] - 2 * std[i],
            MovAvg5[i][1] + 2 * std[i]
          ]);
        }
        console.log(BollBand);
        //
        const CopyOptions = { ...this.state.options }; //초기 state 객체 복사
        CopyOptions.series[0].data = CandleStick; // 복사된 state 의 data 만 업데이트
        CopyOptions.series[1].data = MovAvg5; // 복사된 state 의 data 만 업데이트
        CopyOptions.series[2].data = BollBand; // 복사된 state 의 data 만 업데이트
        this.setState({
          options: CopyOptions,
          name: csvReceive[0].code,
          closeprice: csvReceive[0].tradePrice,
          chgrate: csvReceive[0].changeRate * 100 + "%"
        }); // state update
      });
  }

  render() {
    // console.log(this.state.options.series[0].data[1]);
    // fetch("http://10.58.3.169:8000/exchange/item", {
    //   method: "GET"
    // })
    //   .then(resItem => {
    //     console.log(resItem);
    //     return resItem.json();
    //   })
    //   .then(csvReceiveItem => {
    //     console.log(csvReceiveItem);
    //   });
    return (
      <MainLayout>
        <LandingMain>
          <FilterWarp>
            <FilterInner>
              <FilterUl>
                <li>#거래량많은</li>
                <li>#급등하는</li>
                <li>#급락하는</li>
                <li>#최근상장</li>
              </FilterUl>
              <FilterSearchBar>
                <InputSearchWarp>
                  <InputSearch placeholder="코인 검색"></InputSearch>
                  <InputSearchMagni>
                    <InputSearchImg src={magni}></InputSearchImg>
                  </InputSearchMagni>
                </InputSearchWarp>
                <Volume_label>24시간 거래량(원)</Volume_label>
                <Volume_amount>302,445백만</Volume_amount>
              </FilterSearchBar>
            </FilterInner>
          </FilterWarp>

          <CoverArea>
            <CoverInner>
              <ChartMain>
                <ChartMainCard>
                  <ChartMainCard_Left>
                    {this.state.name}
                    <p>Main Market</p>
                  </ChartMainCard_Left>
                  <ChartMainCard_Right>
                    {this.state.closeprice}
                    {this.state.chgrate}
                  </ChartMainCard_Right>
                </ChartMainCard>
                <HighchartsReact
                  className="highhigh"
                  highcharts={Highcharts}
                  options={this.state.options}
                ></HighchartsReact>
                <ToExchangeBtn onClick={this.toExchange}>
                  거래소 바로가기
                </ToExchangeBtn>
              </ChartMain>
              <TableMainWrap_div>
                <TableMain_table>
                  <TableMain_tr>
                    <TableMain_th1>최근24시간 기준</TableMain_th1>
                    <TableMain_th>현재가</TableMain_th>
                    <TableMain_th>등락률</TableMain_th>
                    <TableMain_th>거래대금</TableMain_th>
                    <TableMain_th></TableMain_th>
                  </TableMain_tr>
                  <TableMain_tr>
                    <TableMain_td1_left>
                      <TableMain_td1_span>{this.state.name}</TableMain_td1_span>
                      <TableMain_td1_span></TableMain_td1_span>
                    </TableMain_td1_left>
                    <TableMain_td_right>6,000,000</TableMain_td_right>
                    <TableMain_td_right>-13.5%</TableMain_td_right>
                    <TableMain_td_right>거래대금</TableMain_td_right>
                    <TableMain_td_right>----</TableMain_td_right>
                  </TableMain_tr>
                  <TableMain_tr>
                    <TableMain_td1_left>
                      <TableMain_td1_span>ETH</TableMain_td1_span>
                      <TableMain_td1_span>이더리움</TableMain_td1_span>
                    </TableMain_td1_left>
                    <TableMain_td_right>157,450</TableMain_td_right>
                    <TableMain_td_right>-13.5%</TableMain_td_right>
                    <TableMain_td_right>거래대금</TableMain_td_right>
                    <TableMain_td_right>----</TableMain_td_right>
                  </TableMain_tr>
                  <TableMain_tr>
                    <TableMain_td1_left>
                      <TableMain_td1_span>XRP</TableMain_td1_span>
                      <TableMain_td1_span>리플</TableMain_td1_span>
                    </TableMain_td1_left>
                    <TableMain_td_right>159</TableMain_td_right>
                    <TableMain_td_right>-13.5%</TableMain_td_right>
                    <TableMain_td_right>거래대금</TableMain_td_right>
                    <TableMain_td_right>----</TableMain_td_right>
                  </TableMain_tr>
                  <TableMain_tr>
                    <TableMain_td1_left>
                      <TableMain_td1_span>BCH</TableMain_td1_span>
                      <TableMain_td1_span>비트코인캐시</TableMain_td1_span>
                    </TableMain_td1_left>
                    <TableMain_td_right>216,000</TableMain_td_right>
                    <TableMain_td_right>-13.5%</TableMain_td_right>
                    <TableMain_td_right>거래대금</TableMain_td_right>
                    <TableMain_td_right>----</TableMain_td_right>
                  </TableMain_tr>
                  <TableMain_tr>
                    <TableMain_td1_left>
                      <TableMain_td1_span>BSV</TableMain_td1_span>
                      <TableMain_td1_span>
                        비트코인사토시비전
                      </TableMain_td1_span>
                    </TableMain_td1_left>
                    <TableMain_td_right>150,459</TableMain_td_right>
                    <TableMain_td_right>-13.5%</TableMain_td_right>
                    <TableMain_td_right>거래대금</TableMain_td_right>
                    <TableMain_td_right>----</TableMain_td_right>
                  </TableMain_tr>
                </TableMain_table>
                <ToExchangeBtn onClick={this.toExchange}>
                  코인 더 보러가기 >
                </ToExchangeBtn>
              </TableMainWrap_div>
            </CoverInner>
          </CoverArea>
        </LandingMain>
      </MainLayout>
    );
  }
}

export default Main;

const LandingMain = styled.div`
  height: 600px;
  padding-bottom: 20px;
  width: 1040px;
  margin: 80px 431.5px 0px 431.5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FilterWarp = styled.div`
  width: 950px;
`;

const FilterInner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  // margin-right: 400px;
  width: 100%;
`;

const FilterSearchBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const InputSearchWarp = styled.div`
  width: 240px;
  height: 36px;
  display: flex;
  align-items: center;
  position: relative;
  // padding-right: 36px;
  box-sizing: border-box;
`;

const InputSearch = styled.input`
  width: 240px;
  background-color: rgba(209, 203, 203, 0.2);
  // font-weight: 700;
  font-size: 12px;
  // color: #9f9f9f;
  border: none;
  border-radius: 5%;
  height: 35px;
  padding-left: 16px;
  padding-right: 48px;
  position: relative;
`;

const InputSearchMagni = styled.span`
  width: 16px;
  height: 16px;
  position: absolute;
  margin-left: 205px;
`;

const InputSearchImg = styled.img`
  width: 16px;
  height: 16px;
  position: absolute;
`;

const FilterUl = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 17px;
  font-weight: 700;
  li {
    margin-right: 16px;
    cursor: pointer;
  }
`;

const Volume_label = styled.span`
  font-size: 10px;
  height: 18px;
  margin-left: 8px;
  color: #9f9f9f;
`;

const Volume_amount = styled.span`
  font-size: 12px;
  height: 20px;
  margin-left: 8px;
  color: rgba(108, 122, 137, 1);
`;

const CoverArea = styled.div`
  width: 1903px;
  height: 520px;
  border-top: 1px solid rgba(232, 232, 232, 1);
  padding-top: 40px;
  margin-top: 25px;
`;

const CoverInner = styled.div`
  margin: 0 auto;
  width: 1024px;
  display: flex;
  justify-content: space-around;
`;
const ChartMain = styled.div`
  width: 496px;
  height: 440px;
  border: 1px solid #cecdcd;
  border-radius: 1%;
  padding: 20px 20px;
  margin-right: 5px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const ChartMainCard = styled.div`
  width: 430px;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const ChartMainCard_Left = styled.div`
  width: 103px;
  height: 100px;
  border: 1px solid white;
  font-size: 12px;
`;
const ChartMainCard_Right = styled.div`
  width: 140px;
  height: 100px;
  border: 1px solid white;
  font-size: 35px;
  font-weight: 900;
  color: red;
`;
const ToExchangeBtn = styled.button`
  width: 430px;
  height: 41px;

  margin: 0 auto;
  background-color: #cecdcd1a;
  border: none;
  font-weight: 700;
`;

const TableMainWrap_div = styled.div`
  width: 496px;
  height: 440px;
  margin-left: 5px;
  border: 1px solid #cecdcd;
  border-radius: 1%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TableMain_table = styled.table`
  width: 460px;
  height: 362px;
`;

const TableMain_th1 = styled.th`
  text-align: left;
  font-size: 12px;
`;

const TableMain_th = styled.th`
  font-size: 12px;
  text-align: right;
  display: table-cell;
`;

const TableMain_tr = styled.tr`
  height: 55px;
`;

// const TableMain_td_left = styled.td``;

const TableMain_td_right = styled.td`
  text-align: right;
  font-size: 12px;
`;

const TableMain_td1_left = styled.td`
  display: flex;
  flex-direction: column;
  text-align: left;
  font-size: 12px;
`;

const TableMain_td1_span = styled.span``;
