const vehicleSelect = document.getElementById("vehicle");
const consumptionInput = document.getElementById("consumption");
vehicleSelect.addEventListener("change", function () {
  if (this.value) {
    consumptionInput.value = this.value;
  }
});
function calculate() {
  const distance = document.getElementById("distance").value;
  const consumption = document.getElementById("consumption").value;
  const price = document.getElementById("price").value;
  if (!distance || !consumption || !price) {
    alert("Please fill all fields");
    return;
  }
  const fuelNeeded = distance / consumption;
  const totalCost = fuelNeeded * price;
  document.getElementById("result").innerHTML = `
    <p><strong>Fuel Needed:</strong> ${fuelNeeded.toFixed(2)} litres</p>
    <p><strong>Total Cost:</strong> ₦${Number(totalCost).toLocaleString()}</p>
  `;
}
