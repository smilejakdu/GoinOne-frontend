import React, { useState } from "react";
import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { data1, data2, data3 } from "./signupdata";

import SignupLayout from "Components/Layout/SignupLayout";

const Signup = props => {
  const [checks, setChecks] = useState({
    all: false,
    agree1: false,
    agree2: false,
    agree3: false
  });
  const { all, agree1, agree2, agree3 } = checks;
  const handleSelect = e => {
    if (e.target.name === "all") {
      if (!all) {
        setChecks({
          ...checks,
          all: true,
          agree1: true,
          agree2: true,
          agree3: true
        });
      } else {
        setChecks({
          ...checks,
          all: false,
          agree1: false,
          agree2: false,
          agree3: false
        });
      }
    } else {
      console.log(all, agree1, agree2, agree3);
      setChecks({
        ...checks,
        [e.target.name]: !checks[e.target.name]
      });
    }
  };
  console.log(checks);
  return (
    <SignupLayout>
      <Title>회원가입</Title>
      <Flow>
        <Flowinner>
          <Flowcontent>
            <Numcircle active>1</Numcircle>
            <Circletext>약관 동의</Circletext>
          </Flowcontent>
          <Flowcontent>
            <Numcircle>2</Numcircle>
            정보입력
          </Flowcontent>
        </Flowinner>
      </Flow>
      <Checkbox>
        <Allcheck>
          <Labelwrapper>
            <Label0 htmlfor="all" status={checks}>
              <Checkinput name="all" type="checkbox" onClick={handleSelect} />
              <FontAwesomeIcon icon={faCheck} color="white" size="xs" />
            </Label0>
            <Alltext>아래 모든 항목에 동의합니다</Alltext>
          </Labelwrapper>
        </Allcheck>
        <Content>
          <ContentTitle>코인원 이용약관 (필수)</ContentTitle>
          <Scroll>{data1}</Scroll>
          <Labelwrapper>
            <Label1 htmlfor="agree1" status={checks}>
              <Checkinput
                name="agree1"
                type="checkbox"
                onClick={handleSelect}
              />
              <FontAwesomeIcon icon={faCheck} color="white" size="xs" />
            </Label1>
            <Agree>동의합니다</Agree>
          </Labelwrapper>
        </Content>
        <Content>
          <ContentTitle>개인정보 수집 및 이용 (필수)</ContentTitle>
          <Scroll>{data2}</Scroll>
          <Labelwrapper>
            <Label2 htmlfor="agree2" status={checks}>
              <Checkinput
                name="agree2"
                type="checkbox"
                onClick={handleSelect}
              />
              <FontAwesomeIcon icon={faCheck} color="white" size="xs" />
            </Label2>
            <Agree>동의합니다</Agree>
          </Labelwrapper>
        </Content>
        <Content>
          <ContentTitle>이벤트 및 정보 수신 안내 (선택)</ContentTitle>
          <Scroll>{data3}</Scroll>
          <Labelwrapper>
            <Label3 htmlfor="agree3" status={checks}>
              <Checkinput
                name="agree3"
                type="checkbox"
                onClick={handleSelect}
              />
              <FontAwesomeIcon icon={faCheck} color="white" size="xs" />
            </Label3>
            <Agree>동의합니다</Agree>
          </Labelwrapper>
        </Content>
        <Onlyadult>
          19세 미만은 회원 자격이 없으며, 서비스 이용이 제한됩니다
        </Onlyadult>
        <Next
          status={checks}
          onClick={() => {
            agree1 && agree2 && props.history.push("/signupnext");
          }}
        >
          다음
        </Next>
      </Checkbox>
    </SignupLayout>
  );
};

export default Signup;

const Labelcommon = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border: 1px solid #bcbcbc;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 10px;
  transition: all 0.3s ease;
`;

const Title = styled.p`
  margin-bottom: 24px;
  font-size: 34px;
  text-align: center;
`;

const Flow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Flowinner = styled.ul`
  display: flex;
  list-style: none;
`;
const Flowcontent = styled.li`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 700;
  color: #aeb3bb;
  &:last-child {
    ::before {
      content: "";
      display: block;
      margin: 0 12px;
      width: 80px;
      height: 1px;
      background-color: #c9ccd2;
    }
  }
`;

const Numcircle = styled.div`
  background-color: ${props => (props.active ? "#1772f8" : "#aeb3bb")};
  color: #fff;
  margin-right: 8px;
  width: 19px;
  height: 19px;
  font-size: 12px;
  border-radius: 10px;
  text-align: center;
`;

const Checkbox = styled.div`
  margin-top: 60px;
  margin-bottom: 24px;
`;
const Allcheck = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const Label0 = styled.label`
  ${Labelcommon};
  background-color: ${props =>
    props.status.agree1 && props.status.agree2 && props.status.agree3
      ? "#1772f8"
      : "white"};
`;
const Label1 = styled.label`
  ${Labelcommon};
  background-color: ${props => (props.status.agree1 ? "#1772f8" : "white")};
`;
const Label2 = styled.label`
  ${Labelcommon};
  background-color: ${props => (props.status.agree2 ? "#1772f8" : "white")};
`;
const Label3 = styled.label`
  ${Labelcommon};
  background-color: ${props => (props.status.agree3 ? "#1772f8" : "white")};
`;

const Alltext = styled.span`
  font-size: 16px;
  color: #18191c;
  font-weight: 700;
`;

const Content = styled.div`
  margin-bottom: 8px;
`;

const ContentTitle = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #484d55;
  margin-bottom: 10px;
`;
const Labelwrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const Scroll = styled.div`
  position: relative;
  margin-bottom: 8px;
  padding: 12px 12px 0;
  border-radius: 3px;
  border: 1px solid #e4e5e8;
  height: 122px;
  font-size: 12px;
  width: 100%;
  color: #79818f;
  overflow: auto;
`;

const Agree = styled.span`
  font-weight: 400;
  font-size: 15px;
  color: #79818f;
  cursor: pointer;
  &:hover {
    font-weight: bold;
    color: black;
  }
`;

const Onlyadult = styled.div`
  display: flex;
  align-items: center;
  margin-top: 24px;
  padding: 12px 16px;
  border: 1px solid #e4e5e8;
  border-radius: 3px;
  background-color: #f8f8f9;
  position: relative;
  padding-left: 20px;
  font-size: 12px;
  color: #79818f;
  font-size: 14px;
`;

const Next = styled.div`
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  background-color: #c9ccd2;
  cursor: not-allowed;
  color: #79818f;
  ${props =>
    props.status.agree1 &&
    props.status.agree2 &&
    css`
      background-color: #1772f8;
      cursor: pointer;
      color: white;
    `}
`;

const Checkinput = styled.input`
  width: 100%;
  display: none;
  &:checked {
    display: none;
  }
`;

const Circletext = styled.span`
  color: #1772f8;
`;
