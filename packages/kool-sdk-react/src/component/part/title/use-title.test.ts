import { renderHook } from "@testing-library/react";
import { useTitle } from "./use-title";

describe('useTitle', () => {
    it('set header and no subHeader', () => {
        const header = 'Header1';
        const subHeader = '';
        const { result: resultRef } = renderHook(() => useTitle({
            header: header,
            subHeader,
        }));
        const {
            headerVisible,
            subHeaderVisible,
        } = resultRef.current;

        expect(headerVisible).toBe(true);
        expect(subHeaderVisible).toBe(false);
    });
});