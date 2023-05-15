const loadButtons = document.querySelectorAll('.load-products');
const productList = document.getElementById('product-list');

function loadProducts(source) {
  fetch(source)
    .then(response => response.json()) 
    .then(products => {
      productList.innerHTML = '';
      products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('col-lg-6', 'col-md-12', 'col-sm-6', 'col-xs-12');
        productElement.innerHTML = `
        <div class="product-item" style="position: relative;">
        <div class="img">
            <img src="${product.img}" alt="" style="border-radius: 5%;" id = "img-product">
        </div>
        <div class="info">
            <h2 class="title">${product.name}</h2>
            <p class="price-product">
            $ ${product.price} USD
            </p>
            <p class="sub-title">
                ${product.info}
            </p>
            <div class="order-product" style="margin: 8px 0">
                <input type="number" class="quantity" style="width: 60px; height: 40px; border-radius: 4px; padding: 8px; border-color: #eeeeee;" value="1">
                <a href="#" style="width: 120px; height: 40px; background-color: #35b8be; display: inline-block; border-radius: 5px; text-decoration: none; color: #fff; text-align: center; line-height: 40px; margin: 0 8px;">Add to Cart</a>
            </div>
        </div>
        </div>
        `;
        productList.appendChild(productElement);
      });
    })
    .catch(error => {
      console.error('Error loading products:', error);
    });
    
}

loadButtons.forEach(event => {
  let buttons = document.querySelectorAll('.load-products')
//   console.log(buttons);
  event.addEventListener('click', () => {
    const source = event.dataset.source; 
    loadProducts(source);
    buttons.forEach( button => {
        if (button === event)   
            button.classList.add('active')
        else {
            button.classList.remove('active')
        }
    }
    );
  }
  ); 

});
loadProducts("/assets/data/burger.json")


