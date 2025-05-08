export interface Product {
  id:                   number;
  title:                string;
  description:          string;
  category:             Category;
  price:                number;
  discountPercentage:   number;
  rating:               number;
  stock:                number;
  tags:                 string[];
  brand?:               string;
  sku:                  string;
  weight:               number;
  dimensions:           Dimensions;
  warrantyInformation:  string;
  shippingInformation:  string;
  availabilityStatus:   AvailabilityStatus;
  reviews:              Review[];
  returnPolicy:         ReturnPolicy;
  minimumOrderQuantity: number;
  meta:                 Meta;
  images:               string[];
  thumbnail:            string;
}

export type AvailabilityStatus = "In Stock" | "Low Stock";

export type Category = "beauty" | "fragrances" | "furniture" | "groceries";

export interface Dimensions {
  width:  number;
  height: number;
  depth:  number;
}

export interface Meta {
  createdAt: Date;
  updatedAt: Date;
  barcode:   string;
  qrCode:    string;
}

export type ReturnPolicy =
  | "No return policy"
  | "30 days return policy"
  | "60 days return policy"
  | "7 days return policy"
  | "90 days return policy";

export interface Review {
  rating:        number;
  comment:       string;
  date:          Date;
  reviewerName:  string;
  reviewerEmail: string;
}
