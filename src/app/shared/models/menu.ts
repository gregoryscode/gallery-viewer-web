export interface Menu {
    title: string;
    icon?: string;
    svgIcon?: string;
    route?: string;
    children: Array<Menu>;
    membership: Array<number>;
}