import { useAppDispatch } from '../../app/hooks';
import Button from '../../common/components/Button';
import { DisableableElement } from '../../common/components/Disableable';
import { digitAdded } from './calculatorSlice';

type DigitChangerProps = {
  changer: string;
}

const DigitChanger = (props: DigitChangerProps & DisableableElement) => {
  const dispatch = useAppDispatch();

  const changeNumber = () => {
    dispatch(digitAdded(props.changer));
  };

  const clickHandler = props.isClickable ? 
    changeNumber :
    (e: React.MouseEvent<HTMLButtonElement>) => e.preventDefault(); 


  return <Button color="#ffffff"
    onClick={clickHandler}
    disabled={props.isDisabled}
    hoverBorderColor="#5D5FEF"
    borderColor="#E2E3E5"
    textColor="#000000"
    fontWeight={500}
    className={props.changer === '0' ? 'zero' : undefined}
    isClickable={props.isClickable}>
    {props.changer}
  </Button>;
};

export default DigitChanger;