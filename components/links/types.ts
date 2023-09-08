import { Link } from "components/main-tile/types";
import { MouseEventHandler } from "react";

export interface LinkProps {
    attached_url: Link;
    attached_content: string|JSX.Element;
    onRedirectHandler: (e: React.SyntheticEvent<HTMLButtonElement>, redirect_link?: Link) => void
}