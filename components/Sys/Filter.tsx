import { useRecoilState } from "recoil";
import { aboutState, linksState } from "libs/unique";

const Filter: React.FC = () => {
  const [about, setView] = useRecoilState(aboutState);
  const [links, setLinks] = useRecoilState(linksState);
  return (
    <div className="Filter">
      <div
        aria-expanded={about || links}
        onClick={() => {
          setView(false);
          setLinks(false);
        }}
      />
    </div>
  );
};

export default Filter;
