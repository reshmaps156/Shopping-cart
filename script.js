 //to get data
 fetch('https://fakestoreapi.com/products').then((response)=>{
    // console.log(response);
    response.json().then((product)=>{
        console.log(product);

        product.forEach(pro => {
            cart.innerHTML +=`<div class="col mb-5">
                <div class="card h-100">
                    <!-- Product image-->
                    <img class="card-img-top" src=${pro.image} alt="..." height="300px" />
                    <!-- Product details-->
                    <div class="card-body p-4">
                        <div class="text-center">
                            <!-- Product name-->
                            <h5 class="fw-bolder">${pro.title.slice(0,25)}</h5>
                            <!-- Product price-->
                           $ ${pro.price}
                        </div>
                    </div>
                    <!-- Product actions-->
                    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                    </div>
                </div>
            </div>`
        });
    })
}).catch((err)=>{
    console.log(err);
})