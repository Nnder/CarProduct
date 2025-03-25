export type CarType = "Седан" | "Лифтбек" | "Универсал" | "Хэтчбек" | "Джип";

export type Image = {
  src: string;
  alt: string;
};

export type Car = {
  id?: number | string;
  model: string;
  brend: string;
  year: number | string;
  category: "auto";
  type: CarType;
  price: number;
  description: string;
  technicalSpecifications: Record<string, any>;
  images: Image[];
};
