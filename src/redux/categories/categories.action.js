import { categoriesActionTypes } from "./categories.types";
import { createAction } from "../CreateAction";

export const setCategories = (categories) =>
  createAction(categoriesActionTypes.SET_CATEGORIES, categories);
