import { CardContent } from "./card-content";
import { Cardfooter } from "./card-footer";
import { CardHeader } from "./card-header";
import { CardProps } from "./card.props";
import { useCard, type UseCardReturnProps } from "./use-card";

/**
 * Card 
 * 
 * @param props 
 * @returns 
 */
export const Card = (props: CardProps) => {

    const useCardProps: UseCardReturnProps = useCard(props);
    const {
        id,
        contentOnly,
        className,
        ref,
        base,
        style,
        Content,
        children,
    } = useCardProps;
    
    return (
        <>
         {!contentOnly && (<div id={id} ref={ref} className={`${className } k-${base}`} style={style}>
            <CardHeader {...props} {...useCardProps} />
            <CardContent {...props} {...useCardProps} />
            <Cardfooter {...props} {...useCardProps} />
        </div>
        )}
        { contentOnly && (
            <>
            { Content ? <Content /> : children }
            </>
        )}
        </>
    );
}