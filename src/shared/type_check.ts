import { Category, Fat, Food, Mineral, Nutrient, Vitamin } from "@prisma/client";

export function isCategory(category: Category | Error): category is Category {
    return true;
 }

export function isFood(food: Food | Error): food is Food {
    return true;
 }

export function isFat(fat: Fat | Error): fat is Fat {
    return true;
 }

export function isVitamin(vitamin: Vitamin | Error): vitamin is Vitamin {
    return true;
 }

export function isMineral(mineral: Mineral | Error): mineral is Mineral {
    return true;
 }
export function isNutrient(nutrient: Nutrient | Error): nutrient is Nutrient {
    return true;
 }
