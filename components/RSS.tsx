import Link from "next/link";

const RSS: React.FC = () => {
  return (
    <div>
      <Link href="/feed.xml">
        <a>
          <svg className="RSS Menu-RSS" viewBox="0 0 800 800">
            <path d="M493 652H392c0-134-111-244-244-244V307c189 0 345 156 345 345zm71 0c0-228-188-416-416-416V132c285 0 520 235 520 520z" />
            <circle cx="219" cy="581" r="71" />
          </svg>
        </a>
      </Link>
    </div>
  );
};

export default RSS;
