import React from "react";
import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faYoutube,
  faInstagram,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const company = ["회사소개", "코인원코어", "채용", "해외송금(Cross)"];
const info = [
  "이용안내",
  "수수료안내",
  "보안안내",
  "상장/폐지기준안내",
  "계정정보변경",
  "계정잠금"
];
const policy = ["이용약관 및 규정", "API 이용약관", "개인정보처리방침"];

const Footer = () => {
  return (
    <GNB>
      <Inner>
        <Main>
          <Leftbox>
            <Title>
              <Spanleft>고객센터&nbsp;</Spanleft>
              <Spanright>10:00~19:00(주말 및 공휴일 제외)</Spanright>
            </Title>
            <Tel>1670-9756</Tel>
            <Callcenter>온라인 고객센터</Callcenter>
            <br />
            <br />
            <Companyinfo>
              (주)코인원 | 대표이사 차명훈 | 사업자등록번호 261-81-07437 <br />
              서울특별시 영등포구 국제금융로 10, Three IFC, 19층, 코인원 (우
              07326)
            </Companyinfo>
            <Linkemail>
              상장 및 제휴 문의 <FontAwesomeIcon icon={faEnvelope} />
            </Linkemail>
          </Leftbox>
          <Rightbox>
            <List>
              <Listtitle>회사</Listtitle>
              <Listarr>
                {company.map((ele, idx) => (
                  <Listcontent key={idx}>{ele}</Listcontent>
                ))}
              </Listarr>
            </List>
            <List>
              <Listtitle>안내</Listtitle>
              <Listarr>
                {info.map((ele, idx) => (
                  <Listcontent key={idx}>{ele}</Listcontent>
                ))}
              </Listarr>
            </List>
            <List>
              <Listtitle>정책</Listtitle>
              <Listarr>
                {policy.map((ele, idx) => (
                  <Listcontent key={idx}>{ele}</Listcontent>
                ))}
              </Listarr>
              <Apibtn>API 설정</Apibtn>
            </List>
          </Rightbox>
        </Main>
        <Iconbox>
          <Icon>
            <FontAwesomeIcon icon={faFacebookSquare} color="gray" size="2x" />
            <FontAwesomeIcon icon={faYoutube} color="gray" size="2x" />
            <FontAwesomeIcon icon={faInstagram} color="gray" size="2x" />
            <FontAwesomeIcon icon={faTwitter} color="gray" size="2x" />
            <Copyright>
              Copyright © Coinone, Inc. All rights reserved.
            </Copyright>
          </Icon>
        </Iconbox>
      </Inner>
    </GNB>
  );
};

export default Footer;

const GNB = styled.div`
  position: relative;
  width: 100%;

  background-color: #f8f8f9;
  color: #aeb3bb;
`;

const Inner = styled.div`
  max-width: 1440px;
  padding: 48px 80px;
  margin: 0 auto;
  position: relative;
`;

const Main = styled.div`
  display: flex;
`;

const Leftbox = styled.div``;
const Companyinfo = styled.div`
  font-size: 12px;
  color: #aeb3bb;
`;
const Linkemail = styled.div`
  margin: 25px 0;

  font-weight: 700;
  font-size: 12px;
  cursor: pointer;
`;

const Title = styled.div`
  display: block;
`;
const Spanleft = styled.div`
  display: inline-block;
  color: black;
  font-size: 14px;

  font-weight: 700;
`;
const Spanright = styled.div`
  display: inline-block;
  color: #aeb3bb;
  font-size: 12px;
`;

const Tel = styled.div`
  margin-top: 4px;
  color: #79818f;
  font-size: 22px;
  font-weight: 700;
`;
const Callcenter = styled.div`
  align-items: center;
  margin-top: 8px;
  color: #1772f8;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
`;

const Rightbox = styled.div`
  display: flex;
  position: absolute;
  right: 100px;
`;
const List = styled.div`
  position: relative;
  margin-right: 55px;
`;
const Listtitle = styled.div`
  font-size: 15px;
  font-weight: 700;
  color: black;
`;
const Listarr = styled.ul`
  list-style: none;
`;
const Listcontent = styled.li`
  font-size: 14px;
  font-weight: 500;
  margin: 7px 0;
  cursor: pointer;
  ${props =>
    props.policy &&
    css`
      font-weight: 600;
    `}
`;
const Apibtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 40px;
  background-color: transparent;
  border: 1px solid #aeb3bb;
  border-radius: 3px;
  color: #79818f;
  width: 98px;
  height: 24px;
  font-size: 12px;
  cursor: pointer;
  &:hover {
    background-color: #5f5f5f32;
  }
`;

const Iconbox = styled.div`
  display: flex;
  position: relative;
  padding-top: 12px;
  border-top: 1px solid #e4e5e8;
  cursor: pointer;
`;

const Icon = styled.div`
  display: flex;
  justify-content: space-between;
  width: 180px;
`;
const Copyright = styled.div`
  position: absolute;
  right: 0;
  font-size: 10px;
`;
