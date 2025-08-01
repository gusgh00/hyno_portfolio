import Album01 from "@imgs/album_01.png";
import Album05 from "@imgs/album_05.png";
import Album06 from "@imgs/album_06.png";
import Album07 from "@imgs/album_07.png";
import Album08 from "@imgs/album_08.png";
import Album09 from "@imgs/album_09.png";
import { albumInterface } from "@interfaces/AlbumInterface";

export const allList: albumInterface[] = [
    {
        type_idx: 1,
        album_idx: 101,
        type: "정규직",
        album_owner: "비트썸원",
        album_name: "바이비츠 (BY BEATS)",
        year: "2023",
        img: Album01,
        music_list: [
            {
                music_idx: 10101,
                name: "바이비츠 (BY BEATS)",
                like: false,
                dislike: false
            }
        ]
    },
    {
        type_idx: 1,
        album_idx: 102,
        type: "정규직",
        album_owner: "비트썸원",
        album_name: "비트썸원",
        year: "2024",
        img: Album09,
        music_list: [
            {
                music_idx: 10201,
                name: "BGBP",
                like: false,
                dislike: false
            },
            {
                music_idx: 10202,
                name: "정산 시스템",
                like: false,
                dislike: false
            },
            {
                music_idx: 10203,
                name: "어그리투",
                like: false,
                dislike: false
            }
        ]
    },
    {
        type_idx: 1,
        album_idx: 103,
        type: "외주",
        album_owner: "엑시트",
        album_name: "엑시트",
        year: "2025",
        img: Album05,
        music_list: [
            {
                music_idx: 10301,
                name: "엑시트",
                like: false,
                dislike: false
            }
        ]
    },
    {
        type_idx: 2,
        album_idx: 201,
        type: "개인",
        album_owner: "유현호",
        album_name: "개미굴 가이드",
        year: "2024",
        img: Album06,
        music_list: [
            {
                music_idx: 20101,
                name: "개미굴 가이드",
                like: false,
                dislike: false
            }
        ]
    },
    {
        type_idx: 2,
        album_idx: 202,
        type: "수상",
        album_owner: "동양미래대학교",
        album_name: "케바케 (Care Bycycle Case)",
        year: "2022",
        img: Album07,
        music_list: [
            {
                music_idx: 20201,
                name: "케바케 (Care Bycycle Case)",
                like: false,
                dislike: false
            }
        ]
    },
    {
        type_idx: 3,
        album_idx: 301,
        type: "자소서",
        album_owner: "유현호",
        album_name: "자기소개서",
        year: "2000",
        img: Album08,
        music_list: [
            {
                music_idx: 30101,
                name: "프로젝트 진행으로 얻은 경험",
                like: false,
                dislike: false
            },
            {
                music_idx: 30102,
                name: "성격의 장점과 특기 / 성격의 부족한 점과 개선방안",
                like: false,
                dislike: false
            },
            {
                music_idx: 30103,
                name: "향후 미래 계획",
                like: false,
                dislike: false
            },
        ]
    },
]