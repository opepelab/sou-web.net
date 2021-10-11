import Head from 'next/head'


const Contact: React.FC  = () => {
    return (
        <div>
            <Head>
                <title>contact - sou</title>
                <meta name="description" content="コンタクト"/>
            </Head>
            <h2>Contact</h2>
            <div className="triangle-bottom" />
            <form action="https://formspree.io/f/xyylvaok" method="POST">
                <label htmlFor="name">
                Name
                </label><br/>
                    <input type="text" name="name" required />
                <label htmlFor="email">
                Mail
                </label>
                    <input type="text" name="email" required />
                <label htmlFor="massage">
                Message
                </label><br />
                    <textarea name="massage" required></textarea>
                    <br />
                <button id="massage" type="submit">
                    Send mail
                </button>
            </form>
        </div>   
    )
}


export default Contact;