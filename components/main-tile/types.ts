import { CTA } from "components/frame/card-frame/types";
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