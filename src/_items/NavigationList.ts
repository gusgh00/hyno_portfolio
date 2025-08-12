import { NavigationListInterface } from "../_interfaces/NavigationInterface";

export const navigationList: NavigationListInterface[] = [
    {
        name: "HOME",
        href: "#home"
    },
    {
        name: "TECH STACK",
        href: "#page_01",
        sub: [
            {
                name: "STACK LIST",
                href: "#page_01_01"
            },
        ]
    },
    {
        name: "CAREER",
        href: "#page_02",
        sub: [
            {
                name: "BEAT SOMEONE",
                href: "#page_02_01"
            },
            {
                name: "EXIT",
                href: "#page_02_02"
            },
        ]
    },
    {
        name: "PROJECT",
        href: "#page_03",
        sub: [
            {
                name: "케바케",
                href: "#page_03_01"
            },
            {
                name: "개미굴 가이드",
                href: "#page_03_02"
            },
        ]
    },
    {
        name: "INTRODUCTION",
        href: "#page_04",
        sub: [
            {
                name: "EXPERIENCE",
                href: "#page_04_01"
            },
            {
                name: "PERSONALITY",
                href: "#page_04_02"
            },
            {
                name: "MY PLAN",
                href: "#page_04_03"
            },
        ]
    },
]