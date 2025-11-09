import type { CSSProperties, RefObject } from "react";
import type { BaseCardProps } from "./base-card.props";
import type { CssConditionOrString } from "../css.props";


/**
 * Props applied to all overlay components
 */
export interface BaseLayoutProps<T=HTMLElement> extends BaseCardProps<T> {

    /**
     * 
     */
    rightVisible?: boolean;

    rightClass?: CssConditionOrString; 

    rightStyle?: CSSProperties;

    rightRef?: RefObject<T>;

    leftVisible?: boolean;

    leftClass?: CssConditionOrString; 

    lefttStyle?: CSSProperties;

    leftRef?: RefObject<T>;

    menuVisible?: boolean;

    menuClass?: CssConditionOrString; 

    menuStyle?: CSSProperties;

    menuRef?: RefObject<T>;

    onLeftHide?: (visible: boolean) => void;

    onLeftShow?: (visible: boolean) => void;

    onLeftCollapse?: (visible: boolean) => void;

    onLeftExpand?: (visible: boolean) => void;

    onRightHide?: (visible: boolean) => void;

    onRightShow?: (visible: boolean) => void;

    onRightCollapse?: (visible: boolean) => void;

    onRightExpand?: (visible: boolean) => void;

    onMenuHide?: (visible: boolean) => void;

    onMenuShow?: (visible: boolean) => void;

    onMenuCollapse?: (visible: boolean) => void;

    onMenuExpand?: (visible: boolean) => void;

}
