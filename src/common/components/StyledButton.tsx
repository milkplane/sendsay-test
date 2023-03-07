import styled from 'styled-components';

type StyledButtonExtraProps = {
  isActive: boolean;
}

const StyledButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: ${(props: StyledButtonExtraProps) => props.isActive ? '1px solid #e2e3e5': '1px solid transparent'};
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  background-color: ${(props: StyledButtonExtraProps) => props.isActive ? '#ffffff' : 'transparent'};
  border-radius: 5px;
  padding: 8px, 12px;
  color: #4D5562;
  cursor: pointer;
`;

export default StyledButton;