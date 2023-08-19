import * as cheerio from 'cheerio'

export default function (section: string, html: string) {
  const $: cheerio.CheerioAPI = cheerio.load(html)

  return $(`.${section}`)
    .map((_index, element) => ({
      title: $(element).find('.title').text().trim(),
      artist: $(element).find('.artist').text().trim(),
      timestamp: $(element).find('.timestamp').text().trim(),
    }))
    .get()
}

export function getSeparator(html: string) {
  const $: cheerio.CheerioAPI = cheerio.load(html)

  return $('.playing_track .separator').text().trim()
}
