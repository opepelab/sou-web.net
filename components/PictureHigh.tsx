import ActiveLink from '../components/ActiveLink'

const PictureHigh = () => {
    return (
        <div className="flex-container marginTop">
            <ActiveLink href="/contact" activeClassName="colorState">
                <a><img className="Zoom" src="/images/letter.svg" width={70} height={70} /></a>
            </ActiveLink>
            <table width="3%" />
            <ActiveLink href="/blog" activeClassName="colorState">
                <a><img className="Zoom" src="/images/feather.svg" width={70} height={70} /></a>
            </ActiveLink>
        </div>
    );
}

export default PictureHigh;