import { CTA } from "components/main-tile/types";

export interface SocialTileProps {
    key: number;
    header: string;
    cta: CTA;
    desc?: string;
    links?: CTA[];
}