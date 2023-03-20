import { classNames, Mods } from "shared/lib/classNames/classNames"
import { ButtonHTMLAttributes, memo, ReactNode } from "react"
import styles from "./Button.module.scss"

export enum ButtonVariant {
    OUTLINE = "outline",
    FILLED_RED = "filled-red",
    FILLED_GREY = "filled-grey"
}

export enum ButtonSize {
    SMALL = "small",
    LARGE = "large"
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    variant?: ButtonVariant
    size?: ButtonSize
    disabled?: boolean
    children?: ReactNode
}

export const Button = memo((props: ButtonProps) => {
    const {
        className,
        variant = ButtonVariant.OUTLINE,
        size = ButtonSize.LARGE,
        disabled,
        children,
        ...restProps
    } = props

    const mods: Mods = {
        [styles[variant]]: true,
        [styles[size]]: true,
        [styles.disabled]: disabled,
    }

    return (
        <button
            type="button"
            className={classNames(styles.button, mods, [className])}
            disabled={disabled}
            {...restProps}
        >
            {children}
        </button>
    )
})
