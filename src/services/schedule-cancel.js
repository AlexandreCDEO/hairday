import { apiConfig } from "./api-config.js";

export async function scheduleCancel({ id }) {
    console.log(id)
    try {
        await fetch(`${apiConfig.baseURL}/schedules/${id.toString()}`, {
            method: "DELETE",
        })
        alert("Agendamento cancelado com sucesso!")
    } catch (error) {
        console.log(error)
        alert("Não foi possível cancelar o agendamento.")
    }
}