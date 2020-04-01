
export class AppEventEmitter {
    task: EmitterTask;
    eventData: any;
} 


export enum EmitterTask {
    
    CLOSE_POPUP = 1,
    SAVE_PAYMENT_STATUS,
    APPLY_DISCOUNT,
    SUCCESS,
    ADD,
    UPDATE,
    ORDER_PAYMENT_SUCCESS,
    ADD_PAYMENT,
    FILTER_RESULT,
    FILTER_VALUE,

    GST,
    AADHAR,
    PAN,

    BILL_ADDRESS,
    SHIP_ADDRESS,
    


}