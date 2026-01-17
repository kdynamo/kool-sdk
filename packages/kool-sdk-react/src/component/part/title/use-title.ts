import { getCssClass, getCssJoinClass, getCssPrefixClass } from "@/utility";
import { TitleProps } from "./title-props";
import { useUnique } from "@/hook/use-unique/use-unique";

export const useTitle = (props: TitleProps) => {
    const {
        id: passedId,
        base = '',
        visible = true,
        headerVisible = true,
        subHeaderVisible = true,
        className: passedClassName = '',
        headerClass: passedHeaderClass = '',
        subHeaderClass: passedSubHeaderClass = '',
    } = props;
    const baseClass = getCssPrefixClass(base, 'title');
    const id = useUnique(passedId, 'title-');
    const className = getCssClass(
        baseClass,
        passedClassName
    );
    const headerClass = getCssClass(
        getCssJoinClass(baseClass, 'header'),
        passedHeaderClass
    );    
    const subHeaderClass = getCssClass(
        getCssJoinClass(baseClass, 'sub-header'),
        passedSubHeaderClass
    );
    return ({
        ...props,
        id,
        visible,
        headerVisible,
        subHeaderVisible,
        baseClass,
        className,
        headerClass,
        subHeaderClass
    })
}