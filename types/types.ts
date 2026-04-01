export type PaginatedData<T> = {
  current_page: number;
  last_page: number;
  data: T[];
};

export type PaginatedResponse<T> = {
  data: PaginatedData<T>;
};

export type Product = {
  id: number;
  name: string;
  slug: string;
  price: number;
  image_url: string;
  image: string;
  price_formatted: string;
  final_price_formatted: string;
  final_price: number;
  diskon: string;
  weight: number;
  type: number;
  mulai: string;
  selesai: string;
  sisastok: number;
  sisastok_label: number;
  jenispotongan: string | null;
  potongan: number | string | null;
  preorder: boolean;
  video_available: boolean;
  video: string | null;
};
