const initialData = {
  list: [],
};

const cartReducer = (state = initialData, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const { id, data } = action.payload;

      let item = state.list.some((item) => item.id === id);
      console.log("item", item);
      let itemList = [];
      if (item === true) {
        itemList = [...state.list];
      } else {
        const newItem = {
          id: id,
          data: data,
        };
        itemList = [...state.list];
        itemList.push(newItem);
      }
      return {
        ...state,
        list: itemList,
      };

    case "REMOVE_FROM_CART":
      const newList = state.list.filter((item) => item.id !== action.id);

      return {
        ...state,
        list: newList,
      };

    default:
      return state;
  }
};

export default cartReducer;
