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
                <h1 className="Home pinkLinks">Sou Web</h1>
                </div>
            </main>
        </div>
    );
}


export default Home;