export interface IDeliveyDay {
  from: string
  to: string
}

export interface ILocation {
  country_code: string
  country_id: number
  created_at: string
  flag: number
  id: number
  latitude: string
  longitude: string
  name: string
  pivot: { shipping_id: number; city_id: number; quantity: number }
  state_code: string
  state_id: number
  updated_at: string
  wikiDataId: string
}

export interface IShipping {
  created_at: string
  delivery_days: { [key: string]: IDeliveyDay }
  states: ILocation[]
  delivery_time_type: "d" | "h"
  free_delivery_quantity: number
  id: number
  is_location_limited: number
  max_delivery_time: number
  min_delivery_time: number
  name: string
  quantity: number
  updated_at: string
}
