const initialState = {
	items: [
		{
			content: "Apples",
			id: 1
		},
		{
			content: "Mangoes",
			id: 2
		},
		{
			content: "Onions",
			id: 3
		},
		{
			content: "Garlic",
			id: 4
		}
	]
}
const rootReducer = (state = initialState, action) => {
	if (action.type === "ADD_ITEM") {
		const item = action.content
		item.id = Math.random()
		let items = [...state.items, item]
		return { ...state, items }
	}
	if (action.type === "DELETE_ITEM") {
		let items = state.items.filter(item => {
			return item.id !== action.id
		})
		return {
			...state,
			items
		}
	}
	return state
}

export default rootReducer
