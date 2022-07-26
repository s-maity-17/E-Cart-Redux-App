//demo code
export const addProduct = (data)=>{
    return {
        type: 'ADD_PRODUCT',
        payload:{
            id: Date.now(),
            data:data,
            favorite: false,
        }
    }
}

export const addToFavorites = (data) =>{
    console.log('data123', data)
    return {
        type:'FAVORITES',
        payload:{
            id: data.id,
            data:data, 
            favorite:data.favorite
        }
    }
}

export const editProduct = (data,item) =>{
    console.log('data.id', item.id,'dataValues', data)

    return{
        type:'EDIT_PRODUCT',
        payload:{
            id: item.id,
            data:data, 
            favorite: item.favorite
        }
    }
}

export const showProduct = (id) =>{
    return{
        type: 'SHOW_PRODUCT',
        id
    }
}

export const addToCart = (data)=>{
    return{
        type: 'ADD_TO_CART',
        payload:{
            id: data.id,
            data:data,
            favorite: data.favorite,
        }
    }
}

export const removeFromCart = (id)=>{
    return{
        type: 'REMOVE_FROM_CART',
        id
    }
}