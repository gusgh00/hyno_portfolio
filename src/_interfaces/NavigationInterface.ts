export interface SubNavigationListInterface {
    name: string,
    href: string,
}

export interface NavigationListInterface {
    name: string,
    url: string,
    sub?: SubNavigationListInterface[]
}