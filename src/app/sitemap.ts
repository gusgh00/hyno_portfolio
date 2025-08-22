import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://portfolio.hyno.kr',
        },
        {
            url: 'https://portfolio.hyno.kr/career',
        },
        {
            url: 'https://portfolio.hyno.kr/tech_stack',
        },
        {
            url: 'https://portfolio.hyno.kr/project',
        },
    ]
}