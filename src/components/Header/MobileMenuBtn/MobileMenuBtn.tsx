import { Button } from './MobileMenuBtn.styled';
import Icon from '../../Icon/Icon';

interface MobileMenuBtnProps {
  onClick: () => void;
}

const MobileMenuBtn: React.FC<MobileMenuBtnProps> = ({ onClick }) => {
  return (
    <Button onClick={onClick}>
      <Icon
        name="menu"
        iconWidth={{ mobile: '24px', tablet: '32px' }}
        iconHeight={{ mobile: '24px', tablet: '32px' }}
      />
    </Button>
  );
};

export default MobileMenuBtn;