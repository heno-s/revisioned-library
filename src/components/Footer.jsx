import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faInstagram,
    faFacebook,
    faGithub,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
        <footer>
            <span>Contact: </span>
            <div className="social-links">
                <a
                    className="github"
                    href="https://github.com/heno-s"
                >
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                    className="instagram"
                    href="https://instagram.com/henosury"
                >
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a
                    className="facebook"
                    href="https://facebook.com/henoplastoveretazky.sury"
                >
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
            </div>
        </footer>
    );
}
