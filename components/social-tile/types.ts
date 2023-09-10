import { CTA } from "components/frame/card-frame/types";


export interface SocialTileProps {
    key: number|string;
    header: string;
    cta: CTA;
    desc?: string;
    links?: CTA[];
}