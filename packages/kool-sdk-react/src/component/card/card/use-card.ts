import type { CardProps } from "./card.props";
import { useCollapsed, type UseCollapsedReturnProps } from "../../../hook/use-collapsed/use-collapsed";


export type UseCardReturnProps = CardProps & UseCollapsedReturnProps;

export const useCard = (props: UseCardReturnProps): UseCardReturnProps => {
    const {
        base = 'card',
        className = '',
        contentOnly = false,
    } = props;
    const {
        collapsed,
        onCollapse,
        onExpand,
    } = useCollapsed({...props});

    return ({
        ...props,
        base,
        className,
        contentOnly,
        collapsed,
        onCollapse,
        onExpand,
    });

}

