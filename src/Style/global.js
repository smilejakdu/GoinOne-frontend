import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  list-style: none;
  margin: 0;
  padding: 0;
  outline: none;
  text-decoration: none;
}

h1,
h2,
h3,
h4,
h5 {
  font-weight: normal;
}

button {
  height: 34px;
  cursor: pointer;
  background-color: transparent;
  border: 1px solid #ddd;
  padding: 8px 20px;
  font-size: 13px;
  color: #767a83;
}

input {
  height: 40px;
  padding: 4px 10px;
  font-size: 12px;
  border: 1px solid #dbdde2;
  width: 100%;
}

.react-datepicker-wrapper {
  width: 100%;
}

.react-datepicker__input-container input {
  cursor: pointer;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

html,
body {
 
width: 100%;
height: 100%;
font-family: "spoqa han sans", "Noto Sans KR", "noto sans kr ie",
  "apple sd gothic neo", "맑은 고딕", "malgun gothic", sans-serif;
  
}
#root {
width: 100%;
height: 100%;

}
`;

export default GlobalStyle;
