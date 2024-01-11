//? Як приклад з ант дизайну дістав кнопку, по моєму 1 в 1 з макетом, тож можна просто цю юзати

import { Button } from 'antd';

const PrimaryButton: React.FC<{
  type: 'link' | 'text' | 'default' | 'primary' | 'dashed';
}> = ({ type }) => {
  return <Button type={type}>Button</Button>;
};

export default PrimaryButton;
