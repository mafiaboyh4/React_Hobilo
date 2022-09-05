export const parseDateCustom = (date:Date) => {
    if (!date) return null
    return date.toISOString().substring(0, 10)
}

export const TimeFrameTranslate = (id:number) => {
    const TimeFrames = [
        {label:'1m',value:0},
        {label:'5m',value:1},
        {label:'15m',value:3},
        {label:'30m',value:4},
        {label:'1h',value:5},
        {label:'4h',value:6},
        {label:'1D',value:7},
        {label:'1W',value:8},
        {label:'1M',value:9},
        {label:'6M',value:10},
    ]
    return TimeFrames.find(item => item.value == id)?.label ?? 'Not Found'
}