import { useEffect, useState } from "react";

export interface UseCollapsedProps {
    /**
     * === true, collapse the content
     * 
     * === false, do not collapse the content
     */
    collapsed?: boolean;

    /**
     * Triggers when the content is collapsed
     * 
     * @param collapsed set to true
     */
    onCollapse?: (collapsed: boolean) => void;

    /**
     * Triggers when the content is expanded
     * 
     * @param collapsed set to true
     */
    onExpand?: (collapsed: boolean) => void;
}

export interface UseCollapsedReturnProps extends UseCollapsedProps {
    /**
     * Collapses the content
     */
    collapse: VoidFunction;

    /**
     * Expands the content
     */
    expand: VoidFunction;

    /**
     * Toggles the content
     */
    toggle: VoidFunction;
}

export const useCollapsed = (props: UseCollapsedProps): UseCollapsedReturnProps => {
    const {
        collapsed: passedCollapsed = false,
        onCollapse,
        onExpand,
    } = props;
    const [collapsed, setCollapsed] = useState<boolean>(passedCollapsed);

    useEffect(() => {
        setCollapsed(passedCollapsed);
    }, [passedCollapsed]);

    useEffect(() => {
        if (collapsed && onCollapse) {
            onCollapse(false);
        } else if (!collapsed && onExpand) {
            onExpand(true);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [collapsed]);

    const collapse = () => {
        setCollapsed(true);
    }
    const expand = () => {
        setCollapsed(false);
    }
    const toggle = () => {
        setCollapsed(!collapsed);
    }

    return ({
        collapsed,
        collapse,
        expand,
        toggle,
        onCollapse,
        onExpand,
    });
}