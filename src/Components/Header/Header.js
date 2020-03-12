import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import main from "Img/coinone_logo_blue.svg";
import loud from "Img/icon.png";

const Header = () => {
  const [selectcategory, setSelectcategory] = useState(null);
  const onChange = num => {
    setSelectcategory(num);
  };

  return (
    <GNB>
      <Inner>
        <MainImg className="main_img" src={main} alt="main_img" />
        <MainWrapper>
          <MainLeftWrapper>
            <ListWrapper>
              <ListText>거래소</ListText>
            </ListWrapper>
            <ListWrapper>
              <ListText>프로차트</ListText>
            </ListWrapper>
            <ListWrapper
              category
              onMouseLeave={() => {
                onChange(null);
              }}
              onMouseEnter={() => {
                onChange(1);
              }}
            >
              <ListText>자산</ListText>
              {selectcategory === 1 && (
                <CategoryList>
                  <CategoryContent>수익현황</CategoryContent>
                  <CategoryContent>입출금</CategoryContent>
                  <CategoryContent>거래기록</CategoryContent>
                </CategoryList>
              )}
            </ListWrapper>
            <ListWrapper
              category
              onMouseEnter={() => {
                onChange(2);
              }}
              onMouseLeave={() => {
                onChange(null);
              }}
            >
              <ListText>코인정보</ListText>
              {selectcategory === 2 && (
                <CategoryList>
                  <CategoryContent>크립토 뉴스</CategoryContent>
                  <CategoryContent>프로젝트 정보</CategoryContent>
                  <CategoryContent>암호화폐 명세서</CategoryContent>
                </CategoryList>
              )}
            </ListWrapper>
            <ListWrapper
              category
              onMouseEnter={() => {
                onChange(3);
              }}
              onMouseLeave={() => {
                onChange(null);
              }}
            >
              <ListText>플러스</ListText>
              {selectcategory === 3 && (
                <CategoryList>
                  <CategoryContent>락업</CategoryContent>
                  <CategoryContent>데일리</CategoryContent>
                  <CategoryContent>스테이킹</CategoryContent>
                </CategoryList>
              )}
            </ListWrapper>
          </MainLeftWrapper>
          <MainRightWrapper>
            <MainRightIconWrapper>
              <Icon src={loud} alt="icon" />
            </MainRightIconWrapper>
            <TextBoxWrapper>
              <TextBox>
                <Link to="/signup">
                  <TextWord>회원가입</TextWord>
                </Link>
              </TextBox>
              <TextBox>
                <Link to="/login">
                  <TextWord>로그인</TextWord>
                </Link>
              </TextBox>
            </TextBoxWrapper>
            <Select>
              <option>KR</option>
              <option>EN</option>
            </Select>
          </MainRightWrapper>
        </MainWrapper>
      </Inner>
    </GNB>
  );
};

export default Header;

const GNB = styled.div`
  position: fixed;
  background-color: #fff;
  z-index: 1000;
  margin: 0 auto;
  top: 0;
  left: 0;
  right: 0;
  height: 68px;
  box-shadow: 0 8px 12px 0 rgba(255, 255, 255, 0.8);
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  padding: 0 50px;
  max-width: 1440px;
  height: 100%;
`;

const MainImg = styled.img`
  cursor: pointer;
`;

const MainWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-left: 15px;
  align-items: center;
  justify-content: space-between;
`;

const MainLeftWrapper = styled.div`
  display: flex;
`;

const ListWrapper = styled.div`
  padding: 10px 0;
  padding-left: 10px;
  font-weight: 500;
  cursor: pointer;

  position: ${props => props.category && "relative"};
`;

const CategoryList = styled.div`
  position: absolute;
  width: 200px;
  top: 42px;
  box-shadow: 0 2px 12px 0 rgba(37, 42, 49, 0.08),
    0 2px 5px 0 rgba(37, 42, 49, 0.15);
  border-radius: 6px;
  padding: 16px;
  transition: opacity 0.3s ease;
  background-color: white;
`;

const CategoryContent = styled.div`
  padding: 10px 0;
  padding-left: 10px;
  font-weight: 500;

  cursor: pointer;
  &:hover {
    background-color: rgba(174, 210, 224, 0.233);
    border-radius: 5px;
  }
`;
const ListText = styled.a`
  font-size: 15px;
  padding: 6px 12px;
  font-weight: bold;
  transition: all 0.5s ease;

  &:hover {
    background-color: rgba(174, 210, 224, 0.233);
    border-radius: 5px;
  }
`;

const MainRightWrapper = styled.div`
  color: #79818f;
  display: flex;
  align-items: center;
`;

const MainRightIconWrapper = styled.div`
  width: 40px;
  height: 100%;

  &:hover {
    background-color: rgba(218, 216, 216, 0.37);
    border-radius: 50%;
  }
`;

const Icon = styled.img`
  cursor: pointer;
  padding-top: 5px;
  width: 38px;
  background-color: transparent;
`;

const TextBoxWrapper = styled.div`
  display: flex;
  margin: 0 10px;
  margin-left: 15px;
  font-size: 12px;
`;

const TextBox = styled.div`
  display: flex;
  background-color: transparent;
  border: 1px solid #aeb3bb;
  border-radius: 3px;
  transition: background 0.25s, border 0.25s;
  cursor: pointer;
  outline: none;
  user-select: none;
  margin-right: 8px;
  align-items: center;
  height: 24px;
  &:hover {
    background-color: #5f5f5f32;
  }
`;

const TextWord = styled.a`
  text-align: center;
  text-decoration: none;
  font-weight: bold;
  padding: 0 8px;
  outline: none;
  text-decoration: none;
  color: #79818f;
`;

const Select = styled.select`
  color: #79818f;
  border: none;
  outline: none;
`;
