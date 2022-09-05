export interface UsersGetModel {
    name: any;
    password: any;
    accept: any;
    _id: string;
    email: string;
    username: string;
    phone: string;
    countrycode: string;
    istotp: boolean;
    totp: string;
    kycstatus: string;
    level: number;
    banned: boolean;
    mailconfirm: boolean;
    passwordwrong: number;
    date: Date;
    __v: number;
}
