interface IButtonProps {
    text: string
    onClick?: () => void;
}

export const Button = ({ text, onClick }: IButtonProps) => {
    return <button onClick={onClick} >{text}</button>
}