import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileExcel } from "@fortawesome/free-regular-svg-icons";

const Tradehistory = () => {
  return (
    <Wrapper>
      <Header>
        <Category one>미체결 주문</Category>
        <Category two>체결내역</Category>
      </Header>
      <Main>
        <CoinCheck>
          모든 코인
          <SildeCircle>
            <Circle></Circle>
          </SildeCircle>
        </CoinCheck>
        <Bottom>
          <FontAwesomeIcon
            icon={faFileExcel}
            color="#eee"
            style={{ width: "100px", height: "100px", display: "block" }}
          />
          <Text>BTC 미체결 주문 없음</Text>
        </Bottom>
      </Main>
    </Wrapper>
  );
};

export default Tradehistory;

const Wrapper = styled.div``;
const Header = styled.div`
  display: flex;
  background-color: transparent;
  box-shadow: 0 3px 10px 0 rgba(66, 66, 66, 0.05);
`;
const Category = styled.div`
  display: flex;
  width: 50%;
  color: ${props => (props.one ? "#9e9e9e" : "#424242")};
  border: 1px solid #eee;
  border-bottom: 0;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background-color: ${props => (props.one ? "#fff" : "#eee")};
  font-size: 14px;
  justify-content: center;
  padding: 7px 0;
  cursor: pointer;
`;
const Main = styled.div`
  height: 360px;
  border: 1px solid #eee;
  border-top-width: 0;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  background-color: #fff;
  margin-bottom: 20px;
  padding: 10px 10px;
  box-shadow: 0 3px 10px 0 rgba(66, 66, 66, 0.05);
`;

const CoinCheck = styled.div`
  display: flex;
  justify-content: flex-end;
  color: #9e9e9e;
  font-size: 12px;
  font-weight: bold;
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
`;
const SildeCircle = styled.div`
  display: flex;
  align-items: center;
  width: 33px;
  height: 18px;
  margin-left: 10px;
  border-radius: 20px;
  border: 1px solid #eee;
  background-color: #eee;
  cursor: pointer;
`;
const Circle = styled.div`
  width: 16px;
  height: 14px;
  border: 1px solid #fff;
  background-color: #fff;
  border-radius: 10px;
`;

const Text = styled.div`
  display: block;
  margin-top: 60px;
  color: #9e9e9e;
  font-size: 14px;
  font-weight: bold;
`;
const Bottom = styled.div`
  display: flex;
  margin-top: 50px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
