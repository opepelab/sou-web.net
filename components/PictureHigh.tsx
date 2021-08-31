// 上に来るアイコンはこのファイル
const PictureHigh: React.FC = () => {
    return (
        <div className="flex-container">
            <a className="maru" href="https://github.com/opepelab" target="_blank">
                <img className="Maru Toumei ZoomS" src="/images/gitx.png" width={70} height={70} />
            </a>
            <a className="maru" href="mailto:ocelot2828@gmail.com" target="_blank">
                 <img className="Maru Toumei ZoomS" src="/images/email.png" width={70} height={70} />
            </a>
        </div>
    );
}

export default PictureHigh;