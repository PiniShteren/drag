import { CHANGE_POSITION } from "./index";

export const State = (state = {
    items: [
        { name: 1 },
        { name: 2 },
        { name: 3 },
        { name: 4 },
        { name: 5 },
        { name: 6 },
        { name: 7 },
    ]
}, action) => {
    switch (action.type) {
        case CHANGE_POSITION:
            let newItems = [...state.items].filter((e, i) => i !== action.index);
            let item = state.items[action.index];
            newItems.splice(action.newIndex, 0, item);
            return { ...state, items: [...newItems] };
        default: return state;
    }
}