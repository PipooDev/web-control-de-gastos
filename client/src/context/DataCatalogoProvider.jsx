import { useContext, useState } from "react";
import {
  fetchDataCatalogoRequest,
  getDataCatalogoRequest,
  deleteDataCatalogoRequest,
  createDataCatalogoRequest,
  updateDataCatalogoRequest,
  toggleDataDoneCatalogoRequest,
  toggleSoliDeEmpleoCatRequest,
  togglePadGobCatRequest,
  toggleAcreConsCatRequest,
  toggleCVCatRequest,
  toggleCedProCatRequest,
  toggleTituloProCatRequest,
  toggleINECatRequest,
  toggleCURP2CatRequest,
  toggleActNacCatRequest,
  toggleCompDomCatRequest,
  toggleConsSATCatRequest,
  toggleNoInhabCatRequest,
  toggleAntNoPenCatRequest,
  toggleCertMedCatRequest,
  toggleCartaRecCatRequest,
  toggleCaratBancCatRequest,
  toggleFotInfCatRequest,
  toggleLicConCatRequest,
  toggleCartaRecCat2Request,
} from "../api/dataCatalogo.api.js";
import { DataCatalogoContext } from "./DataContext.jsx";

export const useDataCatalogo = () => {
  const context = useContext(DataCatalogoContext);
  if (context === undefined) {
    throw new Error("useData must be used within a DataContextProvider");
  }
  return context;
};

