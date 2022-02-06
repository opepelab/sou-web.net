import Link from "next/link";

const RSS: React.FC = () => {
  return (
    <div className="RSS">
      <Link href="/feed">
        <a>
          <div>
            <div className="feedicon">
              <div className="f1"></div>
              <div className="f2"></div>
              <div className="f3"></div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default RSS;
