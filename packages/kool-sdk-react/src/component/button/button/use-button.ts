import { ButtonProps } from "./button.props";
import { getIcon } from "../../../utility/utility-icon/utility-icon";
import { KeyboardEvent } from "react";
import { getCssClass } from "../../../utility/utility-css/utility-css";
import { useUnique } from "../../../hook/use-unique/use-unique";

const buttonClassName = 'k-button';

/**
 * Hook supporting button functionality
 * @param props 
 * @returns 
 */
export const useButton = (props: ButtonProps): ButtonProps => {
    const {
        id: passedId,
        className: passedClassName = '',
        kind = 'primary',
        size = 'medium',
        leftIcon: passedLeftIcon,
        rightIcon: passedRightIcon,
        onPress: passedOnPress,
        onKeyDown: passedOnKeyDown,
    } = props;
    const id = useUnique(passedId, 'btn-');
    // determines the top level CSS classes
    const className = getCssClass(
        passedClassName,
        buttonClassName,
        `${buttonClassName}-${kind}`,
        `${buttonClassName}-${size}`
    );
    // determine the left and icon CSS classes
    const leftIcon = getIcon(passedLeftIcon, `${buttonClassName}-icon-left`);
    const rightIcon = getIcon(passedRightIcon, `${buttonClassName}-icon-right`);

    /**
     * Trigger when enter is pressed
     * 
     * @param e keyboard event
     */
    const onPress = (e: KeyboardEvent<HTMLButtonElement>) => {
        if (passedOnPress) {
            if (e.key === 'Enter') {
                passedOnPress(e);
            }
        }
    };

    const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
       if (passedOnKeyDown) {
        passedOnKeyDown(e);
       }
       onPress(e);   
    };
    return ({
        ...props,
        id,
        className,
        leftIcon,
        rightIcon,
        onPress,
        onKeyDown,
    } as ButtonProps)
};

