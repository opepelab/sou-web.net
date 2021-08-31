import { useMail } from '../hooks/useMail';

export default function Mail() {
  const { setName, setMessage, send } = useMail();

  return (
    <div>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <textarea onChange={(e) => setMessage(e.target.value)} />
      <button type="button" onClick={send}>Send</button>
    </div>
  );
}