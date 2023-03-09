import { useAppDispatch, useAppSelector } from '../../app/hooks';
import Switch from '../../common/components/Switch';
import TextWithIcon from '../../common/components/TextWithIcon';
import { selectIsConstructionMode, toggleConstructionMode } from './constructionSlice';
import { ReactComponent as EyeIcon } from '../../images/eye.svg';
import { ReactComponent as Brackets } from '../../images/brackets.svg';
import { calculatorReset } from '../calculator/calculatorSlice';

const ConstructiorSwitch = () => {
  const dispatch = useAppDispatch();
  const isConstructionMode = useAppSelector(selectIsConstructionMode);

  const firstIcon = <EyeIcon color={`${isConstructionMode ? '#4D5562' : '#5D5FEF'}`}/>;
  const secondIcon = <Brackets color={`${isConstructionMode ? '#5D5FEF' : '#4D5562'}`}/>;

  const firstToggleContent = <TextWithIcon space={8} icon={firstIcon} text={'Runtime'}/>;
  const secondToggleContent = <TextWithIcon space={8} icon={secondIcon} text={'Constructor'}/>;

  const switchConstructionMode = () => {
    dispatch(calculatorReset());
    dispatch(toggleConstructionMode());
  };

  return <Switch first={firstToggleContent}
    second={secondToggleContent}
    isOn={!isConstructionMode}
    onToggle={switchConstructionMode}
  ></Switch>;
};

export default ConstructiorSwitch;