import { Dispatch, SetStateAction } from "react";

export type TperspectiveTextProps = {
    children: React.ReactNode;
};

export type TlogoMarqueeProps = {
    children: React.ReactNode;
    baseVelocity: number;
};

// navbar

export type TlinksProps = {
    data: {
        title: string,
        index: number,
        href: string;
    };
    className: string;
    isActive: boolean,
    setSelectedIndicator: Dispatch<SetStateAction<string>>;
};