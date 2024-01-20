import { Form } from 'antd';
import { FormProps } from 'react-router-dom';
import { InputPrimary } from '../../InputPrimary';
import {
  InputsWrapper,
  StyledInputNumber,
  InputAddon,
  ButtonsWrapper,
  Calories,
  Value,
} from './AddProductForm.styled';
import { PrimaryButton } from '../..';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCalculatedCalories } from '../../../redux/products';
import { AppDispatch } from '../../../redux';
import { selectCalculatedCalories } from '../../../redux/products/selectors';

interface AddProductFormProps extends FormProps {
  product: { title: string; calories: number };
  handleCancel: () => void;
}

const AddProductForm: React.FC<AddProductFormProps> = ({
  product,
  handleCancel,
}) => {
  const [numberValue, setNumberValue] = useState<number>(100);
  const dispatch = useDispatch<AppDispatch>();
  const calculatedCalories = useSelector(selectCalculatedCalories);
  console.log(calculatedCalories);

  const calculateCalories = () => {
    return Math.round((numberValue * product.calories) / 100);
  };

  const handleNumberChange = (value: string | number | null) => {
    if (typeof value === 'number') {
      setNumberValue(value);
    }
  };

  const handleSubmit = () => {
    dispatch(setCalculatedCalories(calculateCalories()));
  };
  return (
    <Form>
      <InputsWrapper>
        <InputPrimary
          placeholder="Pablo"
          bordercolor="default"
          style={{ height: '40px' }}
          value={product.title}
          readOnly
        />
        <StyledInputNumber
          addonAfter={<InputAddon>grams</InputAddon>}
          autoFocus
          step={10}
          onChange={handleNumberChange}
          onStep={handleNumberChange}
          type="number"
          defaultValue={numberValue}
          min={10}
          max={10000}
        />
      </InputsWrapper>
      <Calories>
        Calories: <Value>{calculateCalories()}</Value>
      </Calories>
      <ButtonsWrapper>
        <PrimaryButton
          htmlType="submit"
          text="Add product"
          sizes="small"
          type="primary"
          onclick={handleSubmit}
        >
          Add product
        </PrimaryButton>
        <PrimaryButton
          text="Cancel"
          sizes="small"
          type="default"
          onclick={handleCancel}
        />
      </ButtonsWrapper>
    </Form>
  );
};

export default AddProductForm;
