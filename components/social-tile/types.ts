import { CTA } from "components/main-tile/types";

export interface SocialTileProps {
    key: number|string;
    header: string;
    cta: CTA;
    desc?: string;
    links?: CTA[];
}