import { StateSchema } from "app/providers/StoreProvider"

export const getSubCategoryId = (state: StateSchema) => state.subcategoryPage.id
export const getSubCategoryName = (state: StateSchema) => state.subcategoryPage.name
export const getSubCategoryError = (state: StateSchema) => state.subcategoryPage.error
export const getSubCategoryLoading = (state: StateSchema) => state.subcategoryPage.isLoading
export const getSubCategoryProducts = (state: StateSchema) => state.subcategoryPage.products