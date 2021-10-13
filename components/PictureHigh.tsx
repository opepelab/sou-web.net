import ActiveLink from '../components/ActiveLink'

const PictureHigh: React.FC = () => {
    return (
        <div className="flex-container MargTop">
            <ActiveLink href="/files" activeClassName="colorState">
                <a><img className="Zoom" src="/images/folder.svg" width={70} height={70} /></a>
            </ActiveLink>
                 <img className="Maru Zoom" src="/images/orei.png" width={117} height={120} />
            <ActiveLink href="/contact" activeClassName="colorState">
                 <a><img className="Zoom" src="/images/gm.ico" width={70} height={70} /></a>
            </ActiveLink>
        </div>
    );
}

export default PictureHigh;