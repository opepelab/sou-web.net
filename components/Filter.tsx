import React from "react";

type boolProp = {
  view: boolean;
  setView: React.Dispatch<React.SetStateAction<boolean>>;
  links: boolean;
  setLinks: React.Dispatch<React.SetStateAction<boolean>>;
};

const Filter: React.FC<boolProp> = ({ view, setView, links, setLinks, children }) => {
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
