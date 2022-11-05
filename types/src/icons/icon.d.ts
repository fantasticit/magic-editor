import React from "react";
export declare type IconProps = {
    style?: React.CSSProperties;
    onClick?: () => void;
    svg: React.ReactNode;
};
export declare const Icon: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<HTMLSpanElement>>;
export declare const buildIcon: (svg: IconProps["svg"]) => React.ForwardRefExoticComponent<Pick<IconProps, "style" | "onClick"> & React.RefAttributes<HTMLSpanElement>>;
