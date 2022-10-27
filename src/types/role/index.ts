export interface IRole {
  created_at: string;
  guard_name: string;
  id: number;
  name: string;
  name_translation: string;
  permissions: IPermission[];
  permissions_count: number;
  updated_at: string;
  users: IUserRole[];
  users_count: 4;
}

export interface IPermission {
  created_at: string;
  guard_name: string;
  id: number;
  name: string;
  name_translation: string;
  pivot: { role_id: number; permission_id: number };
  updated_at: string;
}

export interface IUserRole {
  created_at: string;
  id: number;
  mobile: string;
  mobile_verified_at: null;
  name: string;
  pivot: { role_id: number; model_id: number; model_type: string };
  updated_at: string;
}
