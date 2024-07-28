import { createContext } from "react";
import {
  CategoryApi,
  CategoryEntity,
  Configuration,
  CreateSubcategoryDto,
  SubcategoryApi,
  SubcategoryEntity,
} from "../../services/openapi";
import { ColDef } from "ag-grid-community";

export interface SubCategoryContext {
  showModal: boolean;
  title: string;
  handleNewClick: (data: CreateSubcategoryDto) => void;
  handleEditClick: (id: string, data: CreateSubcategoryDto) => void;
  selectedData: SubcategoryEntity | null;
  handleCloseModal: () => void;
  selectedCategory: string | null;
  categories: CategoryEntity[];
  handleSearch: (categoryId: string) => void;
}

export const subCategoryContext = createContext<SubCategoryContext | null>(
  null
);

// Column Definitions: Defines the columns to be displayed.
export const colDefs: ColDef[] = [
  { field: "id", hide: true },
  { field: "name", checkboxSelection: true },
  { field: "description" },
  { field: "isActive" },
];

export const defaultColDef = {
  flex: 1,
};

const config: Configuration = new Configuration();
config.basePath = "http://localhost:3001";
export const subCategoryApi: SubcategoryApi = new SubcategoryApi(config);

export const getSubCategoriesByCategory = async (categoryId: string) => {
  try {
    return (
      await subCategoryApi.subcategoryControllerFindAllByCategory(categoryId)
    ).data;
  } catch (ex) {
    console.error(`error occurred ${ex}`);
  }
};

export const getAllSubCategories = async () => {
  try {
    return (
      await subCategoryApi.subcategoryControllerFindAll()
    ).data;
  } catch (ex) {
    console.error(`error occurred ${ex}`);
  }
};
