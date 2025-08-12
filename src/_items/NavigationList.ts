import { NavigationListInterface } from "../_interfaces/NavigationInterface";

export const navigationList: NavigationListInterface[] = [
    {
        name: "HOME",
        href: "#home"
    },
    {
        name: "TECH STACK",
        href: "#tech_stack",
        sub: [
            {
                name: "STACK LIST",
                href: "#stack_list"
            },
        ]
    },
    {
        name: "CAREER",
        href: "#career",
        sub: [
            {
                name: "BEAT SOMEONE",
                href: "#beat_someone"
            },
            {
                name: "EXIT",
                href: "#exit"
            },
        ]
    },
    {
        name: "PROJECT",
        href: "#project"
    },
    {
        name: "SELF INTRODUCTION",
        href: "#self"
    },
]