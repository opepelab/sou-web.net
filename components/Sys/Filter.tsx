import { useRecoilState } from "recoil";
import { viewState, linksState } from "libs/unique";

const Filter: React.FC = () => {
  const [view, setView] = useRecoilState(viewState);
  const [links, setLinks] = useRecoilState(linksState);
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
