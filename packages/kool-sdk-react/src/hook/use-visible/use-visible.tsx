import { useEffect, useState } from "react";

/**
 * Props passed in the hook
 */
export interface UseVisibleProps {
    /**
     * === true, 
     */
    visible?: boolean;

    /**
     * Triggers when visible transitions to true
     * @param visible new visible value
     */
    onHide?: (visible: boolean) => void;

    /**
     * Triggers when visible transitions to true
     * @param visible new visible value
     */
    onShow?: (visible: boolean) => void;
}

/**
 * Return properties
 */
export interface UseVisibleReturnProps extends UseVisibleProps {
    /**
     * Sets visible to false
     */
    hide: VoidFunction;

    /**
     * Sets visible to true
     */
    show: VoidFunction;

    /**
     * Sets visible to its opposite value
     */
    toggleVisible: VoidFunction;
}

/**
 * Controls the visibility
 * @param props visible and handlers for showing and hiding
 * @returns 
 */
export const useVisible = (props: UseVisibleProps): UseVisibleReturnProps => {
    const {
        visible: passedVisible = true,
        onHide,
        onShow,
    } = props;

    const [visible, setVisible] = useState<boolean>(passedVisible);

    /**
     * Updates when the passed in visible changes
     */
    useEffect(() => {
        setVisible(passedVisible);
    }, [passedVisible]);

    /**
     * Trigger the show or hide values when visible changes
     */
    useEffect(() => {
        if (visible) {
            if (onShow) {
                onShow(true);
            }
        } else {
           if (onHide) {
            onHide(false);
           }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [visible]);

    /**
     * Sets visible to true
     */
    const show = () => {
        setVisible(true);
    };

    /**
     * Sets visible to false
     */
    const hide = () => {
        setVisible(false);
    }

    /**
     * Sets visible to its opposite value
     */
    const toggleVisible = () => {
        setVisible(!visible);
    }

    return ({
        visible,
        show,
        hide,
        toggleVisible,
        onHide,
        onShow,
    })
}