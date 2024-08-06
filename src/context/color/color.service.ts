import { createContext } from "react";
import {
  CreateProductColorDto,
  ProductColorApi,
  ProductColorEntity,
} from "../../services/openapi";
import { ColDef } from "ag-grid-community";
import { config, showToast } from "../root.context";

export const CREATE_MODAL_TITLE = "Create Colour";

export const EDIT_MODAL_TITLE = "Edit Colour";

export interface ProductColourContext {
  showModal: boolean;
  title: string;
  handleNewClick: (data: CreateProductColorDto) => void;
  handleEditClick: (id: string, data: CreateProductColorDto) => void;
  selectedData: ProductColorEntity | null;
  handleCloseModal: () => void;
  showSpinner: boolean;
}

export const productColorContext = createContext<ProductColourContext | null>(null);

// Column Definitions: Defines the columns to be displayed.
export const colDefs: ColDef[] = [
  { field: "id", hide: true },
  { field: "name", checkboxSelection: true },
];

export const defaultColDef = {
  flex: 1,
};


const api: ProductColorApi = new ProductColorApi(config);



export const getAllColors = async () => {
  try {
    return (await api.productColorControllerGetAll()).data;
  } catch (e) {
    showToast("Could not reach out to backend.");
  }
};

export const createColor = async (payload: CreateProductColorDto) => {
  try {
    return (await api.productColorControllerCreate(payload)).data;
  } catch (e) {
    showToast("Could not reach out to backend.");
  }
};

export const updateColor = async (id: string, payload: CreateProductColorDto) => {
  try {
    payload.id = id;
    return (await api.productColorControllerUpdate(payload)).data;
  } catch (e) {
    showToast("Could not reach out to backend.");
  }
};

export const deleteColor = async (id: string) => {
  try {
    return (await api.productColorControllerRemove(id)).data;
  } catch (e) {
    showToast("Could not reach out to backend.");
  }
};
