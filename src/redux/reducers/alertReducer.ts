export interface Alert {
    loading?: boolean;
    success?: string | string[];
    errors?: string | string[];
}

export const ALERT = "ALERT";

export interface AlertType {
    type: typeof ALERT;
    payload: Alert;
}

const alertReducer = (state: any = {}, action: AlertType) => {
    switch (action.type) {
        case ALERT:
            return action.payload;
        default:
            return state;
    }
};

export default alertReducer;
