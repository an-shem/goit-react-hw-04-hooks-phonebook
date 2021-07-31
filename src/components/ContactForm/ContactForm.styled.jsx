import styled from '@emotion/styled';

export const Form = styled.form`
  padding: 14px;
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;
  letter-spacing: 0.03em;
  border: 1px solid #2c2a2a;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  margin-bottom: 24px;
  padding: 4px 0px 4px 10px;
  /* width: 80%; */
  border: 1px solid #89888ba6;
  outline: none;

  &:focus {
    border: 1px solid #2f8cb8b2;
    box-shadow: 0px 0px 4px 2px #2f8cb8b2;
  }
`;

export const LabelName = styled.span`
  margin-bottom: 8px;
`;

export const AddButton = styled.button`
  margin-top: 10px;
  padding: 2px 8px;
  background-color: #fff;
  border: 1px solid #615e5e;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #98b0e4;
  }
`;
