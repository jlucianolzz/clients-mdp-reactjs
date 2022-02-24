import moment from "moment";

export const prepareClientes = (lista) => {
    const clientes = lista.map((r) => {
        return {
            ...r,
            dFecNacimiento: moment(r.dFecNacimiento).format("DD/MM/YYYY"),
            iEdad: moment().diff(moment(r.dFecNacimiento), "years"),
        };
    });
    return { clientes };
};
