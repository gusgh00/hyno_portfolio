import type { Metadata } from "next";

export const getMetadata = (path: string | null) => {
    const TITLE = path + " :: HYNO PORTFOLIO"
    const metadata: Metadata = {
        title: TITLE,
        description: "유현호의 프론트엔드 포트폴리오입니다.",
        icons: {
            icon: "/favicon.ico"
        },
        openGraph: {
            title: TITLE,
            description: "유현호의 프론트엔드 포트폴리오입니다.",
            type: 'website',
            siteName: "HYNO PORTFOLIO",
            url: "https://portfolio.hyno.kr",
            images: [
                {
                    url: "https://raw.githubusercontent.com/gusgh00/hyno_portfolio/refs/heads/main/assets/imgs/og_hyno.png",
                    width: "1100",
                    height: "740",
                    alt: "og_hyno"
                }
            ],
            locale: "ko_KR"
        },
    };

    return metadata
}