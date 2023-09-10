import { Link } from "components/main-tile/types";
import React from "react";

export interface ICardFrameProps {
    children: JSX.Element;
    key: string|number;
    onRedirectHandler: Function;
    content: string|JSX.Element;
    url: Link;
}