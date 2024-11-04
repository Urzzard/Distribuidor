import axios from 'axios'

const moveapi = axios.create({
    baseURL: "http://localhost:8000/api/movimientos/",
});

export const getAllMove = () => moveapi.get("/");
export const createMove = (mov) => moveapi.post("/", mov);
export const deleteMove = (id) => moveapi.delete(`${id}/`);
export const updateMove = (id, lote) => moveapi.put(`${id}/`, mov);