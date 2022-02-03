import ActiveLink from "./Sys/ActiveLink";

const Text: React.FC = () => {
  return (
    <div className="inblo Fix">
      <ActiveLink href="/" activeClassName="headerState">
        <a className="hidari hikki">Written by Sou Watanabe</a>
      </ActiveLink>
    </div>
  );
};

export default Text;
