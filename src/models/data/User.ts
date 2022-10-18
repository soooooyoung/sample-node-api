import { Item } from "./Items";

export type User = {
  uid: string; // VARCHAR(6)
  country: "kr" | "jp" | "cn" | "vn" | "us";
  created_at: string;
  lv: number;
  items: string;
};
