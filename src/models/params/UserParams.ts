import { User } from "models/data/User";

export interface UserParams {
  page: number;
  pageSize: number;
  search?: {
    [Property in keyof User]: any;
  };
}
