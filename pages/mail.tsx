import { useState } from 'react';
import { useMail } from 'hooks/useMail';
import OG from 'components/Sys/OG';
import Framer from 'components/Sys/Framer';

export const Mail: React.FC<HTMLTextAreaElement> = () => {
  const { mail, setMail, setName, setMessage, Submit } = useMail();
  const [error, setError] = useState(true);

  const Send = () => {
    if (validateEmail(mail)) {
      Submit;
    }
  };

  const validateEmail = (checkStr: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (regex.test(checkStr)) {
      setError(false);
      return true;
    } else {
      setError(true);
      return false;
    }
  };

  return (
    <Framer>
      <OG title="Mail - Sou Watanabe" description="My Mail" />
      <main className="Mail inblo">
        <form>
          {error ? <h1>Are you sure?</h1> : <h1>Thank you so much.</h1>}
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
              <div onClick={Send} className="massageButton">
                {error ? <div>Submit</div> : <div className="Spinner">Success !</div>}
              </div>
            </dd>
          </dl>
        </form>
      </main>
    </Framer>
  );
};

export default Mail;
