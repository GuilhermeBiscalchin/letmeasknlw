import { ButtonHTMLAttributes } from "react"

import '../style/button.css'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    isOutlined?: boolean
}

export function Button({ isOutlined = false, ...props }: ButtonProps) {
    return (
        <button className={`buttonComp ${isOutlined ? 'outlined' : ''}`}
            {...props} />
    )
}