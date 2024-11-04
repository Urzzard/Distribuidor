import axios from 'axios'

const invapi = axios.create({
    baseURL: "http://localhost:8000/api/productos/",
});

export const getAllInv = () => invapi.get("/");
export const createInv = (inv) => invapi.post("/", inv);
export const deleteInv = (id) => invapi.delete(`${id}/`);
export const updateInv = (id, inv) => invapi.put(`${id}/`, inv);