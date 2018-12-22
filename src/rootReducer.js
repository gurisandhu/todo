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
};
const rootReducer = (state = initialState, action) => {
  if (action.type === "ADD_ITEM") {
    const item = action.content;
    return { ...state.items, item };
  }
  console.log(state);
  return state;
};

export default rootReducer;
