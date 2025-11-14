import { useId } from "react"
import { isValueEmpty } from "../../utility/utility-value/utility-value";

/**
 * Generates a unique id if an id is not provided. Optionally, a prefix and a postfix
 * can be added before/after the unique id
 * 
 * @param id id to be passed in. if null or undefined, a unique id is generated
 * @param prefix text prepended to the unique id
 * @param postfix text appended to the unique id
 * @returns id if defined or generated unique id
 */
export const useUnique = (id?: string, prefix: string = 'uid-', postfix: string = ''): string => {
    const uniqueId = useId();
    const finalId = isValueEmpty(id) ? `${prefix}${uniqueId}${postfix}` : id;
    return finalId;
}