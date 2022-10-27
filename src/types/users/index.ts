import { IRole } from "../role"

export interface IUser {
  birthday: any
  created_at: string
  deleted_at: any
  id: number
  mobile: string
  mobile_verified_at: any
  name: string
  physical_address: any
  updated_at: string
  roles?: IRole[]
}
