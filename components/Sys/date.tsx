import { parseISO, format } from 'date-fns'

type Props = {
    dateString: string;
}

export const Date: React.FC<Props> = ({ dateString }): JSX.Element => {
 const date: Date|string = parseISO(dateString)
 return <time dateTime={dateString}>{format(date, 'yyyy.MM.dd')}</time>
}

export default Date;