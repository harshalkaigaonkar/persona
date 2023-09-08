import { Tags } from "../tags/types";

export interface MainTileProps {
    key: string|number;
    header: string;
    cta: CTA;
    desc?: string;
    tags?: Tags[];
    links?: CTA[];
    media_link?: string; 
}

export interface CTA {
    url: Link;
    content: string|JSX.Element;
}

export interface Link {
    external: boolean;
    link: string;
    icon?: 'figma'|'github'|'mail'|'twitter'|'live';
}