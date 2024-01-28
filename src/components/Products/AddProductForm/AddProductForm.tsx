import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useDiary } from '../../../hooks';

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

import { setCalculatedCalories } from '../../../redux/products';
import { addDiaryProduct } from '../../../redux/diary';
import { AppDispatch } from '../../../redux';
import { getCurrentDate, calculateCalories } from '../../../helpers';

interface AddProductFormProps extends FormProps {
  product: {
    _id: string;
    title: string;
    calories: number;
  };
  handleCancel: () => void;
}

const AddProductForm: React.FC<AddProductFormProps> = ({
  product,
  handleCancel,
}) => {
  const [amountValue, setAmountValue] = useState<number>(100);
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading } = useDiary();

  const handleNumberChange = (value: string | number | null) => {
    if (typeof value === 'number') {
      setAmountValue(value);
    }
  };

  const handleSubmit = () => {
    dispatch(
      setCalculatedCalories(calculateCalories(amountValue, product.calories))
    );
    dispatch(
      addDiaryProduct({
        id: product._id,
        date: getCurrentDate(),
        amount: amountValue,
        calories: calculateCalories(amountValue, product.calories),
      })
    );
  };

  return (
    <Form>
      <InputsWrapper>
        <InputPrimary
          placeholder=""
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
          defaultValue={amountValue}
          min={10}
          max={10000}
          controls={false}
        />
      </InputsWrapper>
      <Calories>
        Calories:
        <Value>{calculateCalories(amountValue, product.calories)}</Value>
      </Calories>
      <ButtonsWrapper>
        <PrimaryButton
          htmlType="submit"
          text="Add product"
          sizes="small"
          type="primary"
          onclick={handleSubmit}
          loading={isLoading}
        />
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
