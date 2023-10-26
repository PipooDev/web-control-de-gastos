import { useContext, useState } from "react";
import {
  fetchDataRequest,
  getDataRequest,
  deleteDataRequest,
  createDataRequest,
  updateDataRequest,
  toggleDataDoneRequest,
  loginUserRequest,
} from "../api/data.api.js";
import { DataContext } from "./DataContext.jsx";

export const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error("useData must be used within a DataContextProvider");
  }
  return context;
};

export const DataContextProvider = ({ children }) => {
  const [data, fetchData] = useState([]);

  async function loadData() {
    const response = await fetchDataRequest();
    fetchData(response.data);
  }

  async function loadDataCatalogo() {
    const response = await fetchDataCatalogoRequest();
    fetchDataCatalogo(response.data);
  }

  const deleteData = async (id) => {
    try {
      const response = await deleteDataRequest(id);
      fetchData(data.filter((data) => data.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const createData = async (data) => {
    try {
      await createDataRequest(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getData = async (id) => {
    try {
      const response = await getDataRequest(id);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const updateData = async (id, newFields) => {
    try {
      const response = await updateDataRequest(id, newFields);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const toggleDataDone = async (id) => {
    try {
      const dataFound = data.find((data) => data.id === id);
      await toggleDataDoneRequest(id, dataFound.done === 0 ? true : false);
      fetchData(
        data.map((data) =>
          data.id === id ? { ...data, done: !data.done } : data
        )
      );
    } catch (error) {
      console.error(error);
    }
  };

  const loginUser = async (body) => {
    try {
      const response = await loginUserRequest(body);
      console.log(response);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const darkMode = async () => {
    try {
      document.body.classList.toggle("dark-mode-variables");
      document
        .querySelector(".dark-mode")
        .querySelector("span:nth-child(1)")
        .classList.toggle("active");
      document
        .querySelector(".dark-mode")
        .querySelector("span:nth-child(2)")
        .classList.toggle("active");

      localStorage.setItem(
        "darkMode",
        document.body.classList.contains("dark-mode-variables")
          ? "true"
          : "false"
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <DataContext.Provider
      value={{
        data,
        loadData,
        deleteData,
        createData,
        getData,
        updateData,
        toggleDataDone,
        darkMode,
        loginUser,
        
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
