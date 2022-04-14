import ActiveLink from "./Sys/ActiveLink";

const Text: React.FC = () => {
  return (
    <div className="Text">
      <ActiveLink href="/" activeClassName="headerState">
        <a className="sky">
          <div className="heart" />
          Sou Watanabe
        </a>
      </ActiveLink>
    </div>
  );
};

export default Text;
