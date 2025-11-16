import { FocusEvent, FocusEventHandler, KeyboardEvent, KeyboardEventHandler, MouseEvent, MouseEventHandler, ReactNode } from "react";
import { BaseComponentProps } from "src/props/base/base.props";

/**
 * Button Kind
 */
export type ButtonKind = 'primary' | 'secondary' | 'ghost' | 'link' | 'text' | 'icon-only';

/** Button Size */
export type InputSize = 'small' | 'medium' | 'large';

/**
 * Button Properties
 */
export interface ButtonProps extends BaseComponentProps<HTMLButtonElement> {
    /**
     * Button label, can be text or ReactNode
     */
    label?: ReactNode;

    /**
     * Button kind
     */
    kind?: ButtonKind;

    /** 
     * Button size
     */ 
    size?: InputSize;

    /**
     * Icon for the left of the label
     * 
     * Two options:
     * - text, creates an element using the leftIcon text for css classes
     * - ReactNode, passed through as is
     */
    leftIcon?: ReactNode;

    /**
     * Icon for the right of the label
     * 
     * Two options:
     * - text, creates an element using the rightIcon text for css classes
     * - ReactNode, passed through as is
     */    
    rightIcon?: ReactNode;

    /**
     * Triggers when enter is pressed
     * 
     * @param e  Keyboard event
     */
    onKeyDown?: KeyboardEventHandler<HTMLButtonElement>;

    /**
     * Triggers when enter is pressed. Will also call onKeyDown if defined and the 
     * enter key is pressed
     * 
     * @param e Keyboard event
     */
    onPress?: KeyboardEventHandler<HTMLButtonElement>

    /**
     * Triggers when is clicked with the mouse
     * 
     * @param e Mouse event
     */
    onClick?: MouseEventHandler<HTMLButtonElement>;

    /**
     * Triggers when button loses focus
     * 
     * e: Focus event
     */
    onBlur?: FocusEventHandler<HTMLButtonElement>;

    /**
     * Triggers when button focuses on this button
     * 
     * e: Focus event
     */
    onFocus?: FocusEventHandler<HTMLButtonElement>;
}