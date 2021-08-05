import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  font-weight: normal;
  font-size: 12px;
  line-height: 1.167;
  letter-spacing: 0.01em;
  color: #757575;
`;

export const FormText = styled.b`
  margin-bottom: 30px;
  font-weight: 700;
  font-size: 20px;
  line-height: 1.15;
  text-align: center;
  letter-spacing: 0.03em;
  color: #212121;
`;

export const FormLabel = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const FormInput = styled.input`
  padding-left: 42px;
  margin-top: 4px;
  margin-bottom: 10px;
  width: 100%;
  height: 40px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;
  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:focus {
    outline: none;
    border: 1px solid #2196f3;
  }
`;

export const FormInputIcon = styled.svg`
  position: absolute;
  left: 14px;
  top: 30px;
  width: 18px;
  height: 18px;
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);

  FormInput:focus + & {
    fill: #2196f3;
  }
`;

//   FormInput:focus + FormInputIcon {
//   fill: var(--accent-color);
// }

//     .form__input:focus + & {
//       fill: $accent-color;
//     }
//   }
// }
