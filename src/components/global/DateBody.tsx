import React from 'react';
import { parseDateCustom } from './../../service/dateService';


export const DateBody = (rowData:any) => {
    const date = new Date(rowData.date ?? null)
    return (
        <span>{parseDateCustom(date)}</span>
    )
};