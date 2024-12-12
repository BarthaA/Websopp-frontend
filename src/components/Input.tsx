import React from "react";
import '../styles/_base.scss'

interface Input {
    type: string;
    name: string;
    id: string;
    placeholder: string;
}

const Input: React.FC<Input> = ({ type, name, id, placeholder }) => {
    return (
        <input
            type={type}
            name={name}
            id={id}
            placeholder={placeholder}
            className="p-4 my-2 rounded-xl border-slate-500 border-2 focus:outline-none font-regular text-md"
        />
    );
};

export default Input;
