var updateBtns = document.getElementsByClassName('update-cart')
for (i=0;i<updateBtns.length;i++){
    updateBtns[i].addEventListener('click',function(){
        var productId = this.dataset.product
        var action = this.dataset.action
        console.log('productId',productId,'action',action)
        console.log('User: ',user)
        if(user === "AnonymousUser"){
            console.log('User chưa đăng nhập')
        }else{
            updateUserOrder(productId,action)
        }
    })
}

function updateUserOrder(productId,action){
    console.log('User đã đăng nhập, thêm thành công')
    var url = '/update_item/'
    fetch(url,{
        method:'POST',
        headers:{
            'Content-type':'appication/json',
            'X-CSRFToken': csrftoken,
        },
        body: JSON.stringify({'productId':productId,'action':action})
    })
    .then((response)=>{
        return response.json()
    })
    .then((data)=>{
        console.log('data',data)
        location.reload()
    })
}