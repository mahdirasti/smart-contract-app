import { IPermission, IRole } from "@/types/role";

export type UserProfileType = {
  birthday: string | null;
  created_at: string;
  updated_at: string;
  first_name: string | null;
  last_name: string | null;
  id: number;
  identity_document_progress: number;
  mobile: string;
  mobile_verified_at: string;
  national_code: string | null;
  permissions: Array<IPermission>;
  physical_address: string | null;
  postal_code: string | null;
  referral_code: string;
  referrer_id: string | null;
  roles: Array<IRole>;
};
