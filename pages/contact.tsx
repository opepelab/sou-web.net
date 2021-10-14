import Head from 'next/head'


const Contact: React.FC  = () => {
    return (
        <div className="inblo">
            <Head>
                <title>contact - sou</title>
                <meta name="description" content="コンタクト"/>
            </Head>
            <main>
            <h1>Contact</h1>
                <div className="triangle-bottom" />
                <form action="https://formspree.io/f/xyylvaok" method="POST">
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" aria-label="Name area" required />
                    </div>
                    <div className="margin10">
                        <label htmlFor="email">Mail</label>
                        <input type="text" name="email" aria-label="Mail address area" required />
                    </div>
                    <div className="margin10">
                        <label htmlFor="massage">Message</label>
                        <textarea name="massage" aria-label="Massage area" required />
                    </div>
                    <div className="margin16">
                    <button id="massageButton" type="submit">
                        Send mail
                    </button>
                    </div>
                </form>
            </main>
        </div>   
    )
}


export default Contact;