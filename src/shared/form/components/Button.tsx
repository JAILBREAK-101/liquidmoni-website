export interface ButtonInterface{
    loading: boolean;
    disabled: boolean;
    classes: string;
    type?: "button" | "submit" | "reset";
    onClick: any;
    body: string;
    size?: string;
}

export const Button = ({loading, body, size, onClick, classes, disabled, type}: ButtonInterface):JSX.Element => {

    // const btnClasses = () => {
    //     const 
    // }

    return (
        <button 
        name="General Purpose button"
        // className='{classes()}'
        className=''
        type={type ?? "button"}
        disabled = {disabled || loading}
        onClick={onClick ?? (() => {'no action'})}
        >
            {body}
        </button> // add formik attributes
    )
}