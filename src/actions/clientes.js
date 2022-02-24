import moment from "moment";
import Swal from "sweetalert2";
import { fetchSinToken } from "../helpers/fetch";
import { prepareClientes } from "../helpers/prepareClientes";
import { types } from "../types/types";

export const clienteStartAddNew = (cliente) => {
    return async (dispatch) => {
        try {
            const resp = await fetchSinToken(
                "clientes",
                {
                    ...cliente,
                    dFecInicio: moment(cliente.dFecInicio).format("YYYY-MM-DD"),
                },
                "POST"
            );
            const { data, message } = await resp.json();

            if (message.iCod === 200) {
                const format = prepareClientes([{ ...data.cliente }]);
                dispatch(clienteAddNew(format.clientes[0]));
            } else Swal.fire("Error", message.vDesc, "error");
        } catch (error) {
            console.log(error);
        }
    };
};
const clienteAddNew = (cliente) => ({
    type: types.clienteAddNew,
    payload: cliente,
});

export const clienteStartLoading = (pagina) => {
    return async (dispatch, getState) => {
        try {
            const { paginacion } = getState().cliente;
            const params = {
                cantidad: paginacion.cantidad,
                pagina,
            };
            const resp = await fetchSinToken(
                `clientes?${new URLSearchParams(params).toString()}`
            );
            const { data, message } = await resp.json();
            const { clientes } = prepareClientes(data.clientes || []);

            if (message.iCod === 200) dispatch(clienteLoaded({ clientes }));
            else Swal.fire("Error", message.vDesc, "error");
        } catch (error) {
            console.log(error);
        }
    };
};
const clienteLoaded = (payload) => ({
    type: types.clienteLoaded,
    payload,
});

export const clienteStartResumenLoading = () => {
    return async (dispatch) => {
        try {
            const resp = await fetchSinToken("clientes/promedioEdad");
            const { data, message } = await resp.json();
            if (message.iCod === 200)
                dispatch(
                    clienteResumenLoaded({
                        promedioEdad: data?.resumen?.promedio,
                    })
                );
            else Swal.fire("Error", message.vDesc, "error");
        } catch (error) {
            console.log(error);
        }
    };
};
const clienteResumenLoaded = (payload) => ({
    type: types.clienteResumenLoaded,
    payload,
});

export const clientePageUpdated = (paginacion) => ({
    type: types.clientePageUpdated,
    payload: paginacion,
});
