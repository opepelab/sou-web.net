import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { useMail } from 'hooks/useMail';
import OG from 'components/Sys/OG';
import Framer from 'components/Sys/Framer';
import { Heading } from '@chakra-ui/react';
import { ClassNames } from '@emotion/react';

export const Mail: React.FC<HTMLTextAreaElement> = () => {
  const { mail, setMail, name, setName, message, setMessage, Submit } = useMail();
  const [error, setError] = useState<null | boolean>(null);

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
            {error === false ? 'Success !' : 'Submit'}
            {error === false ? <div className="loader" /> : null}
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
          <div className="Card CardBox">
            <div className="TwitterTexts">Twitter Cards</div>
            <a href="https://twitter.com/pull1102" target="_blank">
              <img className="Circle" src="/picture/Nanamin240.png" width={80} height={80} />
            </a>
            <div className="Texts">Thanks Using Contact form</div>
          </div>
        </div>
        {error === false ? (
          <AnimatePresence exitBeforeEnter>
            <motion.div
              initial={{ opacity: 1, scale: 1 }}
              animate={{ opacity: 0, scale: 0 }}
              exit={{ opacity: 0 }}
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
