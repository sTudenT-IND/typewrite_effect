const timeUnits = {
  // Common Time Units
  "second (s)": 1,
  "minute (min)": 60,
  "hour (hr)": 3600,
  "day": 86400,
  "week": 604800,
  "month (avg)": 2629746,
  "year": 31536000,
  "leap year": 31622400,
  "decade": 315360000,
  "century": 3153600000,
  "millennium": 31536000000,

  // Smaller Units
  "millisecond (ms)": 1 / 1000,
  "microsecond (µs)": 1 / 1_000_000,
  "nanosecond (ns)": 1 / 1_000_000_000,
  "picosecond (ps)": 1 / 1_000_000_000_000,
  "femtosecond (fs)": 1 / 1_000_000_000_000_000,
  "attosecond (as)": 1 / 1_000_000_000_000_000_000,
  "zeptosecond (zs)": 1 / 1_000_000_000_000_000_000_000,
  "yoctosecond (ys)": 1 / 1_000_000_000_000_000_000_000_000,

  // Larger Calendar-Based Units
  "fortnight": 1209600,
  "quarter (Q)": 7889238,
  "semester": 15778476,
  "lustrum": 157680000,
  "olympiad": 126144000,
  "epoch": 3153600000,
  "era": 31536000000
};

const fromSelect = document.getElementById("fromUnit");
const toSelect = document.getElementById("toUnit");

// Populate dropdowns
Object.keys(timeUnits).forEach(unit => {
  const option1 = new Option(unit, unit);
  const option2 = new Option(unit, unit);
  fromSelect.appendChild(option1);
  toSelect.appendChild(option2);
});

// Default selections
fromSelect.value = "second (s)";
toSelect.value = "minute (min)";

function convertTime() {
  const value = parseFloat(document.getElementById("inputValue").value);
  const from = fromSelect.value;
  const to = toSelect.value;
  const resultDiv = document.getElementById("result");

  if (isNaN(value)) {
    resultDiv.textContent = "⚠️ Please enter a valid number.";
    resultDiv.style.color = "red";
    return;
  }

  const valueInSeconds = value * timeUnits[from];
  const convertedValue = valueInSeconds / timeUnits[to];

  resultDiv.style.color = "#004d40";
  resultDiv.innerHTML = `✅ <strong>${value}</strong> ${from} = <strong>${convertedValue.toLocaleString()}</strong> ${to}`;
}
