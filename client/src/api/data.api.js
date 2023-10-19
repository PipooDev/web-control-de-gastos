import axios from 'axios';

export const fetchDataRequest = async (data) =>
    await axios.get('http://localhost:4000/data');

export const getDataRequest = async (id) =>
    await axios.get(`http://localhost:4000/data/${id}`);

export const createDataRequest = async (data) =>
    await axios.post('http://localhost:4000/data', data);

export const updateDataRequest = async (id, newFields) =>
    await axios.put(`http://localhost:4000/data/${id}`, newFields);

export const deleteDataRequest = async (id) =>
    await axios.delete(`http://localhost:4000/data/${id}`);

export const toggleDataDoneRequest = async (id, done) =>
    await axios.put(`http://localhost:4000/data/${id}`, {
        done,
    });

export const loginUserRequest = async (body) =>
    await axios.post('http://localhost:4000/login', body);