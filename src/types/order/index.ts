import { IProduct } from "../product"
import { IShipping } from "../shipping"
import { IUser } from "../users"

export interface IOrderAddress {
  address: string
  city_id: number
  created_at: string
  full_name: string | null
  id: number
  is_user_taking: boolean
  location: string
  mobile: string | null
  postal_code: string
  title: string
  updated_at: string
  user: IUser
  user_id: number
}

export interface IOrder {
  address_id: number
  address?: IOrderAddress
  admin_id: number | null
  coupon_id: number | null
  created_at: string
  delivery_day: string[]
  gateway: string
  id: number
  package_type: string
  quantity: string | number | null
  shipping?: IShipping
  shipping_id: number
  status: string //Should change to IOrderStatus
  updated_at: string
  user_id: number
  user?: IUser
  orderables?: IOrderable[]
}

export interface IOrderableProduct {
  attributables: any[]
  created_at: string
  id: number
  is_active: boolean
  is_default: number
  product_id: number
  regular_price: string
  sell_price: string
  sku: string
  stock_quantity: string
  updated_at: string
  product: IProduct
}

export interface IOrderable {
  created_at: string | null
  order_id: number

  orderable: IOrderableProduct
  orderable_id: number
  orderable_type: string
  price: string | number
  quantity: 1
  updated_at: string | null
}
