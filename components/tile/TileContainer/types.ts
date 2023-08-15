import { Link } from "../MainTile/types";

export interface TileContainerProps {
    children: JSX.Element;
    className?: string;
    onClick?: (redirect_link?: Link) => void;
}