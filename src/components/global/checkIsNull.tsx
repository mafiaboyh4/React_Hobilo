import React from 'react'

export const checkIsNull = (rowData:any , field:string) => {
    return(
        <>{!!rowData[field] ? rowData[field] : '...'}</>
    );
};