import { Commentary } from "./commentary.model";

export class Article 
{
    id: number;
    title: string;
    type: string;
    content: string;
    createdAt: Date;
    imgUrl: string;
    commentaries: Commentary[];
}