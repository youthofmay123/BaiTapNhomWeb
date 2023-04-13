const loadButtons = document.querySelectorAll('.load-products');
const productList = document.getElementById('product-list');

function loadProducts(source) {
  fetch(source)
    .then(response => response.json()) 
    .then(products => {
      productList.innerHTML = '';
      products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('col-xs-12', 'col-md-6','table-cell');
        productElement.innerHTML = `
        <div class="product-item" style="position: relative;">
        <div class="img">
            <img src="${product.img}" alt="" style="width: 120x; height: 120px; border-radius: 5%;">
        </div>
        <div class="info">
            <h2 class="title">${product.name}</h2>
            <p class="sub-title">
                ${product.info}
            </p>
            <div class="order-product" style="margin: 8px 0">
                <input type="number" class="quantity" style="width: 60px; height: 40px; border-radius: 4px; padding: 8px; border-color: #eeeeee;" value="1">
                <a href="#" style="width: 120px; height: 40px; background-color: #35b8be; display: inline-block; border-radius: 5px; text-decoration: none; color: #fff; text-align: center; line-height: 40px; margin: 0 8px;">Add to Cart</a>
            </div>
        </div>
            <p class="price-product" style="color: #35b8be; font-size: 16px; position: absolute; right: 0; top: 0; padding: 32px;">
            $ ${product.price} USD
            </p>
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
  event.addEventListener('click', () => {
    const source = event.dataset.source; 
    loadProducts(source);
    
  }
  ); 

});
loadProducts("/assets/data/burger.json")

