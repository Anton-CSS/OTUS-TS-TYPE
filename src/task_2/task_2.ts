type FIXME = Order['state'];

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

export const getOrderState = (order: Order): FIXME => order.state;