import React from "react";
import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusSquare,
  faMinusSquare,
  faCaretDown
} from "@fortawesome/free-solid-svg-icons";

const Amount = () => {
  const mapOfItem = () => {};
  const getItems = () => {};
  return (
    <Wrapper>
      <Header>
        <Name one>
          <Content>
            <Icon>
              <FontAwesomeIcon
                style={{ width: "12px" }}
                icon={faMinusSquare}
                color="black"
                size="lg"
              />
            </Icon>
            <Number>1,000</Number>
            <Icon>
              <FontAwesomeIcon
                style={{ width: "12px" }}
                icon={faPlusSquare}
                size="lg"
              />
            </Icon>
          </Content>
        </Name>
        <Name two>
          <Content>수량</Content>
        </Name>
        <Name three>
          <Content>
            누적수량&nbsp;
            <FontAwesomeIcon
              style={{ width: "12px" }}
              icon={faCaretDown}
              size="lg"
            />
          </Content>
        </Name>
      </Header>
      <Main>
        <Graph>
          <Action></Action>
        </Graph>
        <Col1>6,900,000</Col1>
        <Col2>1.8110</Col2>
        <Col3>7.8148</Col3>
      </Main>
    </Wrapper>
  );
};

export default Amount;

const Wrapper = styled.div`
  height: 41px;
`;

const Header = styled.div`
  margin: 0 10px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  font-size: 14px;
  color: #9e9e9e;
  border-bottom: 1px solid #e0e0e0;
`;
const Name = styled.div`
  justify-content: center;
  cursor: ${props => props.three && "pointer"};
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  margin-left: 3px;
  text-align: end;
`;
const Icon = styled.span`
  cursor: pointer;
`;
const Number = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 58px;
  height: 14px;
  padding: 0 4px;
  color: #424242;
  font-size: 14px;
`;
const Main = styled.div`
  position: relative;
  height: 38px;
  border-bottom: 2px solid #fff;
  margin: 0 10px;
  display: flex;
`;

const Graph = styled.div`
  padding-left: 80px;
  position: absolute;
  z-index: -1;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  height: 21px;
`;
const Action = styled.div`
  background-color: rgba(23, 99, 182, 0.1);
  height: 100%;
`;

const col = css`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f7fbff;

  font-size: 14px;
  cursor: pointer;
`;
const Col1 = styled.div`
  ${col};
  color: #1763b6;
  flex: 0 0 auto;
  width: 102px;
  font-weight: 700;
  background-color: #f7fbff;
`;

const Col2 = styled.div`
  ${col};
  color: red;
  flex: 0 0 auto;
  justify-content: flex-end;
  width: 80px;
  background-color: #f4f4f4;
  font-weight: none;
`;

const Col3 = styled.div`
  ${col};
  color: gray;
  flex: 1 0 auto;
  justify-content: flex-end;
`;
