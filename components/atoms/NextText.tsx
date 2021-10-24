import ActiveLink from '../Sys/ActiveLink'

const NextText: React.FC = () => {
    return (
        <div className="flex-container">
            <ActiveLink href="/picture" activeClassName="colorState">
                <a className="scale">Picture</a>
            </ActiveLink>
            <ActiveLink href="/blog" activeClassName="colorState">
                <a className="scale">Blog</a>
            </ActiveLink>
        </div>
    );
}

export default NextText;