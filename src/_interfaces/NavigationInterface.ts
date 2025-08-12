export interface SubNavigationListInterface {
    name: string,
    href: string,
}

export interface NavigationListInterface {
    name: string,
    href: string,
    sub?: SubNavigationListInterface[]
}