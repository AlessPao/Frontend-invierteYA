import { Article } from "./article.model";
import { User } from "./user.model";

export class Commentary 
{
    id: number;
    fullName: string;
    content: string;
    createdAt: Date;
    article: Article;
}