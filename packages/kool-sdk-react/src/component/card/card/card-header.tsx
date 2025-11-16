import { getCssClass } from "../../../utility/utility-css/utility-css";
import type { CardProps } from "./card.props";
import { Close, ExpandLess, ExpandMore } from '@mui/icons-material';

/**
 * Card header
 * @param props 
 */
export const CardHeader = (props: CardProps) => {
    const { 
        header,
        headerClass = '',
        headerStyle,
        collapsed = false,
        collapsible = true,
        headerVisible = true,
        headerToolbar,
        closeable = true,
        onCollapse,
        onExpand,
    } = props;

    const collapsedHandler = collapsed ? onExpand : onCollapse;
    return (
        <>
        { headerVisible && (
        <div className={getCssClass('k-card-header p-grid p-grid-nogutter', headerClass)} style={headerStyle}>
            { collapsible && (
                <button className="p-button-icon" onClick={collapsedHandler}>
                { collapsed && <ExpandMore /> }
                { !collapsed && <ExpandLess /> }
                </button>
                // <i className={getCssClass('p-col-auto far', {'fa-expand': !collapsed, 'fa-collapse': collapsed})} /> 
            )}
            <div className="p-col">
                { header }
            </div>
            <div className="p-col-auto">
                { headerToolbar }
                { closeable && (<Close />)}
            </div>
            
            { closeable && (<div className="p-col-auto">
               
            </div>)}
        </div>
        )}
        </>
    );
};
