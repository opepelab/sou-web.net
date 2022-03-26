import ActiveLink from "./Sys/ActiveLink";

const Text: React.FC = () => {
  return (
    <div className="Top-Logo">
      <ActiveLink href="/" activeClassName="headerState">
        <a className="hikki">by Sou Watanabe</a>
      </ActiveLink>
    </div>
  );
};

export default Text;
