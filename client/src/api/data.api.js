import axios from 'axios';

export const fetchDataRequest = async (data) =>
    await axios.get('https://api-palacio.onrender.com/data');

export const getDataRequest = async (id) =>
    await axios.get(`https://api-palacio.onrender.com/data/${id}`);

export const createDataRequest = async (data) =>
    await axios.post('https://api-palacio.onrender.com/data', data);

export const updateDataRequest = async (id, newFields) =>
    await axios.put(`https://api-palacio.onrender.com/data/${id}`, newFields);

export const deleteDataRequest = async (id) =>
    await axios.delete(`https://api-palacio.onrender.com/data/${id}`);

export const toggleDataDoneRequest = async (id, done) =>
    await axios.put(`https://api-palacio.onrender.com/data/${id}`, {
        done,
    });

export const loginUserRequest = async (body) =>
    await axios.post('https://api-palacio.onrender.com/login', body);