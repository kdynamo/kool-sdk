import { renderHook } from '@testing-library/react';
import { useVisible } from './use-visible';

describe('useCollapse', () => {
    it('trigger collapsed and expanded', () => {
        const mockOnHide = jest.fn();
        const mockOnShow = jest.fn();
        const { result: resultRef, rerender } = renderHook(() => useVisible({ 
            visible: false,
            onHide: mockOnHide,
            onShow: mockOnShow,
        }));
        const ref = resultRef.current;

        expect(ref.visible).toBe(false);
        expect(mockOnHide).toHaveBeenCalled();
        const { show, hide } = resultRef.current;
        show();
        rerender();
        expect(resultRef.current.visible).toBe(true);
        expect(mockOnShow).toHaveBeenCalled();
        hide();
        rerender();
        expect(resultRef.current.visible).toBe(false);
        expect(mockOnHide).toHaveBeenCalledTimes(2);
    });

    it('toggleVisible', () => {
        const { result: resultRef, rerender } = renderHook(() => useVisible({ 
            visible: false,
        }));
        const { visible: initialVisible } = resultRef.current;
        expect(initialVisible).toBe(false);
        const { toggleVisible } = resultRef.current;
        toggleVisible();
        rerender();
        const { visible } = resultRef.current;
        expect(visible).toBe(true);
    });
});