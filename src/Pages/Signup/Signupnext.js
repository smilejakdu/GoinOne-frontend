import React, { useState } from "react";
import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";

import SignupLayout from "Components/Layout/SignupLayout";

const Signupnext = props => {
  const [inputs, setInputs] = useState({
    email: "",
    pwd: "",
    pwdcheck: "",
    correct_email: false
  });
  const { email, pwd, pwdcheck, correct_email } = inputs;

  const onChange = e => {
    console.log(correct_email);
    const check_email = /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    const upper_case = /[A-Z]/;
    const lower_case = /[a-z]/;
    const number_case = /\d/;
    const length_case = pwd.length >= 10 ? true : false;
    if (check_email.test(email)) {
      setInputs({
        ...inputs,
        correct_email: true,
        [e.target.name]: e.target.value
      });
    } else {
      setInputs({
        ...inputs,
        [e.target.name]: e.target.value,
        correct_email: false
      });
    }
  };
  return (
    <SignupLayout>
      <Title>회원가입</Title>
      <Flow>
        <Flowinner>
          <Flowcontent>
            <FontAwesomeIcon icon={faCheckCircle} size="lg" color="black" />
            &nbsp; <Alreadytext> 약관 동의</Alreadytext>
          </Flowcontent>
          <Flowcontent>
            <Numcircle active>2</Numcircle>
            <Circletext>정보입력</Circletext>
          </Flowcontent>
        </Flowinner>
      </Flow>
      <Userinfo>
        <Formwrapper>
          이메일
          <Formemail
            onChange={onChange}
            name="email"
            laceholder="아이디로 사용할 이메일 입력"
            status={inputs}
            autoFocus
          />
          <Emailcheck status={inputs}>
            이메일 형식이 올바르지 않습니다
          </Emailcheck>
        </Formwrapper>
        <Formwrapper pwd>
          비밀번호
          <Formpwd
            type="password"
            onChange={onChange}
            name="pwd"
            placeholder="비밀번호 입력"
          />
          <Pwdcheckbox>
            <Checklist>
              <List>영문 대문자 포함</List>
              <List>영문 소문자 포함</List>
              <List>숫자 포함</List>
              <List>10자 이상</List>
            </Checklist>
          </Pwdcheckbox>
        </Formwrapper>
        <Formpwdcheck
          status={inputs}
          onChange={onChange}
          type="password"
          name="pwdcheck"
          placeholder="비밀번호 확인"
        ></Formpwdcheck>
        <Pwdcheck status={inputs}>비밀번호가 서로 맞지 않습니다</Pwdcheck>
        <Completebtn>완료</Completebtn>
      </Userinfo>
    </SignupLayout>
  );
};

export default Signupnext;

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
  margin-bottom: 30px;
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
const infobox = css`
  margin-top: 8px;
  padding-right: 64px;
  height: 48px;
  border-radius: 6px;
  &::placeholder {
    color: #c9ccd2;
  }
  &:focus {
    outline: none;
    border-color: rgba(23, 114, 248, 0.4);
    box-shadow: 0 0 0 1px rgba(23, 114, 248, 0.4);
  }
`;

const Circletext = styled.span`
  color: #1772f8;
`;

const Alreadytext = styled.span`
  color: black;
`;

const Userinfo = styled.div``;
const Formemail = styled.input`
  ${infobox};
  border-color: ${props =>
    props.status.correct_email === false && props.status.email && "red"};
`;
const Formpwd = styled.input`
  ${infobox};
`;
const Formpwdcheck = styled.input`
  ${infobox};
  border-color: ${props => props.status.pwd !== props.status.pwdcheck && "red"};
`;
const Completebtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 32px;
  background-color: #c9ccd2;
  color: #79818f;
  opacity: 0.5;
  padding: 0 16px;
  height: 48px;
  font-size: 16px;
  cursor: not-allowed;
`;

const Formwrapper = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: #484d55;
  ${props =>
    props.pwd &&
    css`
      margin-top: 25px;
    `}
`;

const check = css`
  color: #ff5141;
  margin-top: 4px;
  font-size: 12px;
`;

const Emailcheck = styled.div`
  ${check};
  display: ${props =>
    props.status.correct_email && props.status.email ? "none" : "block"};
`;

const Pwdcheck = styled.div`
  ${check};
  display: ${props =>
    props.status.pwd === props.status.pwdcheck ? "none" : "block"};
`;

const Pwdcheckbox = styled.div`
  margin: 8px 0 24px;
  padding: 12px 16px;
  border: 1px solid #e4e5e8;
  border-radius: 4px;
`;

const Checklist = styled.ul`
  list-style: none;
  background-color: #f8f8f9;
  color: #79818f;
`;
const List = styled.li`
  padding-left: 17px;
  margin-bottom: 5px;
  font-size: 12px;
  position: relative;
  ::before {
    content: "";
    position: absolute;
    top: 8px;
    left: 0;
    width: 3px;
    height: 3px;
    background-color: #aeb3bb;
  }
`;
