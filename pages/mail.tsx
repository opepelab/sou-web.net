import { useMail } from "hooks/useMail";
import OG from "components/Sys/OG";
import Freya from "components/Sys/Freya";
import { useRouter } from "next/router";

export const Mail: React.FC<HTMLTextAreaElement> = () => {
  const router = useRouter();
  const { setName, setMail, setMessage, send } = useMail();
  return (
    <Freya>
      <OG title="Mail - Sou Watanabe" description="My Mail" url={router.asPath} />
      <main className="margin-Mobile-PC Mail inblo">
        <form>
          <h1>Are you sure?</h1>
          <dl>
            <dt>
              <label htmlFor="name">Name*</label>
            </dt>
            <dd>
              <input
                type="text"
                name="name"
                aria-label="Name area"
                onChange={(e) => setName(e.target.value)}
                required
              />
            </dd>

            <dt>
              <label htmlFor="email">Mail*</label>
            </dt>
            <dd>
              <input
                type="text"
                name="name"
                aria-label="Name area"
                onChange={(e) => setMail(e.target.value)}
                required
              />
            </dd>

            <dt>
              <label htmlFor="massage">Message</label>
            </dt>
            <dd>
              <textarea
                name="massage"
                aria-label="Massage area"
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </dd>
            <dd>
              <button id="massageButton" type="submit" onClick={send}>
                Let's send.
              </button>
            </dd>
          </dl>
        </form>
      </main>
    </Freya>
  );
};

export default Mail;
