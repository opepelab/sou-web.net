import ActiveLink from "./Sys/ActiveLink";

const Text: React.FC = () => {
  return (
    <div>
      <div className="inblo Top-Logo">
        <ActiveLink href="/" activeClassName="headerState">
          <a className="hikki Logo">by Sou Watanabe</a>
        </ActiveLink>
      </div>
    </div>
  );
};

export default Text;
