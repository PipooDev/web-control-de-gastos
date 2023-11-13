import axios from 'axios';

export const fetchDataIngresosRequest = async (data) =>
    await axios.get('https://api-palacio.onrender.com/dataIngresos');

export const getDataIngresosRequest = async (NumProg) =>
    await axios.get(`https://api-palacio.onrender.com/dataIngresos/${NumProg}`);

export const createDataIngresosRequest = async (data) =>
    await axios.post('https://api-palacio.onrender.com/dataIngresos', data);

export const updateDataIngresosRequest = async (NumProg, newFields) =>
    await axios.put(`https://api-palacio.onrender.com/dataIngresos/${NumProg}`, newFields);

export const deleteDataIngresosRequest = async (NumProg) =>
    await axios.delete(`https://api-palacio.onrender.com/dataIngresos/${NumProg}`);

export const toggleDataDoneIngresosRequest = async (NumProg, REVISADO) =>
    await axios.put(`https://api-palacio.onrender.com/dataIngresos/${NumProg}`, {
        REVISADO,
    });
