import { renderHook } from "@testing-library/react";
import { useButton } from "./use-button";
import { ButtonProps } from "./button.props";
import { KeyboardEvent } from "react";

describe('useButton', () => {
    it('leftIcon set to a class', () => {
        const { result: resultRef } = renderHook(() => useButton({
            leftIcon: 'fa fa-clock'
        } as ButtonProps));
        const leftIcon = resultRef.current.leftIcon;
        expect(leftIcon).not.toBe(undefined);
        const rightIcon = resultRef.current.rightIcon;
        expect(rightIcon).toBe(undefined);
    });
    it('rightIcon set to a class', () => {
        const { result: resultRef } = renderHook(() => useButton({
            rightIcon: 'fa fa-clock'
        } as ButtonProps));
        const leftIcon = resultRef.current.leftIcon;
        expect(leftIcon).toBe(undefined);
        const rightIcon = resultRef.current.rightIcon;
        expect(rightIcon).not.toBe(undefined);
    });
    it('Press key other than enter does not trigger onPress', () => {
        const pressHandler = jest.fn();
        const onKeyDownHandler = jest.fn();

        const { result: resultRef } = renderHook(() => useButton({
            onPress: pressHandler,
            onKeyDown: onKeyDownHandler,
        } as ButtonProps));
        const onKeyDown = resultRef.current.onKeyDown;
        onKeyDown({ code: 'A'} as KeyboardEvent<HTMLButtonElement>);
        expect(pressHandler).not.toHaveBeenCalled();
        expect(onKeyDownHandler).toHaveBeenCalled();
    });

        it('Press enter trigger onPress', () => {
        const pressHandler = jest.fn();
        const onKeyDownHandler = jest.fn();

        const { result: resultRef } = renderHook(() => useButton({
            onPress: pressHandler,
            onKeyDown: onKeyDownHandler,
        } as ButtonProps));
        const onKeyDown = resultRef.current.onKeyDown;
        onKeyDown({ key: 'Enter'} as KeyboardEvent<HTMLButtonElement>);
        expect(pressHandler).toHaveBeenCalled();
        expect(onKeyDownHandler).toHaveBeenCalled();

    });
});