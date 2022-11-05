export declare const load: () => Promise<void>;
declare type Options = {
    container: HTMLElement;
    isEditable: boolean;
    data?: Record<string, unknown>;
};
export declare function renderMind(options: Options): any;
export {};
