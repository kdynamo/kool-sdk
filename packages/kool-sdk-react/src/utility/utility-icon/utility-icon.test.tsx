import { getIcon } from "./utility-icon";

describe('getIcon', () => {
    it('should return an <i> element when a string is passed', () => {
        const iconClass = 'fa fa-user';
        const result = getIcon(iconClass, 'additional-class');
        expect(result).toEqual(<i className="fa fa-user additional-class" />);
    });

    it('should return the ReactNode when a ReactNode is passed', () => {
        const reactNode = <span>Custom Icon</span>;
        const result = getIcon(reactNode);
        expect(result).toEqual(reactNode);
    });

    it('should return an empty string when an empty string is passed', () => {
        const result = getIcon('');
        expect(result).toEqual('');
    });
});