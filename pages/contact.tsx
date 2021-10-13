import Head from 'next/head'


const Contact: React.FC  = () => {
    return (
        <div>
            <Head>
                <title>contact - sou</title>
                <meta name="description" content="コンタクト"/>
            </Head>
            <main>
            <h1>Contact</h1>
                <div className="triangle-bottom" />
                <form action="https://formspree.io/f/xyylvaok" method="POST">
                    <label htmlFor="name">
                        Name
                    </label><br/>
                    <input type="text" name="name" aria-label="Name area" required />
                    <label htmlFor="email">
                        Mail
                    </label>
                    <input type="text" name="email" aria-label="Mail address area" required />
                    <label htmlFor="massage">
                        Message
                    </label><br />
                    <textarea name="massage" aria-label="Massage area" required />
                    <br />
                    <button id="massageButton" type="submit">
                        Send mail
                    </button>
                </form>
            </main>
        </div>   
    )
}


export default Contact;