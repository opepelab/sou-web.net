import { useSetRecoilState, useRecoilState } from "recoil";
import { aboutState, linksState, menuState, linksStateRes, aboutStateRes } from "libs/unique";

const Filter: React.FC = () => {
  const [about, setAbout] = useRecoilState(aboutState);
  const [links, setLinks] = useRecoilState(linksState);
  const [menu, setMenu] = useRecoilState(menuState);
  const setAboutRes = useSetRecoilState(aboutStateRes);
  const setLinksRes = useSetRecoilState(linksStateRes);

  return (
    <div className="Filter">
      <div
        aria-expanded={menu || about || links}
        onClick={() => {
          setAbout(false);
          setLinks(false);
          setMenu(false);
          setAboutRes(false);
          setLinksRes(false);
        }}
      />
    </div>
  );
};

export default Filter;
