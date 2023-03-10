import styled from 'styled-components';
import { ReactComponent as AddIcon } from '../../images/add_image.svg';

const DropTooltipBorder = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
`;

const CentralizedContent = styled.div`
  text-align: center;
`;

const DropTooltip = () => {
  return <DropTooltipBorder>
    <CentralizedContent>
      <AddIcon style={{margin: 0, marginBottom: 12}} />
      <p style={{ color: '#5D5FEF', margin: 0, marginBottom: 4 }}>Перетащите сюда</p>
      <p style={{ margin: '0 auto', fontSize: 14, width: 120 }}>Любой элемент из левой панели</p>
    </CentralizedContent>
  </DropTooltipBorder>;
};

export default DropTooltip;