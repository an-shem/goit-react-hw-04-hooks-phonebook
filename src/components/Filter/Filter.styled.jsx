import styled from '@emotion/styled';

export const FilterTitle = styled.h3`
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;
  letter-spacing: 0.03em;
`;

export const FilterInput = styled.input`
  margin-bottom: 24px;
  padding: 4px 0px 4px 10px;
  width: 80%;
  border: 1px solid ${({ filter }) => (filter ? '#2f8cb8b2' : '#89888ba6')};
  outline: none;
  ${({ filter }) => (filter ? 'box-shadow: 0px 0px 4px 2px #2f8cb8b2;' : null)}

  &:focus {
    border: 1px solid #2f8cb8b2;
    box-shadow: 0px 0px 4px 2px #2f8cb8b2;
  }
`;
