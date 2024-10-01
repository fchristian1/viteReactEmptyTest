import React from "react";

function Button({ type, onClick, active, children }) {
    return (
        <button type={type} onClick={onClick} active={active}>
            {children}
        </button>
    );
}

export default Button;
