import type { ChangeEvent, CSSProperties, ReactNode } from "react";
import type { BaseComponentProps } from "./base.props";
import type { CssConditionOrString } from "../css.props";
export type LabelLocation = 'placeholder' | 'left' | 'right' | 'top' | 'inline';
export type HelpLabelLocation = 'right' | 'bottom';
export interface BaseInputProps<V = string, T = HTMLElement> extends BaseComponentProps<T> {
    /**
     * Form value
     */
    value: V;
    /**
     * Form label
     */
    label?: ReactNode;
    /**
     * CSS classes applied to the top level of the component
     */
    labelClassName?: CssConditionOrString;
    /**
     * CSS styles applied to the top level of the component
     */
    labelStyle?: CSSProperties;
    /**
     * Label location in relation to the form element
     */
    labelLocation: LabelLocation;
    /**
     * === true, label is visible
     *
     * === false, label is not visible
     */
    labelVisible?: boolean;
    /**
     * From input
     */
    input?: ReactNode;
    /**
     * CSS classes for the form input
     */
    inputClass?: CssConditionOrString;
    /**
     * CSS styles for the form input
     */
    inputStyle?: CSSProperties;
    /**
     * === true, input is visible
     *
     * === false, input is not visible
     */
    inputVisible?: boolean;
    /**
     * help message
     */
    help?: ReactNode;
    /**
     * Css classes for the help message
     */
    helpClass?: CssConditionOrString;
    /**
     * Css styles for the help message
     */
    helpStyle?: CSSProperties;
    /**
     * === true, help message is visible
     *
     * === false, help message is not visible
     */
    helpVisible?: boolean;
    /**
     * Help label location
     */
    helpLocation?: HelpLabelLocation;
    /**
     * error message
     */
    error?: ReactNode;
    /**
     * Css classes for the error message
     */
    errorClass?: CssConditionOrString;
    /**
     * Css styles for the error message
     */
    errorStyle?: CSSProperties;
    /**
     * === true, error message is visible
     *
     * === false, error message is not visible
     */
    errorVisible?: boolean;
    /**
     * Help message location
     */
    errorLocation?: HelpLabelLocation;
    /**
     * Triggers when the input value change
     *
     * @param e change details
     */
    onChange?: (e: ChangeEvent) => void;
    /**
     * Triggers when the input value is in focus
     *
     * @param e Blur event
     */
    onBlur?: (e: FocusEvent) => void;
    /**
     * Triggers when the input value is in focus
     *
     * @param e Focus event
     */
    onFocus?: (e: FocusEvent) => void;
}
