document.querySelector("#final").addEventListener("click", myOrder)


function myOrder(event) {

    event.preventDefault();


    alert("Your Order is accepted");

    setTimeout(function () {
        alert("Your order is being cooked")
    }, 3000)

    setTimeout(function () {
        alert("Your order is ready")
    }, 10000)

    setTimeout(function () {
        alert("Your order is delivered")
    }, 12000)


}