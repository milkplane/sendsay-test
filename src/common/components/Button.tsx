import styled from 'styled-components';

type ButtonExtraProps = {
  color: string;
  textColor: string;
  hoverBorderColor?: string;
  borderColor?: string;
  fontWeight?: number;
  isClickable?: boolean;
}

const Button = styled.button`
  box-sizing: border-box;
  text-align: center;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  border: 1px solid ${(props: ButtonExtraProps) => props.borderColor ? props.borderColor : props.color};
  background-color: ${(props: ButtonExtraProps) => props.color};
  color: ${(props: ButtonExtraProps) => props.textColor};
  font-weight: ${(props: ButtonExtraProps) => props.fontWeight};
  pointer-events: ${(props: ButtonExtraProps) => props.isClickable ? 'auto' : 'none'};

  &:hover {
    border: 1px solid ${(props: ButtonExtraProps) => props.hoverBorderColor};
  }
`;

export default Button;