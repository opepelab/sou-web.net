type BoolProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const MenuButton: React.FC<BoolProps> = ({ open, setOpen }) => {
  return (
    <div className="Line" aria-expanded={open} onClick={() => setOpen(!open)}>
      <button aria-label="Toggle mobile navigation menu" type="button" className="Humb">
        <span />
        <span />
      </button>
    </div>
  );
};

export default MenuButton;
