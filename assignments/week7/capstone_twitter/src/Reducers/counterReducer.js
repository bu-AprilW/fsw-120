import { incrementCounter, decrementCounter } from "../Actions/actionTypes";

const initialState = { counter: 0, counterNum: 0 };

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case incrementCounter:
            return {
                ...state,
                counter: state.counter + 1,
                counterNum: state.counterNum + 1
            };

        case decrementCounter:
            return {
                ...state,
                counter: state.counter - 1,
                counterNum: state.counterNum + 1
            };

        case "LOGOUT":
            return { ...initialState };

        default:
            return state;
    }
};

export default counterReducer;