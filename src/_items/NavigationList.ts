import { NavigationListInterface } from "../_interfaces/NavigationInterface";

export const navigationList: NavigationListInterface[] = [
    {
        name: "HOME",
        url: "/"
    },
    {
        name: "TECH STACK",
        url: "/tech_stack",
        sub: [
            {
                name: "STACK LIST",
                href: "#page_01_01"
            },
        ]
    },
    {
        name: "CAREER",
        url: "/career",
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
        url: "/project",
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
    // {
    //     name: "INTRODUCTION",
    //     url: "/introduction",
    //     sub: [
    //         {
    //             name: "EXPERIENCE",
    //             href: "#page_04_01"
    //         },
    //         {
    //             name: "PERSONALITY",
    //             href: "#page_04_02"
    //         },
    //         {
    //             name: "MY PLAN",
    //             href: "#page_04_03"
    //         },
    //     ]
    // },
]