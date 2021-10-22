import { parseISO, format } from 'date-fns'

export default function Date({ dateString }: any): JSX.Element {
 const date = parseISO(dateString)
 return <time dateTime={dateString}>{format(date, 'yyyy.MM.dd')}</time>
}