// var name = "mark";
// var fatherName = "noman A";

// alert(name)
// alert(fatherName)

// var name = "udhay bhai";

// alert(name)


// var caseQty = udhaybhai;
//  alert(caseQty);

function nomi() {

    let num1 = document.getElementById('num1')
    let num2 = document.getElementById('num2');
    let result = document.getElementById('result')

    num1 = parseInt(num1.value);
    num2 = parseInt(num2.value);

    result.innerHTML = num1 + num2;
  
}

function nomi1() {

    let num3 = document.getElementById('num3')
    let num4 = document.getElementById('num4');
    let result = document.getElementById('result')

    num3 = parseInt(num3.value);
    num4 = parseInt(num4.value);

    result.innerHTML = num3 - num4;
  
}

function nomi2() {

    let num5 = document.getElementById('num5')
    let num6 = document.getElementById('num6');
    let result = document.getElementById('result')

    num5 = parseInt(num5.value);
    num6 = parseInt(num6.value);

    result.innerHTML = num5 * num6;
  
}

function nomi3() {

    let num7 = document.getElementById('num7')
    let num8 = document.getElementById('num8');
    let result = document.getElementById('result')

    num7 = parseInt(num7.value);
    num8 = parseInt(num8.value);

    result.innerHTML = num7 / num8;
  
}