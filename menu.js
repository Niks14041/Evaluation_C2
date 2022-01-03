let cartData = [];


    async function getMeal() {
        try {

            let res = await fetch(`https://themealdb.com/api/json/v1/1/categories.php`);

            let mealData = await res.json();

            console.log(mealData.categories)

            showMenu(mealData.categories);


        }
        catch (err) {
            console.log(err)
        }

    }
    getMeal();

    let priceArr = [];

    function showMenu(arr) {

        arr.map(function (ele, index) {

            let div = document.createElement("div");

            let foodImg = document.createElement("img");
            foodImg.src = ele.strCategoryThumb;

            let cat = document.createElement("p");
            cat.textContent = ele.strCategory;

            let price = document.createElement("p");

            let randomPrice = getValue(100, 500);


            price.textContent = "$" + randomPrice;

            let btn = document.createElement("button");
            btn.textContent = "Add to cart";


            btn.addEventListener('click', function addtoCart(index) {
                cartData.push(ele);

                priceArr.push(randomPrice);


                localStorage.setItem("meal", JSON.stringify(cartData));

                localStorage.setItem("price", JSON.stringify(priceArr));

                document.querySelector(".countItems").textContent = "cart : " + cartData.length
            });

            div.append(foodImg, cat, price, btn);

            document.querySelector(".show_here").append(div);
        })


        function getValue(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        document.querySelector(".countItems").addEventListener("click", function () {

            window.location.href = "cart.html"
        })

    };
