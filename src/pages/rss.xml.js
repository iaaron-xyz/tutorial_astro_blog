import rss, {pagesGlobToRssItems} from '@astrojs/rss';

export async function GET(context) {
    return rss({
        title: 'Artist Developer | Blog',
        description: "This blog was made in the process of learning Astro, a javascript framework for static sites",
        site: context.site,
        items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
        customData: `<language>en-us</language>`
    });
}