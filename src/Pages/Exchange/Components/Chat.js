import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretSquareDown,
  faCaretSquareUp,
  faCog
} from "@fortawesome/free-solid-svg-icons";

const Chat = () => {
  return (
    <Wrapper>
      <Header>
        <FontAwesomeIcon
          style={{
            cursor: "pointer",
            marginRight: "10px"
          }}
          icon={faCaretSquareDown}
          color="skyblue"
          size="lg"
        />
        <Text>채팅 (855c29)</Text>
        <Text two>&nbsp;Lv.1</Text>
        <Setting>
          <FontAwesomeIcon
            style={{ cursor: "pointer" }}
            icon={faCog}
            color="gray"
          />
        </Setting>
      </Header>
      <Chatlist></Chatlist>
      <InputWrapper>
        <Input placeholder="메세지를 입력하세요. (최대200자)"></Input>
        <Inputbtn>전송</Inputbtn>
      </InputWrapper>
    </Wrapper>
  );
};

export default Chat;

const Wrapper = styled.div`
  padding: 10px;
`;
const Header = styled.div`
  display: flex;
  position: relative;
  padding: 0 10px;
  width: 100%;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
`;
const Text = styled.div`
  color: ${props => (props.two ? "#9e9e9e" : "#424242")};
  font-size: ${props => (props.two ? "12px" : "15px")};
  font-weight: bold;
`;
const Setting = styled.div`
  position: absolute;
  right: 10px;
`;

const Chatlist = styled.div`
  width: 100%;
  height: 165px;
`;
const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 4px;
  border-radius: 6px;
  background-color: #fafafa;
  font-size: 12px;
  height: 40px;
`;
const Input = styled.textarea`
  padding-top: 12px;
  padding-left: 5px;
  width: 90%;
  color: gray;
  outline: 0;
  caret-color: #1772f8;
  overflow: hidden;
  border: 0;
  background-color: transparent;
  font-size: 12px;
  font-weight: bold;
  resize: none;
  height: 100%;
  ::placeholder {
    color: #e0e0e0;
  }
`;
const Inputbtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 28px;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  background-color: #fff;
  color: #424242;
  font-size: 12px;
  width: 50px;
`;
