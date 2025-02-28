
const example = addEventListener("submit", (e) => {
  e.preventDefault();

  const unit = document.getElementById("unitValue").value;
  const select = document.getElementById("selected").value;
  const displayUnits = document.getElementById("output");
  const warning = document.getElementById("warn-text");
  const clr = document.getElementById("output");
  clr.innerHTML = "";
  warning.innerHTML = "";








  const func = (value, selected) => {
    if (selected === "Millimeters") {
      var mm = value * 1;
      var abrv = "mm";
      var cm = value / 10;
      var dm = value / 100;
      var m = value / 1000;
      var Dm = value / 10000;
      var Hm = value / 100000;
      var Km = value / 1000000;
    }
    else if (selected === "Centimeters") {
      var abrv = "cm";
      var mm = value * 10;
      var cm = value * 1;
      var dm = value / 10;
      var m = value / 100;
      var Dm = value / 1000;
      var Hm = value / 10000;
      var Km = value / 100000;
    }
    else if (selected === "Decimeters") {
      var abrv = "dm";
      var mm = value * 100;
      var cm = value * 10;
      var dm = value * 1;
      var m = value / 10;
      var Dm = value / 100;
      var Hm = value / 1000;
      var Km = value / 10000;
    }
    else if (selected === "Meters") {
      var abrv = "m";
      var mm = value * 1000;
      var cm = value * 100;
      var dm = value * 10;
      var m = value * 1;
      var Dm = value / 10;
      var Hm = value / 100;
      var Km = value / 1000;
    }
    else if (selected === "DeKameters") {
      var abrv = "Dm";
      var mm = value * 10000;
      var cm = value * 1000;
      var dm = value * 100;
      var m = value * 10;
      var Dm = value * 1;
      var Hm = value / 10;
      var Km = value / 100;
    }
    else if (selected === "Hectometers") {
      var abrv = "Hm";
      var mm = value * 100000;
      var cm = value * 10000;
      var dm = value * 1000;
      var m = value * 100;
      var Dm = value * 10;
      var Hm = value * 1;
      var Km = value / 10;
    }
    else {
      var abrv = "Km";
      var mm = value * 1000000;
      var cm = value * 100000;
      var dm = value * 10000;
      var m = value * 1000;
      var Dm = value * 100;
      var Hm = value * 10;
      var Km = value * 1;
    }
    

    displayUnits.innerHTML = `
      <p class="mm"><span id="unit" style ="color: black; font-weight: 900;">${value} ${abrv} </span> is equal To <span id="converted" style ="color: black; font-weight: 900;">${mm} mm </span></p>
      <p class="dm" id="3"><span id="unit" style ="color: black; font-weight: 900;">${value} ${abrv} </span> is equal To <span id="converted" style ="color: black; font-weight: 900;">${cm}  dm </span></p>
      <p class="cm" id="4"> <span id="unit" style ="color: black; font-weight: 900;">${value} ${abrv} </span> is equal To <span id="converted" style ="color: black; font-weight: 900;">${dm} cm </span> </p>
      <p class="m" id="2"><span id="unit" style ="color: black; font-weight: 900;">${value} ${abrv}</span>  is equal To <span id="converted" style ="color: black; font-weight: 900;">${m} m </span></p>
      <p class="Hm" id="6"><span id="unit" style ="color: black; font-weight: 900;">${value} ${abrv}</span> is equal To <span id="converted" style ="color: black; font-weight: 900;">${Dm} Dm </span></p>
      <p class="Dm" id="5"><span id="unit" style ="color: black; font-weight: 900;">${value} ${abrv}</span>  is equal To <span id="converted" style ="color: black; font-weight: 900;">${Hm} Hm </span></p>
      <p class="km" id="7"><span id="unit" style ="color: black; font-weight: 900;">${value} ${abrv}</span> is equal To <span id="converted" style ="color: black; font-weight: 900;">${Km} Km </span></p>`


  }
  if (unit && select !== null) {
    switch (select) {
      case "Millimeters": func(unit, select);
        break;
      case "Centimeters": func(unit, select);
        break;
      case "Decimeters": func(unit, select);
        break;
      case "Meters": func(unit, select);
        break;
      case "DeKameters": func(unit, select);
        break;
      case "Hectometers": func(unit, select);
        break;
      case "Kilometers": func(unit, select);
        break;
      default:
        warning.textContent = "Please Select a base unit"


    }
  }
  else {
    warning.textContent = "Please input a value";
  }


});



