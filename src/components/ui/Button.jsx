/* eslint-disable react/prop-types */


function Button({ buttonStyles, children, handleClick, type }) {
    return (
        <button
            type={type || "submit"}
            onClick={handleClick}
            className={buttonStyles + "py-2 px-3 text-base font-semibold rounded-md "}>
            {children}
        </button>
    )
}

export default Button
