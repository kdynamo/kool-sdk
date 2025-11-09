import type { CSSProperties, ReactNode, RefObject } from "react";
import type { CssConditionOrString } from "../css.props";
/**
 * Props applied to all components
 */
export interface BaseComponentProps<T = HTMLElement> {
    /**
     * component id
     *
     * Note: id will be generated if not provided
     */
    id?: string;
    /**
     * test id to be used for automated testing
     */
    'data-testid'?: string;
    /**
     * CSS classes applied to the top level of the component
     */
    className?: CssConditionOrString;
    /**
     * CSS styles applied to the top level of the component
     */
    style?: CSSProperties;
    /**
     * Reference to the top level
     */
    ref?: RefObject<T>;
    /**
     * Child elements
     */
    children?: ReactNode;
}
