function showCapital(){
    var select = document.getElementById("country");
    var capitalSpan = document.getElementById("capital");
    var selectedCountry = select.value;

    switch(selectedCountry){
        case "India":
            capitalSpan.innerText = "New Delhi";
            break;
        case "UAE":
            capitalSpan.innerText = "Abu Dhabhi";
            break;
        case "Japan":
            capitalSpan.innerText = "Tokyo"
            break;
        case "Australia ":
            capitalSpan.innerText = "Canberra"
            break;
        default:
            capitalSpan.innerText = "";
    }
}