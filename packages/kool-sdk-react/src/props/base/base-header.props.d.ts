import type { CSSProperties, ReactNode } from "react";
export interface BaseHeaderProps {
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
}
