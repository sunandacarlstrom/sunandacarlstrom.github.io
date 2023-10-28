import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFontAwesome, faCode, faServer } from "@fortawesome/free-solid-svg-icons";

const FontAwesome = ({ icon, size, color }) => {
    if (size === undefined) {
        size = "2x";
    }

    var faIcon;

    switch (icon) {
        case "code":
            faIcon = faCode;
            break;

        case "server":
            faIcon = faServer;
            break;

        default:
            faIcon = faFontAwesome;
            break;
    }

    return (
        <>
            <FontAwesomeIcon icon={faIcon} size={size} color={color}/>
        </>
    );
};

export default FontAwesome;
