

type Props = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MenuButton: React.FC<Props> = ({ open, setOpen }) => {
    return (     
        <div className="Line">
            <button aria-expanded={open} onClick={() => setOpen(!open)}
                aria-label="Toggle mobile navigation menu">
                <span />
                <span />
            </button>
        </div>
    );
}


export default MenuButton;