export interface IProduct {
  reated_at: string;
  description: string;
  id: number;
  is_original: boolean;
  is_published: boolean;
  price: number;
  sells_count: number;
  stock_quantity_count: number;
  name: string;
  slug: string;
  status: string; //ToDo - Should change to product status
  updated_at: string;
  user_id: null | number;
  media?: string[];
  variants: any[];
}

export type IProductBundleAvailableCoupon = "percent" | "fixed";

export interface IProductBundle {
  available_coupons: IProductBundleAvailableCoupon[];
  coupon: string;
  coupon_type: IProductCopuonType;
  coupon_type_trans: string;
  created_at: string;
  id: number;
  publishes_at: string | null;
  status: string;
  title: string;
  slug: string;
  updated_at: string;
  products_count: number;
  media: any[];
  products: IProduct[];
}

export type IProductCopuonType = "fixed" | "percent" | null;

export interface IProductBrand {
  created_at: string;
  id: number;
  name: string;
  name_en: string | null;
  slug: string;
  updated_at: string;
}
