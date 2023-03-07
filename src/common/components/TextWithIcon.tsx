import styled from 'styled-components';

const Border = styled.div`
  height: 20px;
  width: auto;
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

type TextWithIconProps = {
  icon: React.ReactNode;
  text: string;
  space?: number;
}

const TextWithIcon = (props: TextWithIconProps) => {
  return <Border>
    {props.icon}
    <span style={{padding: `0 0 0 ${props.space}px`}}>{props.text}</span>
  </Border>;
};

export default TextWithIcon;