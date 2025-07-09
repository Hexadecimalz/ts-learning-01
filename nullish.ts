
interface customerOrder{
    customerName?: string | null | undefined;
    quantity?: number | null | undefined;
    notes?: unknown;
}

// nullish coalescence 

function summarizeOrder(order: customerOrder) {

    console.log(`Customer name is ${ order.customerName ?? 'Unavailable' }`);
    console.log(`Desired Quantity is ${ order.quantity ?? 'Unspecified' }`);
    if ( typeof order.notes === "string" ) {
        console.log(`Notes: ${order.notes}`);
    }
}


let myOrder: customerOrder = {
    customerName:"BC",
    notes: 2
}

summarizeOrder(myOrder);

