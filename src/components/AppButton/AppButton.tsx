type ButtonPropsTypes = {
    buttonText: string,
    type: "submit" | "reset" | "button"
}

export const AppButton = ({buttonText, type}: ButtonPropsTypes) => {
    return(
        <button type={type}>{buttonText}</button>
    )
}