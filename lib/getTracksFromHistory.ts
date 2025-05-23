import * as cheerio from 'cheerio'

interface HistoryTrack {
  title: string
  artist: string
  songtitle: string
  current: boolean
  timestamp: string
}

export default function (html: string): HistoryTrack[] {
  const $: cheerio.CheerioAPI = cheerio.load(html)

  return $('table:nth-child(2) tbody tr:not(:nth-child(1))')
    .map((_index, element) => {
      const isCurrent = Boolean($(element).find('td:nth-child(3)').text().trim())

      return {
        title: $(element).find('td:nth-child(2)').text().trim() || '',
        artist: '',
        timestamp: $(element).find('td:nth-child(1)').text().trim() || '',
        songtitle: $(element).find('td:nth-child(2)').text().trim() || '',
        current: isCurrent,
      }
    })
    .get()
}
