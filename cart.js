let total_price = JSON.parse(localStorage.getItem("price"));
    let bill = 0;

    for (let i = 0; i < total_price.length; i++) {
        bill = bill + total_price[i];
    }


    document.querySelector(".total").textContent = "Your Total is - $" + bill;

    let data = JSON.parse(localStorage.getItem("meal"));
    getOrder(data);


    function getOrder(arr) {

        arr.map(function (ele, index) {

            let div = document.createElement("div");

            let div1 = document.createElement("div");

            let foodImg = document.createElement("img");
            foodImg.src = ele.strCategoryThumb;

            let cat = document.createElement("p");
            cat.textContent = ele.strCategory;

            let price = document.createElement("p")
            price.textContent = total_price[index];

            div.append(foodImg);
            div1.append(cat, price);

            document.querySelector("#show-order").append(div, div1);
        })





    }