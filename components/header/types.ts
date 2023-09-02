import React from "react";

export interface IHeaderProps {
    theme: string;
    setTheme: React.Dispatch<React.SetStateAction<UThemeType>>;
}

export const enum UThemeType {
    LIGHT='light',
    DARK='dark',
}