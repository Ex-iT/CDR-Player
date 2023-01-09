import * as cheerio from 'cheerio'

let $: cheerio.CheerioAPI

export default function (section: string, html: string) {
	$ = $ || cheerio.load(html)

	return $(`.${section}`)
		.map((_index, element) => ({
			title: $(element).find('.title').text().trim(),
			artist: $(element).find('.artist').text().trim(),
			timestamp: $(element).find('.timestamp').text().trim(),
		}))
		.get()
}

export const getSeparator = (html: string) => {
	$ = $ || cheerio.load(html)

	return $('.playing_track .separator').text().trim()
}
