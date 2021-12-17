import { motion } from "framer-motion"
import Head from "next/head"

const Profile: React.FC = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
      <Head>
        <title>profile - sou</title>
        <meta name="description" content="私について" />
      </Head>
      <main className="CN">
        TypeScriptと
        <br />
        ReactとNext.js
        <br />
        (Vercelに心酔しています)
        <br />
      </main>
    </motion.div>
  )
}

export default Profile
