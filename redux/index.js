export const CHANGE_POSITION = "CHANGE_POSITION";

export const changePosition = (index, newIndex) => {
    return {
        type: CHANGE_POSITION,
        index: index,
        newIndex: newIndex
    }
}