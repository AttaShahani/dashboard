import type { IconType } from "react-icons";
import { Link, type Location } from "react-router-dom";

interface LiProps {
    url: string;
    text: string;
    Icon: IconType;
    location: Location
}
const Li = ({url,text,Icon,location}:LiProps)=>(
<li
            style={{
              backgroundColor: location.pathname.includes(url)
                ? "rgba(0,115,225,0.1)"
                : "white",
            }}
          >
            <Link to={url}
            style={{
              color: location.pathname.includes(url)
                ? "rgba(0,115,225)"
                : "black",
            }}
            >
              <Icon />
              {text}
            </Link>
          </li>
)
export default Li