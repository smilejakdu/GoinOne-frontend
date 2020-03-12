import React from "react";

import Header from "Components/Header/Header";
import Footer from "Components/Footer/Footer";
import styled from "styled-components";

const SignupLayout = props => (
  <>
    <Header />
<<<<<<< HEAD
    {/* <Body> */}
    {/* <Signupbox></Signupbox> */}
    {/* </Body> */}
    {props.children}
=======
    <Body>
      <Main>
        <Signupbox>{props.children}</Signupbox>
      </Main>
    </Body>
>>>>>>> d68015c... 초기 셋팅 재설정 및 로그인 구현
    <Footer />
  </>
);

export default SignupLayout;

const Body = styled.div`
  margin-top: 68px;
`;
const Main = styled.div`
  padding: 80px 0;
`;

const Signupbox = styled.div`
  margin: 0 auto;
  max-width: 480px;
`;
