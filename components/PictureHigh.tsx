import ActiveLink from '../components/ActiveLink'

const PictureHigh: React.FC = () => {
    return (
        <div className="flex-container marginTop">
            <ActiveLink href="/contact" activeClassName="colorState">
                <a>Mail</a>
            </ActiveLink>
            <table width="2%" />
            <img className="Maru" src="/images/jett.svg" width={70} height={70} />
            <table width="2%" />
            <ActiveLink href="/blog" activeClassName="colorState">
                <a>Post</a>
            </ActiveLink>
        </div>
    );
}

export default PictureHigh;