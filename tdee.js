function computeTDEE(){
    var weight = document.getElementById('t-weight').value;
    var height = document.getElementById('height').value * 2.54;
    var age = document.getElementById('age').value;
    if (document.getElementById('t-units').value === 'lb'){
        weight = (weight * 0.453592)
     }
    if (document.getElementById('t-sex').value === 'female'){
        c=-161
    }else{
        c=5

    }
    if (document.getElementById('lifestyle').value === 'sedentary'){
        a=1.2
    }
    if (document.getElementById('lifestyle').value === 'lightly'){
        a=1.375
    }
    if (document.getElementById('lifestyle').value === 'moderate'){
        a=1.55
    }
    if (document.getElementById('lifestyle').value === 'very'){
        a=1.725
    }
    if (document.getElementById('lifestyle').value === 'extremely'){
        a=1.9
    }

    var TDEE = (((10*weight) + (6.25*height) - (5*age) + c)*a).toFixed(0);
        document.getElementById('TDEE').innerHTML = "TDEE = " + TDEE;
    }