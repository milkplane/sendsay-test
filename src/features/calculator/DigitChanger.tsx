import { useAppDispatch } from '../../app/hooks';
import Button from '../../common/components/Button';
import { digitAdded } from './calculatorSlice';

type DigitChangerProps = {
  changer: string;
}

const DigitChanger = (props: DigitChangerProps) => {
  const dispatch = useAppDispatch();

  const changeNumber = () => {
    dispatch(digitAdded(props.changer));
  };

  return <Button color="#ffffff"
    onClick={changeNumber}
    hoverBorderColor="#5D5FEF"
    borderColor="#E2E3E5"
    textColor="#000000"
    fontWeight={500}
    className={props.changer === '0' ? 'zero' : undefined}>
    {props.changer}
  </Button>;
};

export default DigitChanger;