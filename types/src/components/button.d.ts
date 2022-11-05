import React from "react";
declare type Size = "small" | "normal" | "large";
declare type ButtonType = "primary" | "normal";
declare type Props = {
    active?: boolean;
    disabled?: boolean;
    icon?: React.ReactNode;
    size?: Size;
    type?: ButtonType;
    onClick?: () => void;
    style?: React.CSSProperties;
};
export declare const Button: React.FC<React.PropsWithChildren<Props>>;
export {};
