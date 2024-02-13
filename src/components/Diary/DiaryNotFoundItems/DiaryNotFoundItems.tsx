import { useDiary } from '../../../hooks';
import { NotFound } from './DiaryNotFoundItems.styled';
import dayjs from 'dayjs';

interface DiaryNotFoundItemsProps {
  items: string;
}

const DiaryNotFoundItems: React.FC<DiaryNotFoundItemsProps> = ({ items }) => {
  const { selectedDate } = useDiary();
  const isCurrentDate = dayjs().isSame(dayjs(selectedDate), 'day');

  return (
    <NotFound>
      You haven't added any {items} {isCurrentDate ? 'today' : 'on this day'}
    </NotFound>
  );
};
export default DiaryNotFoundItems;
