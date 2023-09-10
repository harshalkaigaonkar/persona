import { Link } from "components/links/types";
import React from "react";

export interface ICardFrameProps {
    children: JSX.Element;
    key: string|number;
    cta?: CTA;
}

export interface CTA {
    url: Link;
    content: string|JSX.Element;
}