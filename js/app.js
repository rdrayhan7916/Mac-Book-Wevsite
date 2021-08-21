function updateTotal() {
    totalCost.innerText = parseInt(memoryCost.innerText) + parseInt(storageCost.innerText) + parseInt(deliveryCost.innerText) + parseInt(productPrice.innerText);
    return totalCost.innerText
}

const memoryCost = document.getElementById('memory-cost');
const storageCost = document.getElementById('storage-cost')
const deliveryCost = document.getElementById('delivery-cost')
const totalCost = document.getElementById('total-cost')
const productPrice = document.getElementById('product-price')
const kuponPrice = document.getElementById('kupon-price')


//  ----memory-option----
document.getElementById('8gb-memory-fee').addEventListener('click', function () {
    memoryCost.innerText = '0'
    updateTotal()
    LastTotalUpdate()
})
document.getElementById('16gb-memory-fee').addEventListener('click', function () {
    memoryCost.innerText = '180'
    updateTotal()
    LastTotalUpdate()
})

//---- storage-option---
document.getElementById('256gb-ssd-fee').addEventListener('click', function () {
    storageCost.innerText = '0'
    updateTotal()
    LastTotalUpdate()
})
document.getElementById('512gb-ssd-fee').addEventListener('click', function () {
    storageCost.innerText = '100'
    updateTotal()
    LastTotalUpdate()
})
document.getElementById('1tb-ssd-fee').addEventListener('click', function () {
    storageCost.innerText = '180'
    updateTotal()
    LastTotalUpdate()
})

// ----delivery-option----
document.getElementById('normal-delivery').addEventListener('click', function () {
    deliveryCost.innerText = '0'
    updateTotal()
    LastTotalUpdate()
})
document.getElementById('emergency-delivery').addEventListener('click', function () {
    deliveryCost.innerText = '20'
    updateTotal()
    LastTotalUpdate()

})

function LastTotalUpdate() {
    kuponPrice.innerText = totalCost.innerText;
    return kuponPrice.innerText;
}

// kupon

document.getElementById('apply-btn').addEventListener('click', function () {
    const kupon = document.getElementById('kupon')

    if (kupon.value == ('stevekaku')) {
        const discount = parseInt(totalCost.innerText) / 5;
        kuponPrice.innerText = parseInt(totalCost.innerText) - discount;

    }
    kupon.value = ''
})