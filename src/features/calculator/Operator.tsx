import { useAppDispatch } from '../../app/hooks';
import Button from '../../common/components/Button';
import { operatorAdded } from './calculatorSlice';

type OperatorProps = {
  operator: string;
}

const Operator = (props: OperatorProps) => {
  const dispatch = useAppDispatch();

  const addOperator = () => {
    dispatch(operatorAdded(props.operator));
  };

  return <Button color="#ffffff"
    onClick={addOperator}
    hoverBorderColor="#5D5FEF"
    borderColor="#E2E3E5"
    textColor="#000000"
    fontWeight={500}>
    {props.operator}
  </Button>;
};

export default Operator;