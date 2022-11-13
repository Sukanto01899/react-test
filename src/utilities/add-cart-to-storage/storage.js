const addLocalStorage = id=>{
    let shoppingCart;
    const storedCart = localStorage.getItem('shopping-cart')
    if(storedCart){
        shoppingCart = JSON.parse(storedCart)
    }else{
        shoppingCart = {};
    }

    const quantity = shoppingCart[id]
    if(quantity){
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity
    }else{
        shoppingCart[id] = 1;
    }

    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
}

function removeId(id){
    const shoppingCart = JSON.parse(localStorage.getItem('shopping-cart'))
    if(id in shoppingCart){
        delete shoppingCart[id]
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
};

function allRemove(){
    localStorage.removeItem('shopping-cart')
};

function totalBalance(products){
    let totalArr = [];
    products.forEach(product => {
        totalArr.push(parseFloat(product.balance.slice(1).replace(/,/g, '')))
    });
    const total = totalArr.reduce((previous, current)=>previous + current,0)
    
    return '$' + total;
};



export {
    addLocalStorage,
    removeId,
    allRemove,
    totalBalance
};

