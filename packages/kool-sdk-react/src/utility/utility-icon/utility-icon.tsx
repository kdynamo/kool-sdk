import { type ReactNode } from "react"
import type { CssClass } from "../../props/css.props";
import { getCssClass } from "../utility-css/utility-css";

/**
 * Either return an icon or return the passed in element
 * @param icon Pass in either a string for the icon class or a ReactNode
 * @param className additional class name to add to the icon (only used if icon is a string)
 * @returns either an icon element or the passed in ReactNode
 */
export const getIcon = (icon: ReactNode, className: CssClass = '') => {
    if (typeof icon === 'string' && icon !== '') {
        return (<i className={getCssClass(icon, className)} />);
    }
    return icon;
};