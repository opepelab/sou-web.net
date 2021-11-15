import ActiveLink from './Sys/ActiveLink'

const Text: React.FC = () => {
    return (
        <div className="inblo">
            <ActiveLink href="/" activeClassName="colorState">
            <a className="migiue hikki aBlock">
                S o u  W e b
            </a>
            </ActiveLink>
        </div>
    );
}

export default Text;