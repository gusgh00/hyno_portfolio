import { StaticImageData } from "next/image"

export interface musicInterface {
    music_idx: number,
    name: string,
    like: boolean,
    dislike: boolean
}

export interface albumInterface {
    type_idx: number,
    album_idx: number,
    type: string,
    album_owner: string,
    album_name: string,
    year: string,
    img: StaticImageData,
    music_list: musicInterface[]
}