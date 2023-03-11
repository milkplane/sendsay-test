import { useAppDispatch } from '../../app/hooks';
import Button from '../../common/components/Button';
import { DisableableElement } from '../../common/components/Disableable';
import { operatorAdded } from './calculatorSlice';

type OperatorProps = {
  operator: string;
}

const Operator = (props: OperatorProps & DisableableElement) => {
  const dispatch = useAppDispatch();

  const addOperator = () => {
    dispatch(operatorAdded(props.operator));
  };

  return <Button color="#ffffff"
    onClick={addOperator}
    hoverBorderColor="#5D5FEF"
    borderColor="#E2E3E5"
    textColor="#000000"
    fontWeight={500}
    isClickable={props.isClickable}>
    {props.operator}
  </Button>;
};

export default Operator;