import { getCssClass } from "../../../utility/utility-css/utility-css";
import type { CardProps } from "./card.props";

/**
 * Card Footer
 * 
 * @param props 
 * @returns 
 */
export const CardFooter = (props: CardProps) => {
    const { 
        footer,
        footerClass = '',
        footerStyle,
        footerVisible = true,
    } = props;

    return (
        <>
        {footerVisible && footer && (
        <div className={getCssClass('k-card-footer p-grid p-grid-nogutter', footerClass)} style={footerStyle}>
            <div className="p-col">
                { footer }
            </div>
        </div>
        )}
        </>

    );
};
