type Props = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Home: React.FC<Props> = ({ open, setOpen }) => {
    return (     
        <div>
            <main className="CN">
                <div aria-expanded={open} onClick={() => setOpen(!open)}
                aria-label="TOP Toggle menu">
                <div><img className="Maru" src="/SVG/ico.svg" width={100} height={100} /></div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <h1 className="Home pinkLinks">拙者</h1>
                </div>
            </main>
        </div>
    );
}


export default Home;