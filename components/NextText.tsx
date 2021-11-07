import ActiveLink from './Sys/ActiveLink'

const NextText: React.FC = () => {
    return (
        <div className="flex-container">
            <ActiveLink href="/mail" activeClassName="colorState">
                <a className="scale">メール</a>
            </ActiveLink>
            <ActiveLink href="/blog/page/1" activeClassName="colorState">
                <a className="scale">ポスト</a>
            </ActiveLink>
        </div>
    );
}

export default NextText;