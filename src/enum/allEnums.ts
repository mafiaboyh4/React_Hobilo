export enum AdminPermission {
    'Main Admin' = 0,
    'Signal Admin',
    Support 
}

export enum TradeTypeUrlEnum {
    'users/trade/spots/' = 1, //history
    'users/trade/futures/', //history
    'users/pending/orders/spot/', //pending
    'users/pending/orders/future/', //pending
    'users/pending/positions/future/', //position
}
export enum TradeTypeAppUrlEnum {
    '/spotHistory/:id' = 1, //history
    '/futuresHistory/:id', //history
    '/spotPending/:id', //pending
    '/futuresPending/:id', //pending
    '/futuresPosition/:id', //position
}

export enum TradeTypeNameEnum {
    'Spot History' = 1, //history
    'Futures History', //history
    'spot Pending', //pending
    'Futures Pending', //pending
    'Futures Position', //position
}