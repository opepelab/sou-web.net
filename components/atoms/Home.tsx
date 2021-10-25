type Props = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Home: React.FC<Props> = ({ open, setOpen }) => {
    return (     
        <div>
            <main>
            <div aria-expanded={open} onClick={() => setOpen(!open)}
                aria-label="TOP Toggle menu">
                <h1 className="Home">Sou Web</h1>
            </div>
            <div className="loader">
                <div className="inner one" />
                <div className="inner two" />
                <div className="inner three" />
            </div>
            hello
            </main>
        </div>
    );
}


export default Home;