type FIXME = {
    state: "initial" | "inWork";
} | null;

type Order =
    | {
    state: "initial";
    sum: number;
}
    | {
    state: "inWork";
    sum: number;
    workerId: number;
}
    | {
    state: "buyingSupplies";
    sum: number;
    workerId: number;
    suppliesSum: number;
}
    | {
    state: "producing";
    sum: number;
    workerId: number;
    suppliesSum: number;
    produceEstimate: Date;
}
    | {
    state: "fulfilled";
    sum: number;
    workerId: number;
    suppliesSum: number;
    produceEstimate: Date;
    fulfillmentDate: Date;
};

export const filterOnlyInitialAndInWorkOrder = (order: Order): FIXME => {
    if (order.state === "initial" || order.state === "inWork") {
        return order;
    }

    return null;
};