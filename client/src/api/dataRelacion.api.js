import axios from 'axios';

export const fetchDataRelacionRequest = async (data) =>
    await axios.get('http://localhost:4000/dataRelacion');

export const getDataRelacionRequest = async (id) =>
    await axios.get(`http://localhost:4000/dataRelacion/${id}`);

export const createDataRelacionRequest = async (data) =>
    await axios.post('http://localhost:4000/dataRelacion', data);

export const updateDataRelacionRequest = async (id, newFields) =>
    await axios.put(`http://localhost:4000/dataRelacion/${id}`, newFields);

export const deleteDataRelacionRequest = async (id) =>
    await axios.delete(`http://localhost:4000/dataRelacion/${id}`);

export const toggleDataDoneRelacionRequest = async (id, REVISADO) =>
    await axios.put(`http://localhost:4000/dataRelacion/${id}`, {
        REVISADO,
    });
