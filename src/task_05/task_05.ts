import React from "react";

type FIXME = any;


// Hint: infer
export const getDefaultProps = <T>(
    component: React.ComponentType<T>
): FIXME => {
    return component.defaultProps;
};