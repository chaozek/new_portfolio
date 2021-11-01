import { Link } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
export const theme = {
  color: {
    white: "#f1f1f2",
    gray: "#f9f9fa",
    darkGray: "#76787b",
    black: "#000000",
    red: "#ff0000",
    yellow: "#f8d964",
  },
};

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
    font-family: 'Rubik', sans-serif;

  }
a{
  text-decoration: none !important;

}
  ul{
  list-style: none; 
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: black;

  }


input:focus,textarea:focus {
    outline : none ;
}
input::-ms-clear {
    display : none ;
}
textarea {
    resize: none ;
}

button{
  -webkit-appearance: none;
-moz-appearance: none;
appearance: none;
}
input[type="text"],input[type="number"],input[type="date"], select{
  border: 1px solid ${theme.color.gray};
  border-radius: 10px;
  width: 100%;
  height: 48px;
}
input[type="date"]::-webkit-datetime-edit-text,
input[type="date"]::-webkit-datetime-edit-month-field,
input[type="date"]::-webkit-datetime-edit-day-field,
input[type="date"]::-webkit-datetime-edit-year-field {
  color: #${theme.color.gray};
}
input[type="date"].date-input--has-value::-webkit-datetime-edit-text,
input[type="date"].date-input--has-value::-webkit-datetime-edit-month-field,
input[type="date"].date-input--has-value::-webkit-datetime-edit-day-field,
input[type="date"].date-input--has-value::-webkit-datetime-edit-year-field {
  color: ${theme.color.black};
}
input[type=checkbox] {
  -webkit-appearance: none;
  -moz-appearance:    none;
  appearance:         none;
}

input[type="radio"]{
    -webkit-appearance: radio !important;
    padding: 0
}

::placeholder,
  ::-webkit-input-placeholder {
    color: ${theme.color.gray}

  }
  :-ms-input-placeholder {
     color: ${theme.color.gray}

  }
label{
  display: block;
  font-size: 14px;
  padding: 1rem 0rem 0rem 0rem;

}
`;

type ContainerType = {
  size?: string;
  width?: string;
};
