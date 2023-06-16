import {useField} from "formik";

export const TextInput = ({label, ...props}): JSX.Element => {
    
    const [field, meta] = useField(props);
    
    return (
        <div className="form">
            <label className={props.className} htmlFor={props.id}>{label}</label>

            <input {...field} {...props} />
            {meta.touched && meta.error? (
                <div className="">{meta.error}</div>
            ) : null}
        </div>
    );

}