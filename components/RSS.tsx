import Link from "next/link";

const RSS: React.FC = () => {
  return (
    <div className="RSS">
      <Link href="/feed">
        <a>
          <div className="feedicon">
            <div className="f1" />
            <div className="f2" />
            <div className="f3" />
          </div>
        </a>
      </Link>
    </div>
  );
};

export default RSS;
