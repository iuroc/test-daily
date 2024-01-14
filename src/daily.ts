import van from 'vanjs-core'

const { table, tbody, td, th, thead, tr } = van.tags

export const makeHeader = (start: number = 0, textArray: string[] = ['日', '一', '二', '三', '四', '五', '六']) => {
    return textArray.map((_, index, array) => {
        return array[getIndex(index + start, 7)]
    })
}

export const getIndex = (num: number, length: number): number => {
    return num < 0 ? getIndex(num + length, length) : num % length
}


export function getDayGroup(year: number, mounth: number, start: number = 0) {
    type LineItem = number | null
    const totalDay = new Date(year, mounth, 0).getDate()
    const dayGroup: LineItem[][] = []
    const newLine = (): LineItem[] => [null, null, null, null, null, null, null]
    let line: LineItem[] = newLine()
    for (let day = 1; day <= totalDay; day++) {
        const date = new Date(year, mounth - 1, day)
        const dayWeek = date.getDay()
        if (dayWeek == start) {
            if (typeof line[6] == 'number') dayGroup.push(line)
            line = newLine()
        }
        line[getIndex(dayWeek - start, 7)] = day
    }
    dayGroup.push(line)
    return dayGroup
}

export const Daily = (year: number, mounth: number, start?: number) => {
    return table({ class: 'table table-bordered table-dark text-center rounded-3 overflow-hidden' },
        thead(tr(makeHeader(start).map(text => th({ scope: 'col' }, text)))),
        tbody(
            getDayGroup(year, mounth, start).map(line => tr(
                line.map(item => td(item))
            ))
        )
    )
}