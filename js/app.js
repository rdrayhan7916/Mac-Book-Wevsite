function updateTotal() {
    totalCost.innerText = parseInt(memoryCost.innerText) + parseInt(storageCost.innerText) + parseInt(deliveryCost.innerText) + parseInt(productPrice.innerText);
    return totalCost.innerText
}

const memoryCost = document.getElementById('memory-cost');
const storageCost = document.getElementById('storage-cost')
const deliveryCost = document.getElementById('delivery-cost')
const totalCost = document.getElementById('total-cost')
const productPrice = document.getElementById('product-price')
//  ----memory-option----
document.getElementById('8gb-memory-fee').addEventListener('click', function () {
    memoryCost.innerText = '0'
    updateTotal()
})
document.getElementById('16gb-memory-fee').addEventListener('click', function () {
    memoryCost.innerText = '20'
    updateTotal()
})

//---- storage-option---
document.getElementById('256gb-ssd-fee').addEventListener('click', function () {
    storageCost.innerText = '20'
    updateTotal()
})
document.getElementById('512gb-ssd-fee').addEventListener('click', function () {
    storageCost.innerText = '50'
    updateTotal()
})
document.getElementById('1tb-ssd-fee').addEventListener('click', function () {
    storageCost.innerText = '100'
    updateTotal()
})

// ----delivery-option----
document.getElementById('normal-delivery').addEventListener('click', function () {
    deliveryCost.innerText = '1'
    updateTotal()
})
document.getElementById('emergency-delivery').addEventListener('click', function () {
    deliveryCost.innerText = '20'
    updateTotal()
})