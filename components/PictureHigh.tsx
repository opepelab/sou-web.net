import ActiveLink from '../components/ActiveLink'

const PictureHigh: React.FC = () => {
    return (
        <div className="flex-container marginTop">
            <img className="Maru mobile" src="/images/jett.svg" width={70} height={70} />
            <div className="leftLow">
            <ActiveLink href="/contact" activeClassName="colorState">
                <a>Email</a>
            </ActiveLink>
            </div>
            <div className="leftLow">
            <ActiveLink href="/blog" activeClassName="colorState">
                <a>Post</a>
            </ActiveLink>
            </div>
        </div>
    );
}

export default PictureHigh;