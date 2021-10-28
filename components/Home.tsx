type Props = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Home: React.FC<Props> = ({ open, setOpen }) => {
    return (     
        <div>
            <main>
                <h1 className="Home">Sou Web</h1>
            <div aria-expanded={open} onClick={() => setOpen(!open)}
                aria-label="TOP Toggle menu">
            <div className="loading">
                <div className="loading-dot"></div>
                <div className="loading-dot"></div>
                <div className="loading-dot"></div>
                <div className="loading-dot"></div>
            </div>
            </div>
            </main>
        </div>
    );
}


export default Home;