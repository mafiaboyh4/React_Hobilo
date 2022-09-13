export const Currency = (value:number) => {
    return Intl.NumberFormat().format((value));
}
