const shop = document.getElementById("shop");

const generateShop = () => {
  return (shop.innerHTML = `
    <div class="item"> 
        <img width="300" src="images/img-1.jpg" alt="" />
        <div class="details">
          <h3>Casual Shirt</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
          <br>
           <div class="price-quantity">
              <h2>$0</h2>
              <div class="buttons">
                <!-- <i class="bi bi-dash-lg decrease"></i> -->
                <button class="decrease">-</button>
                <div class="quantity">0</div>
                <button class="increase">+</button>
                <!-- <i class="bi bi-plus-lg increase"></i> -->
            </div>
          </div>
        </div>
      </div>
    `);
};

generateShop()