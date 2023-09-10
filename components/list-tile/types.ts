import { CTA } from "components/frame/card-frame/types";

export interface ListTileProps {
    key: number|string;
    header: string;
    desc?: string;
    cta: CTA;
    list: IExperienceItem[];
}

export interface IExperienceItem {
    icon_media_link: string,
    header: string,
    company: {
        name: string,
        companyWebsiteUrl: string,
    },
    duration :{
        from: string,
        to: string
    }      
}

