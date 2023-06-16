function increament(plus,price,item){
    var count = document.getElementById(plus);
    var inPrice = document.getElementById(price);
    var inItem = document.getElementById(item);
    var sub = document.getElementById('sub-total').innerHTML;
    var tax = document.getElementById('tax-total').innerHTML;
    var totalPrice = document.getElementById('total').innerHTML;
    if (count.value == 10)
    {
        count.value = 10
        alert(count.value + " is maximum limit.")
    }
    else
    {
        count.value++;
        var result = parseInt(inPrice.innerHTML) + parseInt(inItem.innerHTML);
        inPrice.innerHTML = result;
        
        var subTotal = parseInt(inItem.innerHTML) + parseInt(sub);
        document.getElementById('sub-total').innerHTML = subTotal;

        var taxTotal = parseInt(inItem.innerHTML) + parseFloat(tax);
        var total = taxTotal + parseFloat(totalPrice);
        document.getElementById('total').innerHTML = total;

    }   
}

function decreament(minus,price,item) {
    var count = document.getElementById(minus);
    var decPrice = document.getElementById(price);
    var decItem = document.getElementById(item);
    var sub = document.getElementById('sub-total').innerHTML;
    var tax = document.getElementById('tax-total').innerHTML;
    var totalPrice = document.getElementById('total').innerHTML;
    if (count.value == 0)
    {
        count.value = 0;
        alert(count.value + " is minimum limit.");
    }
    else
    {
        count.value--;
        var result = parseInt(decPrice.innerHTML)-parseInt(decItem.innerHTML);
        decPrice.innerHTML = result;

        var subTotal = parseInt(sub) - parseInt(decItem.innerHTML) ;
        document.getElementById('sub-total').innerHTML = subTotal;

        var decTotal = parseFloat(totalPrice) - parseInt(decItem.innerHTML);
        var extractSub = decTotal - parseFloat(tax);
        document.getElementById('total').innerHTML = extractSub;
  
    }
}