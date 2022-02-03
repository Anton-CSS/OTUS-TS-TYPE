type FIXME = Omit<OrderState, "initial" | "inWork"| "fulfilled">[];

const orderStates = [
    "initial",
    "inWork",
    "buyingSupplies",
    "producing",
    "fulfilled",
] as const;

type OrderState = typeof orderStates[number];

// Hint: type guards
export const getUserOrderStates = (orderStates: OrderState[]): FIXME =>
    orderStates.filter(
        (state) => state !== "buyingSupplies" && state !== "producing"
    );