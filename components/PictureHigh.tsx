import ActiveLink from '../components/ActiveLink'

const PictureHigh: React.FC = () => {
    return (
        <div className="flex-container MargTop">
            <ActiveLink href="/contact" activeClassName="colorState">
                <a><img className="Zoom" src="/images/letter.svg" width={70} height={70} /></a>
            </ActiveLink>
            <table width="3%" />
                <img className="Maru Zoom" src="/images/watasi.svg" width={147} height={150} />
            <table width="3%" />
            <ActiveLink href="/paper" activeClassName="colorState">
                <a><img className="Zoom" src="/images/feather.svg" width={70} height={70} /></a>
            </ActiveLink>

        </div>
    );
}

export default PictureHigh;