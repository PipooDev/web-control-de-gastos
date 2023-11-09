import { useContext, useState } from "react";
import {
  fetchDataIngresosRequest,
  getDataIngresosRequest,
  deleteDataIngresosRequest,
  createDataIngresosRequest,
  updateDataIngresosRequest,
  toggleDataDoneIngresosRequest,
} from "../api/dataIngresos.api.js";
import { DataIngresosContext } from "./DataContext.jsx";

export const useDataIngresos = () => {
  const context = useContext(DataIngresosContext);
  if (context === undefined) {
    throw new Error("useData must be used within a DataContextProvider");
  }
  return context;
};

export const DataIngresosContextProvider = ({ children }) => {
  const [data, fetchDataIngresos] = useState([]);

  async function loadDataIngresos() {
    const response = await fetchDataIngresosRequest();
    fetchDataIngresos(response.data);
  }

  const deleteDataIngresos = async (NumProg) => {
    try {
      const response = await deleteDataIngresosRequest(NumProg);
      fetchDataIngresos(data.filter((data) => data.NumProg !== NumProg));
    } catch (error) {
      console.error(error);
    }
  };

  const createDataIngresos = async (data) => {
    try {
      await createDataIngresosRequest(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getDataIngresos = async (NumProg) => {
    try {
      const response = await getDataIngresosRequest(NumProg);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const updateDataIngresos = async (NumProg, newFields) => {
    try {
      const response = await updateDataIngresosRequest(NumProg, newFields);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const toggleDataDoneIngresos = async (NumProg) => {
    try {
      const dataFound = data.find((data) => data.NumProg === NumProg);
      await toggleDataDoneIngresosRequest(
        NumProg,
        dataFound.REVISADO === 0 ? true : false
      );
      fetchDataIngresos(
        data.map((data) =>
          data.NumProg === NumProg ? { ...data, REVISADO: !data.REVISADO } : data
        )
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <DataIngresosContext.Provider
      value={{
        data,
        loadDataIngresos,
        deleteDataIngresos,
        createDataIngresos,
        getDataIngresos,
        updateDataIngresos,
        toggleDataDoneIngresos,
      }}
    >
      {children}
    </DataIngresosContext.Provider>
  );
};
