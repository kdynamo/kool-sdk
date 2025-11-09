import type { HeaderProps } from "./header.props";

export const Header = (props: HeaderProps) => {
    const {
        headerClass = '',
        headerStyle,
        header
    } = props;
    return (
        <div className={`k-header ${headerClass}`} style={headerStyle}>
            { header }
        </div>
    );
}