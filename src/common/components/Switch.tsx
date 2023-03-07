import styled from 'styled-components';
import StyledButton from './StyledButton';

const Border = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  background-color: #F3F4F6;
  padding: 1px;
`;

type SwitchProps = {
  first: React.ReactNode,
  second: React.ReactNode,
  isOn: boolean,
  onToggle: () => void,
}

const Switch = (props: SwitchProps) => {
  const sameButtonClickHandler = (shouldBeOn: boolean) => {
    return () => {
      if (shouldBeOn === props.isOn) return;
      props.onToggle();
    };
  };

  return <Border>
    <StyledButton isActive={props.isOn} onClick={sameButtonClickHandler(true)}>{props.first}</StyledButton>
    <StyledButton isActive={!props.isOn} onClick={sameButtonClickHandler(false)}>{props.second}</StyledButton>
  </Border>;
};

export default Switch;