import styled from 'styled-components';

import { darken } from 'polished';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;
  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: rgba(194, 203, 230, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    hr {
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.2);
      margin: 10px 0 20px;
    }

    span {
      color: red;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #5d52a9;
      font-weight: bold;
      color: #ffff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.1, '#5d52a9')};
      }
    }
  }


  >button {
      width: 100%;
      margin: 10px 0 0;
      height: 44px;
      background: #bd2e2e;
      font-weight: bold;
      color: #ffff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.08, '#bd2e2e')};

`;
