import { TagsProps } from "../Tags/types";

export interface MainTileProps {
    header: string;
    cta: CTA;
    desc?: string;
    tags?: TagsProps[];
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
}