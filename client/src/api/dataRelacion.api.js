import axios from 'axios';

export const fetchDataRelacionRequest = async (data) =>
    await axios.get('https://api-palacio.onrender.com/dataRelacion');

export const getDataRelacionRequest = async (id) =>
    await axios.get(`https://api-palacio.onrender.com/dataRelacion/${id}`);

export const createDataRelacionRequest = async (data) =>
    await axios.post('https://api-palacio.onrender.com/dataRelacion', data);

export const updateDataRelacionRequest = async (id, newFields) =>
    await axios.put(`https://api-palacio.onrender.com/dataRelacion/${id}`, newFields);

export const deleteDataRelacionRequest = async (id) =>
    await axios.delete(`https://api-palacio.onrender.com/dataRelacion/${id}`);

export const toggleDataDoneRelacionRequest = async (id, REVISADO) =>
    await axios.put(`https://api-palacio.onrender.com/dataRelacion/${id}`, {
        REVISADO,
    });
