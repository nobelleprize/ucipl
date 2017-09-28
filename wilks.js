function computeWilks(){
    var weight = document.getElementById('weight').value;
    var total = document.getElementById('total').value;
     if (document.getElementById('units').value === 'lb'){
          weight = (weight * 0.453592)
          total = (total * 0.453592)
       }
     if (document.getElementById('sex').value === 'female'){
        a = 594.31747775582;
        b = -27.23842536447;
        c = 0.82112226871;
        d = -0.00930733913;
        e = 4.731582e-05;
        f = -9.054e-08;
      }else{
        a = -216.0475144;
        b = 16.2606339;
        c = -0.002388645;
        d = -0.00113732;
        e = 7.01863e-06;
        f = -1.291E-08;
     }
    var coeff = (500) / ((a) + (b * weight) + (c * Math.pow(weight, 2)) + (d * Math.pow(weight, 3)) + (e * Math.pow(weight, 4)) + (f * Math.pow(weight, 5)));
    var wilks = (coeff * total).toFixed(2);
        document.getElementById('wilks').innerHTML = "Wilks = " + wilks;
    }