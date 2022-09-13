export const Currency = (value:number | string) => {
    return Intl.NumberFormat().format((Number(value)));
}
