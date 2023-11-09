import { useContext, useState } from "react";
import {
  fetchDataRelacionRequest,
  getDataRelacionRequest,
  deleteDataRelacionRequest,
  createDataRelacionRequest,
  updateDataRelacionRequest,
  toggleDataDoneRelacionRequest,
} from "../api/dataRelacion.api.js";
import { DataRelacionContext } from "./DataContext.jsx";

export const useDataRelacion = () => {
  const context = useContext(DataRelacionContext);
  if (context === undefined) {
    throw new Error("useData must be used within a DataContextProvider");
  }
  return context;
};

export const DataRelacionContextProvider = ({ children }) => {
  const [data, fetchDataRelacion] = useState([]);

  async function loadDataRelacion() {
    const response = await fetchDataRelacionRequest();
    fetchDataRelacion(response.data);
  }

  const deleteDataRelacion = async (id) => {
    try {
      const response = await deleteDataRelacionRequest(id);
      fetchDataRelacion(data.filter((data) => data.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const createDataRelacion= async (data) => {
    try {
      await createDataRelacionRequest(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getDataRelacion = async (id) => {
    try {
      const response = await getDataRelacionRequest(id);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const updateDataRelacion = async (id, newFields) => {
    try {
      const response = await updateDataRelacionRequest(id, newFields);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const toggleDataDoneRelacion = async (id) => {
    try {
      const dataFound = data.find((data) => data.id === id);
      await toggleDataDoneRelacionRequest(
        id,
        dataFound.REVISADO === 0 ? true : false
      );
      fetchDataRelacion(
        data.map((data) =>
          data.id === id ? { ...data, REVISADO: !data.REVISADO } : data
        )
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <DataRelacionContext.Provider
      value={{
        data,
        loadDataRelacion,
        deleteDataRelacion,
        createDataRelacion,
        getDataRelacion,
        updateDataRelacion,
        toggleDataDoneRelacion,
      }}
    >
      {children}
    </DataRelacionContext.Provider>
  );
};
