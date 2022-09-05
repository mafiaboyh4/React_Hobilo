export interface PendingSpotModel {
    amount: number;
    asset_fee: string;
    avg_price: number;
    client_id: string;
    create_time: Date;
    deal_amount: number;
    deal_fee: number;
    deal_money: number;
    fee_asset?: any;
    fee_discount: string;
    finished_time?: any;
    id: number;
    left: number;
    maker_fee_rate: number;
    market: string;
    money_fee: string;
    order_type: string;
    price: number;
    status: string;
    stock_fee: string;
    taker_fee_rate: number;
    type: string;
}