export const DataCatalogoContextProvider = ({ children }) => {
  const [data, fetchDataCatalogo] = useState([]);

  async function loadDataCatalogo() {
    const response = await fetchDataCatalogoRequest();
    fetchDataCatalogo(response.data);
  }

  const deleteDataCatalogo = async (id) => {
    try {
      const response = await deleteDataCatalogoRequest(id);
      fetchDataCatalogo(data.filter((data) => data.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const createDataCatalogo = async (data) => {
    try {
      await createDataCatalogoRequest(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getDataCatalogo = async (id) => {
    try {
      const response = await getDataCatalogoRequest(id);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const updateDataCatalogo = async (id, newFields) => {
    try {
      const response = await updateDataCatalogoRequest(id, newFields);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const toggleDataDoneCatalogo = async (id) => {
    try {
      const dataFound = data.find((data) => data.id === id);
      await toggleDataDoneCatalogoRequest(
        id,
        dataFound.REVISADO === 0 ? true : false
      );
      fetchDataCatalogo(
        data.map((data) =>
          data.id === id ? { ...data, REVISADO: !data.REVISADO } : data
        )
      );
    } catch (error) {
      console.error(error);
    }
  };
  const toggleSoliDeEmpleoCatalogo = async (id) => {
    try {
      const dataFound = data.find((data) => data.id === id);
      await toggleSoliDeEmpleoCatRequest(
        id,
        dataFound.SOLICITUD_DE_EMPLEO === 0 ? true : false
      );
      fetchDataCatalogo(
        data.map((data) =>
          data.id === id
            ? { ...data, SOLICITUD_DE_EMPLEO: !data.SOLICITUD_DE_EMPLEO }
            : data
        )
      );
    } catch (error) {
      console.error(error);
    }
  };
  const togglePadGobCatalogo = async (id) => {
    try {
      const dataFound = data.find((data) => data.id === id);
      await togglePadGobCatRequest(
        id,
        dataFound.PADRON_GOBIERNO_DEL_ESTADO === 0 ? true : false
      );
      fetchDataCatalogo(
        data.map((data) =>
          data.id === id
            ? {
                ...data,
                PADRON_GOBIERNO_DEL_ESTADO: !data.PADRON_GOBIERNO_DEL_ESTADO,
              }
            : data
        )
      );
    } catch (error) {
      console.error(error);
    }
  };
  const toggleCVCat = async (id) => {
    try {
      const dataFound = data.find((data) => data.id === id);
      await toggleCVCatRequest(id, dataFound.CV === 0 ? true : false);
      fetchDataCatalogo(
        data.map((data) => (data.id === id ? { ...data, CV: !data.CV } : data))
      );
    } catch (error) {
      console.error(error);
    }
  };
  const toggleAcreConsCat = async (id) => {
    try {
      const dataFound = data.find((data) => data.id === id);
      await toggleAcreConsCatRequest(
        id,
        dataFound.ACREDITACIONES_CONSTANCIAS === 0 ? true : false
      );
      fetchDataCatalogo(
        data.map((data) =>
          data.id === id
            ? {
                ...data,
                ACREDITACIONES_CONSTANCIAS: !data.ACREDITACIONES_CONSTANCIAS,
              }
            : data
        )
      );
    } catch (error) {
      console.error(error);
    }
  };
  const toggleCedProCat = async (id) => {
    try {
      const dataFound = data.find((data) => data.id === id);
      await toggleCedProCatRequest(
        id,
        dataFound.CEDULA_PROFESIONAL === 0 ? true : false
      );
      fetchDataCatalogo(
        data.map((data) =>
          data.id === id
            ? { ...data, CEDULA_PROFESIONAL: !data.CEDULA_PROFESIONAL }
            : data
        )
      );
    } catch (error) {
      console.error(error);
    }
  };
  const toggleTituloProCat = async (id) => {
    try {
      const dataFound = data.find((data) => data.id === id);
      await toggleTituloProCatRequest(
        id,
        dataFound.TITULO_PROFESIONAL === 0 ? true : false
      );
      fetchDataCatalogo(
        data.map((data) =>
          data.id === id
            ? { ...data, TITULO_PROFESIONAL: !data.TITULO_PROFESIONAL }
            : data
        )
      );
    } catch (error) {
      console.error(error);
    }
  };
  const toggleINECat = async (id) => {
    try {
      const dataFound = data.find((data) => data.id === id);
      await toggleINECatRequest(id, dataFound.INE === 0 ? true : false);
      fetchDataCatalogo(
        data.map((data) =>
          data.id === id ? { ...data, INE: !data.INE } : data
        )
      );
    } catch (error) {
      console.error(error);
    }
  };
  const toggleCURP2Cat = async (id) => {
    try {
      const dataFound = data.find((data) => data.id === id);
      await toggleCURP2CatRequest(id, dataFound.CURP2 === 0 ? true : false);
      fetchDataCatalogo(
        data.map((data) =>
          data.id === id ? { ...data, CURP2: !data.CURP2 } : data
        )
      );
    } catch (error) {
      console.error(error);
    }
  };
  const toggleActNacCat = async (id) => {
    try {
      const dataFound = data.find((data) => data.id === id);
      await toggleActNacCatRequest(
        id,
        dataFound.ACTA_DE_NACIMIENTO === 0 ? true : false
      );
      fetchDataCatalogo(
        data.map((data) =>
          data.id === id
            ? { ...data, ACTA_DE_NACIMIENTO: !data.ACTA_DE_NACIMIENTO }
            : data
        )
      );
    } catch (error) {
      console.error(error);
    }
  };
  const toggleCompDomCat = async (id) => {
    try {
      const dataFound = data.find((data) => data.id === id);
      await toggleCompDomCatRequest(
        id,
        dataFound.COMPROBANTE_DE_DOMICILIO === 0 ? true : false
      );
      fetchDataCatalogo(
        data.map((data) =>
          data.id === id
            ? {
                ...data,
                COMPROBANTE_DE_DOMICILIO: !data.COMPROBANTE_DE_DOMICILIO,
              }
            : data
        )
      );
    } catch (error) {
      console.error(error);
    }
  };
  const toggleConsSATCat = async (id) => {
    try {
      const dataFound = data.find((data) => data.id === id);
      await toggleConsSATCatRequest(
        id,
        dataFound.CONSTANCIA_DEL_SAT === 0 ? true : false
      );
      fetchDataCatalogo(
        data.map((data) =>
          data.id === id
            ? { ...data, CONSTANCIA_DEL_SAT: !data.CONSTANCIA_DEL_SAT }
            : data
        )
      );
    } catch (error) {
      console.error(error);
    }
  };

  const toggleNoInhabCat = async (id) => {
    try {
      const dataFound = data.find((data) => data.id === id);
      await toggleNoInhabCatRequest(
        id,
        dataFound.NO_INHABILITADO === 0 ? true : false
      );
      fetchDataCatalogo(
        data.map((data) =>
          data.id === id
            ? { ...data, NO_INHABILITADO: !data.NO_INHABILITADO }
            : data
        )
      );
    } catch (error) {
      console.error(error);
    }
  };

  const toggleAntNoPenCat = async (id) => {
    try {
      const dataFound = data.find((data) => data.id === id);
      await toggleAntNoPenCatRequest(
        id,
        dataFound.ANTECEDENTES_NO_PENALES === 0 ? true : false
      );
      fetchDataCatalogo(
        data.map((data) =>
          data.id === id
            ? {
                ...data,
                ANTECEDENTES_NO_PENALES: !data.ANTECEDENTES_NO_PENALES,
              }
            : data
        )
      );
    } catch (error) {
      console.error(error);
    }
  };
  const toggleCertMedCat = async (id) => {
    try {
      const dataFound = data.find((data) => data.id === id);
      await toggleCertMedCatRequest(
        id,
        dataFound.CERTIFICADO_MEDICO === 0 ? true : false
      );
      fetchDataCatalogo(
        data.map((data) =>
          data.id === id
            ? { ...data, CERTIFICADO_MEDICO: !data.CERTIFICADO_MEDICO }
            : data
        )
      );
    } catch (error) {
      console.error(error);
    }
  };
  const toggleCartaRecCat = async (id) => {
    try {
      const dataFound = data.find((data) => data.id === id);
      await toggleCartaRecCatRequest(
        id,
        dataFound.CARTA_DE_RECOMENDACION === 0 ? true : false
      );
      fetchDataCatalogo(
        data.map((data) =>
          data.id === id
            ? { ...data, CARTA_DE_RECOMENDACION: !data.CARTA_DE_RECOMENDACION }
            : data
        )
      );
    } catch (error) {
      console.error(error);
    }
  };
  const toggleCartaRecCat2 = async (id) => {
    try {
      const dataFound = data.find((data) => data.id === id);
      await toggleCartaRecCat2Request(
        id,
        dataFound.CARTA_DE_RECOMENDACION2 === 0 ? true : false
      );
      fetchDataCatalogo(
        data.map((data) =>
          data.id === id
            ? {
                ...data,
                CARTA_DE_RECOMENDACION2: !data.CARTA_DE_RECOMENDACION2,
              }
            : data
        )
      );
    } catch (error) {
      console.error(error);
    }
  };
  const toggleCaratBancCat = async (id) => {
    try {
      const dataFound = data.find((data) => data.id === id);
      await toggleCaratBancCatRequest(
        id,
        dataFound.CARATULA_BANCARIO === 0 ? true : false
      );
      fetchDataCatalogo(
        data.map((data) =>
          data.id === id
            ? { ...data, CARATULA_BANCARIO: !data.CARATULA_BANCARIO }
            : data
        )
      );
    } catch (error) {
      console.error(error);
    }
  };
  const toggleFotInfCat = async (id) => {
    try {
      const dataFound = data.find((data) => data.id === id);
      await toggleFotInfCatRequest(
        id,
        dataFound.FOTOGRAFIA_TAMAÑO_INFANTIL === 0 ? true : false
      );
      fetchDataCatalogo(
        data.map((data) =>
          data.id === id
            ? { ...data, FOTOGRAFIA_TAMAÑO_INFANTIL: !data.FOTOGRAFIA_TAMAÑO_INFANTIL }
            : data
        )
      );
    } catch (error) {
      console.error(error);
    }
  }
  const toggleLicConCat = async(id) => {
    try {
      const dataFound = data.find((data) => data.id === id);
      await toggleLicConCatRequest(
        id,
        dataFound.LICENCIA_PARA_CONDUCIR === 0 ? true : false
      );
      fetchDataCatalogo(
        data.map((data) =>
          data.id === id
            ? { ...data, LICENCIA_PARA_CONDUCIR: !data.LICENCIA_PARA_CONDUCIR }
            : data
        )
      );
    } catch (error) {
      console.error(error);
    }

  }

  return (
    <DataCatalogoContext.Provider
      value={{
        data,
        loadDataCatalogo,
        deleteDataCatalogo,
        createDataCatalogo,
        getDataCatalogo,
        updateDataCatalogo,
        toggleDataDoneCatalogo,
        toggleSoliDeEmpleoCatalogo,
        togglePadGobCatalogo,
        toggleCVCat,
        toggleAcreConsCat,
        toggleCedProCat,
        toggleTituloProCat,
        toggleINECat,
        toggleCURP2Cat,
        toggleActNacCat,
        toggleCompDomCat,
        toggleConsSATCat,
        toggleNoInhabCat,
        toggleAntNoPenCat,
        toggleCertMedCat,
        toggleCartaRecCat,
        toggleCartaRecCat2,
        toggleCaratBancCat,
        toggleFotInfCat,
        toggleLicConCat,
      }}
    >
      {children}
    </DataCatalogoContext.Provider>
  );
};
