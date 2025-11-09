import type { CSSProperties, ReactNode } from "react";
export interface BaseFooterProps {
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
 * additional content, typically icons, added to the header
 */
    footerToolbar?: ReactNode;
}
