type BoolProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Home: React.FC<BoolProps> = ({ open, setOpen }) => {
    return (     
        <div>
            <main className="CN">
                <div aria-expanded={open} onClick={() => setOpen(!open)}
                aria-label="TOP Toggle menu">
                <h1 className="Home hikki">S o u  W e b</h1>
                </div>
            </main>
        </div>
    );
}
export default Home;