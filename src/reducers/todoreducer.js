export default function todos(state = [], action) {

    switch (action.type) {
        case 'ADD_TODO': {
            return [
                ...state,
                {
                    id: action.id,
                    completed: false,
                    text: action.text
                }
            ]
        }

        case 'DELETE_TODO': {
            return [
                ...state.filter((item) => item.id !== action.id)
            ]
        }

        case 'TOGGLE_TODO': {
            return [
                ...state.map( (item) =>
                        item.id !== action.id ? item : {...item, completed: !item.completed }
                )
            ]
        }

        default:
            return state;
    }
}