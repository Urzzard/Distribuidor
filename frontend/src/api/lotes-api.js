import axios from 'axios'

const loteapi = axios.create({
    baseURL: "http://localhost:8000/api/lotes/",
});

export const getAllLote = () => loteapi.get("/");
export const createLote = (lote) => loteapi.post("/", lote);
export const deleteLote = (id) => loteapi.delete(`${id}/`);
export const updateLote = (id, lote) => loteapi.put(`${id}/`, lote);