interface IProduct {
    id: string;
    createdAt: string;
    updatedAt: string;
    name: string;
    shortDescription: string;
    fullDescription: string;
    images: string[];
    price: number;
    categoryId: string;
}

export type { IProduct };
