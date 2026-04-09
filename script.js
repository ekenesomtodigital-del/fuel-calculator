function calculate() {
    const distance= document.getElementById("distance").value;
    const consumption= document.getElementById("consumption").value;
    const price= document.getElementById("price").value;
    if(!distance || !consumption || !price) {
        alert("Please fill all fields");
        return;
    }
    const fuelNeeded= distance/consumption;
    const totalCost= fuelNeeded*price;
    document.getElementById("result").innerHTML= `<p>Fuel Needed: ${fuelNeeded.toFixed(2)} litres</p> <p>Total Cost: &#8358;${totalCost.toFixed(2)}</p>`;
}