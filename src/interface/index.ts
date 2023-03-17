export interface IProduct {
  id?: number,  
  name: string;
  amount: number;
  orderId?: number;
}

export interface IUser { 
  id?: number,
  username: string,
  vocation: string,
  level: number,
  password: string,
}

export interface IOrder {
  id?: number;
  userId: number;
  productsId: number[];
}

export interface ILogin {
  username: string,
  password?: string
}
