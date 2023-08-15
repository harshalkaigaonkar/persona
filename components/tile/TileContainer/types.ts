import React from "react";
import { Link } from "../MainTile/types";

export interface TileContainerProps {
    children: React.ReactNode;
    className?: string;
    onClick?: (redirect_link?: Link) => void;
}