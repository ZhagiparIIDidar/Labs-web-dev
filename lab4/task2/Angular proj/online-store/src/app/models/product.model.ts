export interface Product{
    id:number;
    cId:number;
    name:string;
    description: string;
    price: number;
    rating: number;
    mainImage:string;
    images: string[];
    kaspiLink:string;
    tgLink:string;
    whLink:string;
    likes:number;
}