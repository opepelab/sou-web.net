import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { useMail } from 'hooks/useMail';
import OG from 'components/Sys/OG';
import Framer from 'components/Sys/Framer';
import { Heading } from '@chakra-ui/react';

export const Mail: React.FC<HTMLTextAreaElement> = () => {
  const { mail, setMail, name, setName, message, setMessage, Submit } = useMail();
  const [error, setError] = useState<null | boolean>(null);

  const Send = () => {
    if (validateEmail(mail) === true) {
      Submit();
      setMail('');
      setName('');
      setMessage('');
    } else error;
  };

  const validateEmail = (checkString: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (regex.test(checkString)) {
      setError(false);
      return true;
    } else {
      setError(true);
      return false;
    }
  };
  const MailFormDom = (
    <form>
      <Heading as="h1" m="0" fontWeight="200" fontSize="32" border="0">
        {error === null ? 'null' : error === false ? 'Thank you so much.' : 'error'}
      </Heading>
      <dl>
        <dt>
          <label htmlFor="name">Name*</label>
        </dt>
        <dd>
          <input
            value={name}
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
            value={mail}
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
            value={message}
            name="massage"
            aria-label="Massage area"
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </dd>
        <dd>
          <div onClick={Send} className="massageButton">
            {error === null ? 'Submit' : error === false ? 'Success !' : 'Missing...'}
            {error === false ? <div className="loader">Loading...</div> : null}
          </div>
        </dd>
      </dl>
    </form>
  );

  return (
    <Framer>
      <OG title="Mail - Sou Watanabe" description="My Mail" />
      <main className="Mail inblo Hidden">
        <div className="Hidden">Thanks Using Contact form</div>
        {error === null ? (
          MailFormDom
        ) : error === false ? (
          <AnimatePresence exitBeforeEnter>
            <motion.div
              initial={{ scale: 1 }}
              animate={{ scale: 0 }}
              exit={{ y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              {MailFormDom}
            </motion.div>
          </AnimatePresence>
        ) : (
          MailFormDom
        )}
      </main>
    </Framer>
  );
};

export default Mail;
