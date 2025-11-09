import type { CSSProperties, ReactNode } from "react";
import type { BaseComponentProps } from "./base.props";
/**
 * Props applied to all card components
 */
export interface BaseCardProps<T = HTMLDivElement> extends BaseComponentProps<T> {
    /**
     * === true, component is visible
     *
     * === false, component is not visible
     */
    visible?: boolean;
    /**
     * header
     */
    header?: ReactNode;
    /**
     * CSS classes applied to the header
     */
    headerClass?: string;
    /**
     * CSS styles applied to the header
     */
    headerStyle?: CSSProperties;
    /**
     * === true, header is visible
     *
     * === false, header is not visible
     */
    headerVisible?: boolean;
    /**
     * additional content, typically icons, added to the header
     */
    headerToolbar?: ReactNode;
    /**
     * Content
     */
    Content?: ReactNode;
    /**
     * CSS classes applied to the content
     */
    contentClass?: string;
    /**
     * CSS styles applied to the content
     */
    contentStyle?: CSSProperties;
    contentVisible?: boolean;
    footer?: ReactNode;
    /**
     * CSS classes applied to the content
     */
    footerClass?: string;
    /**
     * CSS styles applied to the content
     */
    footerStyle?: CSSProperties;
    /**
     * === true, foooter is visible
     *
     * === false, footer is not visible
     */
    footerVisible?: boolean;
    /**
     * === true, content is not shown
     *
     * === false, content is shown
     */
    collapsed?: boolean;
    /**
     * === true, allows the content to be alternatively hidden or shown
     */
    collapsible?: boolean;
    /**
     * === true, content is shown, header and footer are not shown
     *
     * === false, content, header and footer are shown based on visible parameters
     *
     * Note: This is typically set to true when completely customizing the card
     */
    contentOnly?: boolean;
    /**
     * === true, show close icon
     *
     * === false, do not show close icon
     */
    closeable?: boolean;
    /**
     * prefix to add to the card classes
     */
    base?: string;
    /**
     * Describes how the card size is determined
     *
     * auto: based on the contents
     *
     * inline: bases on the
     */
    type?: 'auto' | 'inline';
    /**
     * === true, component is draggable
     *
     * === false, component is not draggable
     */
    draggable?: boolean;
    /**
     * === true, component expands to full screen
     *
     * === false, component stays at is defined size
     */
    fullScreen?: boolean;
    /**
     * Triggers when the component hides
     * Note: visible is passed to allow the same handler for onShow and onHide
     * @param visible
     */
    onHide?: (visible: boolean) => void;
    /**
     * Triggers when the component is visible
     * Note: visible is passed to allow the same handler for onShow and onHide
     * @param visible
     */
    onShow?: (visible: boolean) => void;
}
