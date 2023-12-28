import s from './Button.module.css'

type Props = {
    onClick?: () => void
    isPressed?: boolean
}

export const Button = (props: Props) => {
    const {onClick, isPressed} = props

    const buttonClass = isPressed ? s.success : ''

    return (
        <div className={`${s.button} ${buttonClass}`} onClick={onClick}>
            БАБЛО
        </div>
    )
}
