
import { forwardRef } from "react";

const Button = forwardRef(function Button({buttonName, className, children, onClick}, ref){
    return(
        <button ref={ref} onClick={onClick} className={className} style={{fontWeight:500}}>
            {buttonName}
            {children}
        </button>
    )
});

export default Button;