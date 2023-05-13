import { Recipe } from "../../main/types/recipe";

export interface User {
    id:string,
    email:string|undefined,
    username:string|undefined,
    password:string|undefined,
    profilePic:string|undefined,
    preferredFoodTypes: string[],
    favoriteRecipes: Recipe[]
}