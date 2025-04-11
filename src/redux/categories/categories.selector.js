import { createSelector } from "reselect";

const selectCategories = (state) => state.categories;
console.log(selectCategories);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) => {
    console.log("within selector");
    console.log(categories);
    return categories.categories.reduce((acc, { title, items }) => {
      acc[title.toLowerCase()] = items;
      return acc;
    }, {});
  }
);

export const selectCatMap = ({ categories }) => {
  console.log(categories);
  return categories.categories.reduce((acc, { title, items }) => {
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});
};
