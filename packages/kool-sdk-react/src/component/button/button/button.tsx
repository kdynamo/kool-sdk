import { useUnique } from 'src/hook/use-unique/use-unique'
import { ButtonProps } from './button.props'
import { useButton } from './use-button'

/**
 * Interactive button component
 */
export const Button = (props: ButtonProps) => {
  const {
    id,
    style,
    className,
    label,
    children,
    leftIcon,
    rightIcon,
    onClick,
    onFocus,
    onKeyDown,
    onBlur,
  } = useButton(props)

  return (
    <button
      id={id}
      className={className as string}
      style={style}
      onClick={onClick}
      onFocus={onFocus}
      onKeyDown={onKeyDown}
      onBlur={onBlur}
    >
      {leftIcon}
      {label ?? children}
      {rightIcon}
    </button>
  )
}
