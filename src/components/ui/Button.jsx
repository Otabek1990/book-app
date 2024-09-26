/* eslint-disable react/prop-types */


function Button({ buttonStyles, children, handleClick }) {
    return (
        <button
            onClick={handleClick}
            className={buttonStyles + "py-2 px-3 text-base font-semibold rounded-md "}>
            {children}
        </button>
    )
}

export default Button
