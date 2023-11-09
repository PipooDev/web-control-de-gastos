import axios from 'axios';

export const fetchDataIngresosRequest = async (data) =>
    await axios.get('http://localhost:4000/dataIngresos');

export const getDataIngresosRequest = async (NumProg) =>
    await axios.get(`http://localhost:4000/dataIngresos/${NumProg}`);

export const createDataIngresosRequest = async (data) =>
    await axios.post('http://localhost:4000/dataIngresos', data);

export const updateDataIngresosRequest = async (NumProg, newFields) =>
    await axios.put(`http://localhost:4000/dataIngresos/${NumProg}`, newFields);

export const deleteDataIngresosRequest = async (NumProg) =>
    await axios.delete(`http://localhost:4000/dataIngresos/${NumProg}`);

export const toggleDataDoneIngresosRequest = async (NumProg, REVISADO) =>
    await axios.put(`http://localhost:4000/dataIngresos/${NumProg}`, {
        REVISADO,
    });
