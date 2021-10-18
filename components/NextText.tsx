import ActiveLink from './ActiveLink'

const NextText: React.FC = () => {
    return (
        <div className="flex-container marginTop">
            <ActiveLink href="/contact" activeClassName="colorState">
                <a>Email</a>
            </ActiveLink>
            <ActiveLink href="/blog" activeClassName="colorState">
                <a>Post</a>
            </ActiveLink>
        </div>
    );
}

export default NextText;