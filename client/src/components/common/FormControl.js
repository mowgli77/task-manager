import React from "react";

export const Textarea = ({input, meta: {touched, error, warning}, label, ...props}) => {
    return <div>
        <div className={"form-group"}>
            <textarea className={"form-control"} placeholder={label} {...input} {...props} />
            {touched &&
            ((error && <span style={{color: 'red'}}>{error}</span>) ||
                (warning && <span style={{color: 'red'}}>{warning}</span>))}
        </div>
    </div>
}

export const Input = ({input, label, meta: {touched, error, warning}, ...props}) => {
    return <div>
        <div className={"form-group"}>
            <input className={"form-control"} placeholder={label} {...input} {...props} />{props.text}
            {touched &&
            ((error && <span style={{color: 'red'}}>{error}</span>) ||
                (warning && <span style={{color: 'red'}}>{warning}</span>))}
        </div>
    </div>
}
