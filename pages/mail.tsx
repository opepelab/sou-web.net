import { useState } from 'react';
import { useMail } from 'hooks/useMail';
import OG from 'components/Sys/OG';
import Framer from 'components/Sys/Framer';
import Link from 'next/link';

export const Mail: React.FC<HTMLTextAreaElement> = () => {
  const { mail, setMail, setName, setMessage, Submit } = useMail();
  const [error, setError] = useState(true);

  const Send = () => {
    if (validateEmail(mail)) {
      Submit();
    }
  };

  const validateEmail = (mail: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (regex.test(mail)) {
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
              <div className="massageButton" onClick={Send}>
                Let's send.
              </div>
            </dd>
            {error ? null : 'ありがとう！'}
          </dl>
        </form>
      </main>
    </Framer>
  );
};

export default Mail;
