import ActiveLink from "./Sys/ActiveLink";

const Text: React.FC = () => {
  return (
    <div className="Text">
      <ActiveLink
        href="/"
        activeClassName="headerState"
      >
        <a>
          <div className="heart" />
          Sou Watanabe
        </a>
      </ActiveLink>
    </div>
  );
};

export default Text;
