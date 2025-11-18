import { VisibleProps } from "./visible-props";

export const Visible = (props: VisibleProps) => {
    const {
        visible = true,
        children,
    } = props;

    return (
        <>
            { visible && ({ children})}
        </>
    );
}