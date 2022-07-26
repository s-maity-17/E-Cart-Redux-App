const initialData = {
  list: [],
  item:{}
};

const addProductReducer = (state = initialData, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      const { id, data, favorite } = action.payload;

      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            data: data,
            favorite: favorite,
          },
        ],
      };

    case "SHOW_PRODUCT":

      const item = state.list.find((item)=>item.id === action.id);
      console.log('item', item)

      return {
        ...state,
        item: item
      };

    case "EDIT_PRODUCT":
        
        console.log('formValue, formId',action.payload.data, action.payload.id,action.payload.favorite)
        const productList = [...state.list]
         productList.map((item,index)=>{
            if(item.id === action.payload.id){
                const obj = {
                    id:action.payload.id,
                    data: action.payload.data,
                    favorite: action.payload.favorite
                }
                
                productList.splice(index,1,obj);
            }
        })
        return{
            ...state,
            list:productList
        };

    case "FAVORITES":
        // const {productId} = action.payload;
        console.log('productId123', action.payload.id,action.payload.favorite);
        const favList = [...state.list];
      
        let fav = false;
        favList.map((item,index)=>{
            if(item.id === action.payload.id){               
                item.favorite = !action.payload.favorite;             
            }
        })
        console.log('fav', fav)
        console.log('favList', favList)
        return{
            ...state,
            list:favList
        }

    default:
      return state;
  }
};

export default addProductReducer;
