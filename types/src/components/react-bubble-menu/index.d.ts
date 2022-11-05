import { BubbleMenuPluginProps } from "./bubble-menu-pluin";
import React from "react";
declare type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;
export declare type BubbleMenuProps = Omit<Optional<BubbleMenuPluginProps, "pluginKey">, "element"> & {
    className?: string;
    children: React.ReactNode;
};
export declare const BubbleMenu: (props: BubbleMenuProps) => JSX.Element;
export {};
