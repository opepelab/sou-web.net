import ActiveLink from './ActiveLink'

const NextText: React.FC = () => {
    return (
        <div className="flex-container">
            <ActiveLink href="/contact" activeClassName="colorState">
                <a className="scale">Email</a>
            </ActiveLink>
            <ActiveLink href="/blog" activeClassName="colorState">
                <a className="scale">Post</a>
            </ActiveLink>
        </div>
    );
}

export default NextText;