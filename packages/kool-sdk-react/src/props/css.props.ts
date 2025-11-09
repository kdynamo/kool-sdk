export type CssClassBase = string | number;
export type CssClassCondition = Record<string, boolean>;
export type CssClass = CssClassBase | CssClassCondition;

export type CssConditionFunction = () => boolean;
export type CssConditionalResult = boolean | CssConditionFunction;
export type CssCondition = Record<string, CssConditionalResult>;
export type CssConditionOrString = string | string[] | CssCondition | undefined | null;
