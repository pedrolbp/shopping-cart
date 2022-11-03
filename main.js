const shop = document.getElementById("shop");

const shopItemsData = [
  {
    id: "cS1",
    name: "Casual Shirt",
    price: 45,
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
    img: "images/img-1.jpg",
  },
  {
    id: "oS1",
    name: "Office Shirt",
    price: 100,
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
    img: "images/img-2.jpg",
  },
  {
    id: "tS1",
    name: "T Shirt",
    price: 25,
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
    img: "images/img-3.jpg",
  },
  {
    id: "mS1",
    name: "Men Suits ",
    price: 300,
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
    img: "images/img-4.jpg",
  },
];

const generateShop = () => {
  return (shop.innerHTML = shopItemsData.map((x) => {
    const {id, name, price, desc, img} =x
    return `
    <div id=product-id-${id} class="item"> 
        <img width="300" src=${img} alt="" />
        <div class="details">
          <h3>${name} </h3>
          <p>${desc}</p>
           <div class="price-quantity">
              <h2>$ ${price} </h2>
              <div class="buttons">
                <!-- <i class="bi bi-dash-lg decrease"></i> -->
                <button class="decrease">-</button>
                <div id=${id} class="quantity">0</div>
                <button class="increase">+</button>
                <!-- <i class="bi bi-plus-lg increase"></i> -->
            </div>
          </div>
        </div>
      </div>
    `;
  }).join(""));
};

generateShop();
