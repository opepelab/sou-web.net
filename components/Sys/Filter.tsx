import { Dispatch, SetStateAction } from "react";

type boolProp = {
  view: boolean;
  setView: Dispatch<SetStateAction<boolean>>;
  links: boolean;
  setLinks: Dispatch<SetStateAction<boolean>>;
};

const Filter: React.FC<boolProp> = ({ view, setView, links, setLinks }) => {
  return (
    <div className="Filter">
      <div
        aria-expanded={view || links}
        onClick={() => {
          setView(false);
          setLinks(false);
        }}
      />
    </div>
  );
};

export default Filter;
