import { Recipe } from "../../types/recipe";

export enum MainNavigatorRoutes {
    Tabs = "Tabs",
    Edit= "Edit",
    RecipeDetails = "Recipe Details",
    Interests = "Interests"
}

export type MainNavigatorRouteProps = {
    [MainNavigatorRoutes.Tabs]:undefined;
    [MainNavigatorRoutes.Edit]:undefined;
    [MainNavigatorRoutes.RecipeDetails]:Recipe;
    [MainNavigatorRoutes.Interests]:undefined;
}