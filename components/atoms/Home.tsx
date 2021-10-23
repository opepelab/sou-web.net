type Props = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Home: React.FC<Props> = ({ open, setOpen }) => {
    return (     
        <div className="inblo">
            <main>
            <div aria-expanded={open} onClick={() => setOpen(!open)}
                aria-label="TOP Toggle menu">
                <h1 className="Home">Sou Web</h1>
            </div>
            </main>
        </div>
    );
}


export default Home;