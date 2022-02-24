import { types } from "../types/types";

const initialState = {
    clientes: [],
    nuevos: [],
    resumen: { promedioEdad: 0 },
    paginacion: {
        pagina: 1,
        cantidad: 2,
    },
};

export const clienteReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case types.clienteLoaded:
            return {
                ...state,
                clientes: [...state.clientes, ...payload.clientes],
            };

        case types.clienteAddNew:
            return {
                ...state,
                clientes: [payload, ...state.clientes],
                nuevos: [payload, ...state.nuevos],
            };

        case types.clientePageUpdated:
            return {
                ...state,
                paginacion: { ...state.paginacion, ...payload },
            };
        case types.clienteResumenLoaded:
            return {
                ...state,
                resumen: { ...state.resumen, ...payload },
            };
        default:
            return state;
    }
};
