import axios from 'axios';

export const fetchDataCatalogoRequest = async (data) =>
    await axios.get('http://localhost:4000/dataCatalogo');

export const getDataCatalogoRequest = async (id) =>
    await axios.get(`http://localhost:4000/dataCatalogo/${id}`);

export const createDataCatalogoRequest = async (data) =>
    await axios.post('http://localhost:4000/dataCatalogo', data);

export const updateDataCatalogoRequest = async (id, newFields) =>
    await axios.put(`http://localhost:4000/dataCatalogo/${id}`, newFields);

export const deleteDataCatalogoRequest = async (id) =>
    await axios.delete(`http://localhost:4000/dataCatalogo/${id}`);

export const toggleDataDoneCatalogoRequest = async (id, REVISADO) =>
    await axios.put(`http://localhost:4000/dataCatalogo/${id}`, {
        REVISADO,
    });

export const toggleSoliDeEmpleoCatRequest = async (id, SOLICITUD_DE_EMPLEO) =>
    await axios.put(`http://localhost:4000/dataCatalogo/${id}`, {
        SOLICITUD_DE_EMPLEO,
    });

export const togglePadGobCatRequest = async (id, PADRON_GOBIERNO_DEL_ESTADO) =>
    await axios.put(`http://localhost:4000/dataCatalogo/${id}`, {
        PADRON_GOBIERNO_DEL_ESTADO,
    });

export const toggleCVCatRequest = async (id, CV) =>
    await axios.put(`http://localhost:4000/dataCatalogo/${id}`, {
        CV,
    });

export const toggleAcreConsCatRequest = async (id, ACREDITACIONES_CONSTANCIAS) =>
    await axios.put(`http://localhost:4000/dataCatalogo/${id}`, {
        ACREDITACIONES_CONSTANCIAS,
    });
export const toggleCedProCatRequest = async (id, CEDULA_PROFESIONAL) =>
    await axios.put(`http://localhost:4000/dataCatalogo/${id}`, {
        CEDULA_PROFESIONAL,
    });
export const toggleTituloProCatRequest = async (id, TITULO_PROFESIONAL) =>
    await axios.put(`http://localhost:4000/dataCatalogo/${id}`, {
        TITULO_PROFESIONAL,
    });
export const toggleINECatRequest = async (id, INE) =>
    await axios.put(`http://localhost:4000/dataCatalogo/${id}`, {
        INE,
    });
export const toggleCURP2CatRequest = async (id, CURP2) =>
    await axios.put(`http://localhost:4000/dataCatalogo/${id}`, {
        CURP2,
    });
export const toggleActNacCatRequest = async (id, ACTA_DE_NACIMIENTO) =>
    await axios.put(`http://localhost:4000/dataCatalogo/${id}`, {
        ACTA_DE_NACIMIENTO,
    });
export const toggleCompDomCatRequest = async (id, COMPROBANTE_DE_DOMICILIO) =>
    await axios.put(`http://localhost:4000/dataCatalogo/${id}`, {
        COMPROBANTE_DE_DOMICILIO,
    });
export const toggleConsSATCatRequest = async (id, CONSTANCIA_DEL_SAT) =>
    await axios.put(`http://localhost:4000/dataCatalogo/${id}`, {
        CONSTANCIA_DEL_SAT,
    });
export const toggleNoInhabCatRequest = async (id, NO_INHABILITADO) =>
    await axios.put(`http://localhost:4000/dataCatalogo/${id}`, {
        NO_INHABILITADO,
    });
export const toggleAntNoPenCatRequest = async (id, ANTECEDENTES_NO_PENALES) =>
    await axios.put(`http://localhost:4000/dataCatalogo/${id}`, {
        ANTECEDENTES_NO_PENALES,
    });
export const toggleCertMedCatRequest = async (id, CERTIFICADO_MEDICO) =>
    await axios.put(`http://localhost:4000/dataCatalogo/${id}`, {
        CERTIFICADO_MEDICO,
    });
export const toggleCartaRecCatRequest = async (id, CARTA_DE_RECOMENDACION) =>
    await axios.put(`http://localhost:4000/dataCatalogo/${id}`, {
        CARTA_DE_RECOMENDACION,
    });
export const toggleCartaRecCat2Request = async (id, CARTA_DE_RECOMENDACION2) =>
    await axios.put(`http://localhost:4000/dataCatalogo/${id}`, {
        CARTA_DE_RECOMENDACION2,
    });
export const toggleCaratBancCatRequest = async (id, CARATULA_BANCARIO) =>
    await axios.put(`http://localhost:4000/dataCatalogo/${id}`, {
        CARATULA_BANCARIO,
    });
export const toggleFotInfCatRequest = async (id, FOTOGRAFIA_TAMAÑO_INFANTIL) =>
    await axios.put(`http://localhost:4000/dataCatalogo/${id}`, {
        FOTOGRAFIA_TAMAÑO_INFANTIL,
    });
export const toggleLicConCatRequest = async (id, LICENCIA_PARA_CONDUCIR) =>
    await axios.put(`http://localhost:4000/dataCatalogo/${id}`, {
        LICENCIA_PARA_CONDUCIR,
    });