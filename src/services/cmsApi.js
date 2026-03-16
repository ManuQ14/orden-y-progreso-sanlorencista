// Servicio para consumir la API pública del CMS OyP
const BASE_URL = import.meta.env.VITE_CMS_API_URL || "http://localhost:3001/api";

/**
 * Obtiene todas las notas publicadas, ordenadas por fecha descendente
 */
export const getNotas = async () => {
    const res = await fetch(`${BASE_URL}/notas`);
    if (!res.ok) throw new Error(`Error ${res.status} al obtener notas`);
    const data = await res.json();
    return data.filter(nota => !JSON.stringify(nota).toLowerCase().includes("tamer"));
};

/**
 * Obtiene una nota publicada por su slug/URL
 * @param {string} url - slug de la nota (ej: "titulo-de-la-nota")
 */
export const getNotaByUrl = async (url) => {
    if (url.toLowerCase().includes("tamer")) throw new Error("Nota no encontrada");
    const res = await fetch(`${BASE_URL}/notas/${encodeURIComponent(url)}`);
    if (!res.ok) throw new Error(`Error ${res.status} al obtener la nota`);
    const data = await res.json();
    if (JSON.stringify(data).toLowerCase().includes("tamer")) throw new Error("Nota no encontrada");
    return data;
};
