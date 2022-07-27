import { AnimatePresence, motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useMail } from 'hooks/useMail';
import OG from 'components/Sys/OG';
import Framer from 'components/Sys/Framer';
import { Heading } from '@chakra-ui/react';

export const Mail: React.FC<HTMLTextAreaElement> = () => {
  const { mail, setMail, name, setName, message, setMessage, Submit } = useMail();
  const [error, setError] = useState<null | boolean>(null);
  const [useInitialize, setInitialize] = useState(true);

  const Send = (): void => {
    if (validateEmail(mail) === true) {
      Submit();
      setMail('');
      setName('');
      setMessage('');
    } else false;
  };

  const validateEmail = (checkString: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (regex.test(checkString) === true) {
      setError(false);
      return true;
    } else {
      setError(true);
      return false;
    }
  };

  useEffect(() => {
    setError(null);
  }, [useInitialize]);

  const MailFormDom = (
    <form>
      <Heading as="h1" mt="5" mb="0" fontWeight="200" fontSize="24" border="0">
        {error === null ? '' : error === false ? 'Thank you so much.' : 'error'}
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
          <div onClick={Send} className={`massageButton ${error === false ? 'noAction' : null}`}>
            {error === null ? 'Submit' : error === false ? [<div className="loader" />, 'Success !'] : 'Retry!'}
          </div>
        </dd>
      </dl>
    </form>
  );

  return (
    <Framer>
      <OG title="Mail - Sou Watanabe" description="My Mail" />
      <main className="Mail wrapper inblo">
        <div className="wrapper Card">
          <a className="Card CardBox" href="https://twitter.com/pull1102" target="_blank">
            <div className="TwitterTexts">Twitter Cards</div>
            <img className="Circle" src="/picture/Nanamin240.png" width={80} height={80} />
            <div className="Texts">Thanks Using Contact form</div>
          </a>
        </div>
        {error === null ? (
          MailFormDom
        ) : error === false ? (
          <AnimatePresence exitBeforeEnter>
            <motion.div
              initial={{ opacity: 1, scale: 1 }}
              animate={{ opacity: 0, scale: 0 }}
              exit={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              {MailFormDom}
            </motion.div>
          </AnimatePresence>
        ) : (
          <AnimatePresence exitBeforeEnter>
            <motion.div
              onClick={() => setInitialize(!useInitialize)}
              initial={{ opacity: 1, scale: 1, y: -5 }}
              animate={{ opacity: 1, scale: 1, y: 5 }}
              exit={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', duration: 1.4, bounce: 1 }}
            >
              {MailFormDom}
            </motion.div>
          </AnimatePresence>
        )}
      </main>
    </Framer>
  );
};

export default Mail;
