// import moment from "moment";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";

import {
    clientePageUpdated,
    clienteStartLoading,
    clienteStartResumenLoading,
} from "../actions/clientes";
import { uiOpenModal } from "../actions/ui";
import { ClienteModal } from "../components/cliente/ClienteModal";

export const ClientesPage = () => {
    const { clientes, resumen, paginacion, nuevos } = useSelector(
        (state) => state.cliente
    );
    const dispatch = useDispatch();
    const { cantidad, pagina } = paginacion;
    useEffect(() => {
        dispatch(clienteStartLoading(pagina));
    }, [dispatch, pagina]);

    useEffect(() => {
        dispatch(clienteStartResumenLoading());
    }, [dispatch, nuevos]);

    const handleNext = () => {
        dispatch(clientePageUpdated({ pagina: pagina + 1 }));
    };

    const handleClickNew = () => {
        dispatch(uiOpenModal());
    };

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="bandeja-cliente col-md-6 offset-md-3">
                        <h1 className="ml-3">Gestión de Clientes</h1>
                        <div className="message" id="message_info"></div>

                        <div className="row-50 crud">
                            <div className="content-search">
                                <button
                                    type="button"
                                    className="btn btn-outline-primary"
                                    onClick={handleClickNew}
                                >
                                    Nuevo Cliente
                                </button>
                            </div>
                        </div>
                        <hr />
                        <div className="alert alert-primary" role="alert">
                            El promedio de edades de los clientes es:
                            <b> {resumen.promedioEdad}</b> Años
                        </div>
                        <hr />
                        <div
                            id="scrollableDiv"
                            style={{ height: 300, overflow: "auto" }}
                        >
                            <InfiniteScroll
                                dataLength={cantidad * pagina}
                                next={handleNext}
                                hasMore={true}
                                loader={<h4>Loading...</h4>}
                                scrollableTarget="scrollableDiv"
                            >
                                {clientes.map((r) => (
                                    <div className="card" key={r.idCliente}>
                                        <div className="card-header">
                                            Cliente #{r.idCliente}
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                {r.vNombre} {r.vApellido}
                                            </h5>
                                            <p className="card-text">
                                                Fecha de Nacimiento:
                                                {r.dFecNacimiento}
                                            </p>
                                            <p className="card-text">
                                                Edad:
                                                {r.iEdad}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </InfiniteScroll>
                        </div>
                    </div>
                </div>
            </div>
            <ClienteModal />
        </>
    );
};
