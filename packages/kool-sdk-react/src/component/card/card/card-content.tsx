
import { getCssClass } from "../../../utility/utility-css/utility-css";
import type { CardProps } from "./card.props";

/**
 * Card Content
 * 
 * @param props 
 */
export const CardContent= (props: CardProps) => {
    const { 
        collapsed = false,
        Content,
        contentVisible = true,
        contentClass = '',
        contentStyle,
        children,
    } = props;

    return (
        <>
            {!collapsed && contentVisible && (
                <div className={getCssClass('k-card-content p-grid p-grid-nogutter', contentClass)} style={contentStyle}>
                    <div className="p-col">
                        { Content ? <Content />  : children }
                    </div>
                </div>
            )}
        </>
    );
};
