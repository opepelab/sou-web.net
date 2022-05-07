import { parseISO, format } from 'date-fns';

type Prop = {
  dateString: string;
};

export const Date: React.FC<Prop> = ({ dateString }) => {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'MMMM do, yyyy')}</time>;
};

export default Date;
