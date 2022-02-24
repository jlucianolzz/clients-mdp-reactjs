import Modal from "react-modal/lib/components/Modal";
import moment from "moment";
// import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";

import { uiCloseModal } from "../../actions/ui";
import { clienteStartAddNew } from "../../actions/clientes";
import { JLTextInput } from "../form";

import { Form, Formik } from "formik";
import * as Yup from "yup";

Modal.setAppElement("#root");

const initCliente = {
    vNombre: "",
    vApellido: "",
    dFecNacimiento: moment().format("YYYY-MM-DD"),
};
export const ClienteModal = () => {
    const dispatch = useDispatch();
    const { modalOpen } = useSelector((state) => state.ui);

    const closeModal = () => {
        dispatch(uiCloseModal());
    };

    return (
        <Modal
            isOpen={modalOpen}
            // onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            closeTimeoutMS={200}
            className={`modal ${modalOpen && "show"}`}
            overlayClassName="modal-fondo"
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-titulo">
                            Nuevo <strong>Cliente</strong>
                        </h5>
                        <button
                            type="button"
                            className="btn-close cerrar"
                            onClick={closeModal}
                        ></button>
                    </div>

                    <Formik
                        initialValues={initCliente}
                        onSubmit={(values) => {
                            // const { dFecNacimiento } = values;
                            // const momentNacimiento = moment(dFecNacimiento);
                            // if (momentStart.isSameOrAfter(momentEnd))
                            //     return Swal.fire(
                            //         "Error",
                            //         "La fecha de inicio debe ser menor a la fecha de fin",
                            //         "error"
                            //     );
                            dispatch(clienteStartAddNew(values));
                            closeModal();
                        }}
                        validationSchema={Yup.object({
                            vNombre: Yup.string()
                                .max(50, "Debe de tener menos de 50 caracteres")
                                .required("Requerido"),
                            vApellido: Yup.string()
                                .max(50, "Debe de tener menos de 50 caracteres")
                                .required("Requerido"),
                            dFecNacimiento: Yup.string().required("Requerido"),
                        })}
                    >
                        {(formik) => {
                            return (
                                <Form>
                                    <div className="modal-body">
                                        <div className="row">
                                            <div className="col col-6">
                                                <JLTextInput
                                                    label="Nombre"
                                                    name="vNombre"
                                                />
                                            </div>
                                            <div className="col col-6">
                                                <JLTextInput
                                                    label="Apellido"
                                                    name="vApellido"
                                                />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col col-12">
                                                <JLTextInput
                                                    label="Fecha de nacimiento"
                                                    name="dFecNacimiento"
                                                    type="date"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button
                                            type="button"
                                            className="btn btn-light"
                                            onClick={closeModal}
                                        >
                                            Cerrar
                                        </button>

                                        <button
                                            type="submit"
                                            className="btn btn-outline-primary"
                                        >
                                            Guardar
                                        </button>
                                    </div>
                                </Form>
                            );
                        }}
                    </Formik>
                </div>
            </div>
        </Modal>
    );
};
