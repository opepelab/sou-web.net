// 上に来るアイコンはこのファイル
const PictureHigh: React.FC = () => {
    return (
        <div className="flex-container top">
            <a className="maru" href="https://github.com/opepelab" target="_blank">
                <img className="Maru Zoom" src="/images/gitbaju.svg" width={70} height={70} />
            </a>
            <img className="Zoom pm" src="/images/ore.png" width={74} height={50} />
            <a className="maru" href="mailto:ocelot2828@gmail.com" target="_blank">
                 <img className="Maru Zoom" src="/images/gm.ico" width={70} height={70} />
            </a>
        </div>
    );
}

export default PictureHigh;