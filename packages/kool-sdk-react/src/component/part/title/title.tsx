import { isValueEmpty } from "@/utility";
import { Visible } from "../visible/visible";
import { TitleProps } from "./title-props";
import { useTitle } from "./use-title";

/**
 * Displays a header and optional subHeader
 * @param props 
 * @returns 
 */
export const Title = (props: TitleProps) => {
    const {
        id,
        'data-testid': dataTestId,
        visible,
        headerVisible,
        subHeaderVisible: passedSubHeaderVisible,
        className,
        style,
        headerClass,
        headerStyle,
        subHeaderClass,
        subHeaderStyle,
        header,
        subHeader,
    } = useTitle(props);
    const subHeaderVisible: boolean = passedSubHeaderVisible && !isValueEmpty(subHeader);
    return (
        <Visible visible={visible}>
            <div id={id} className={className} style={style} data-testid={dataTestId}>
                <Visible visible={headerVisible}>
                    <h1 id={`${id}-header`} className={headerClass} style={headerStyle}>
                        { header }
                    </h1>
                </Visible>
                <Visible visible={subHeaderVisible}>
                    <h2 id={`${id}-sub-header`} className={subHeaderClass} style={subHeaderStyle}>
                        {subHeader}
                    </h2>
                </Visible>
            </div>
        </Visible>
    );
}