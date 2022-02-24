import { ErrorMessage, useField } from "formik";

export const JLTextInput = ({ label, ...props }) => {
    const [field] = useField(props);

    return (
        <>
            <label className="form-label" htmlFor={props.id || props.name}>
                {label}
            </label>
            <input className="form-control" {...field} {...props} />
            <ErrorMessage
                name={props.name}
                component="span"
                className="badge bg-danger"
            />
        </>
    );
};
