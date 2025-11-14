import { renderHook } from "@testing-library/react";
import { useUnique } from "./use-unique";

describe('useUnique', () => {
    it('id passed through', () => {
        const id = 'originalId';
        const { result: resultRef } = renderHook(() => useUnique(id));
        expect(resultRef.current).toBe(id);
    });
    it('id generated with prefix and postfix', () => {
        const id = null;
        const prefix = 'pre-';
        const postfix = 'post-';
        const { result: resultRef } = renderHook(() => useUnique(id, prefix, postfix));
        expect(resultRef.current).toBe(`${prefix}_r_1_${postfix}`);
    });
})