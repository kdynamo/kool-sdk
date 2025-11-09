import { renderHook } from '@testing-library/react';
import { useCollapsed } from './use-collapsed';
describe('useCollapse', () => {
    it('trigger collapsed and expanded', () => {
        const mockOnCollapse = jest.fn();
        const mockOnExpand = jest.fn();
        const { result: resultRef, rerender } = renderHook(() => useCollapsed({ 
            collapsed: false,
            onCollapse: mockOnCollapse,
            onExpand: mockOnExpand
        }));
        const ref = resultRef.current;

        expect(ref.collapsed).toBe(false);
        expect(mockOnExpand).toHaveBeenCalled();
        const { collapse, expand } = resultRef.current;
        collapse();
        rerender();
        expect(resultRef.current.collapsed).toBe(true);
        expect(mockOnCollapse).toHaveBeenCalled();
        expand();
        rerender();
        expect(resultRef.current.collapsed).toBe(false);
        expect(mockOnExpand).toHaveBeenCalledTimes(2);
    });

    it('toggle', () => {
        const { result: resultRef, rerender } = renderHook(() => useCollapsed({ 
            collapsed: false,
        }));
        const { collapsed: initialCollapsed } = resultRef.current;
        expect(initialCollapsed).toBe(false);
        const { toggleCollapse } = resultRef.current;
        toggleCollapse();
        rerender();
        const { collapsed } = resultRef.current;
        expect(collapsed).toBe(true);
    });
});