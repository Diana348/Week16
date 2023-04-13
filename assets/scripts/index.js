const prices = {
  reno: {
    Sandero: {
      Бензин: 500000,
      Дизель: 550000,
      Газ: 520000,
      Электричество: 750000,
    },
    Logan: {
      Бензин: 530000,
      Дизель: 580000,
      Газ: 550000,
      Электричество: 800000,
    },
  },
  opel: {
    Corsa: {
      Бензин: 600000,
      Дизель: 650000,
      Газ: 620000,
      Электричество: 900000,
    },
    Astra: {
      Бензин: 630000,
      Дизель: 680000,
      Газ: 650000,
      Электричество: 950000,
    },
  },
  mazda: {
    2: {
      Бензин: 700000,
      Дизель: 750000,
      Газ: 720000,
      Электричество: 1050000,
    },
    3: {
      Бензин: 730000,
      Дизель: 780000,
      Газ: 750000,
      Электричество: 1100000,
    },
  },
  jaguar: {
    XE: {
      Бензин: 1500000,
      Дизель: 1550000,
      Газ: 1520000,
      Электричество: 2000000,
    },
    XF: {
      Бензин: 1530000,
      Дизель: 1580000,
      Газ: 1550000,
      Электричество: 2050000,
    },
  },
};

const submitBtn = document.getElementById("submit-form");
const carBrand = document.getElementById("car-brand");
const carModel = document.getElementById("car-model");
const carFuel = document.getElementsByName("car-fuel");
const carEngine = document.getElementById("car-engine");
const carCondition = document.getElementsByName("car-condition");
const carOwner = document.getElementsByName("car-owner");
const carOwnerField = document.getElementById("car-owner");
const priceField = document.getElementById("price");
const carPayment = document.getElementById("car-payment");
const engineError = document.getElementById("engine-error");

console.log(carFuel);
submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  let brand = carBrand.value;
  let model = carModel.value;
  let fuel;
  let engine = +carEngine.value;
  let condition = "";
  let owners = "";

  carFuel.forEach((elem) => {
    if (elem.checked) {
      fuel = elem.value;
    }
  });
  carOwner.forEach((elem) => {
    if (elem.checked) {
      owners = elem.value;
    }
  });
  carCondition.forEach((elem) => {
    if (elem.checked) {
      condition = elem.value;
    }
  });

  let price = prices[brand][model][fuel];
  console.log(price);

  if (engine >= 2 && engine < 3) {
    price += 50000;
  } else if (engine >= 3 && engine <= 3.5) {
    price += 150000;
  }
  console.log(price);

  if (condition == "new") {
    price += 300000;
  } else if (owners == "less") {
    price += 150000;
  }
  console.log(price);

  priceField.innerHTML = price;
});

carBrand.addEventListener("change", changeModels);

function changeModels() {
  const brand = carBrand.value;
  const models = prices[brand];
  carModel.innerHTML = "";
  Object.keys(models).forEach((model) => {
    const option = document.createElement("option");
    option.value = model;
    option.textContent = model;
    carModel.appendChild(option);
  });
}

carCondition.forEach((cond) => {
  cond.addEventListener("click", function () {
    this.value == "used"
      ? (carOwnerField.style.display = " block")
      : (carOwnerField.style.display = " none");
  });
});

changeModels();
