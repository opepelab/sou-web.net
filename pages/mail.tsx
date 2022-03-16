import { useMail } from "hooks/useMail";
import OG from "components/Sys/OG";
import Framerdiv from "components/Sys/Framer";

export const Mail: React.FC<HTMLTextAreaElement> = () => {
  const { setName, setMail, setMessage, send } = useMail();
  return (
    <Framerdiv>
      <OG title="mail - sou" description="メール" />
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
    </Framerdiv>
  );
};

export default Mail;
