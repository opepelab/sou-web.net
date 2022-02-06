import Link from "next/link";

const RSS: React.FC = () => {
  return (
    <div className="RSS">
      <Link href="/feed">
        <a>
          <button>
            <div className="feedicon">
              <div className="f1"></div>
              <div className="f2"></div>
              <div className="f3"></div>
            </div>
          </button>
        </a>
      </Link>
    </div>
  );
};

export default RSS;
