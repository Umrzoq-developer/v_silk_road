import React from 'react'

const Button = ({text, handleClick}: IProps) => {
    return (
        <div>
            <button onClick={handleClick}>{text}</button>
        </div>
    )
}

interface IProps {
    text: string;
    handleClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default Button
