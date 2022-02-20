import ActiveLink from "./Sys/ActiveLink";

const Text: React.FC = () => {
  return (
    <div>
      <div className="inblo hidari">
        <ActiveLink href="/" activeClassName="headerState">
          <a className="hikki">Written by Sou Watanabe</a>
        </ActiveLink>
      </div>
    </div>
  );
};

export default Text;
