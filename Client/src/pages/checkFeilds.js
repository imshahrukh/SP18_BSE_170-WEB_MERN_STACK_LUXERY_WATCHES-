export const checkAddItemFeilds = (
  price,
  item,
  name,
  brand,
  status,
  weight,
  discription,
  model,
  caseMaterial,
  caseSize,
  caseThickness,
  tags
) => {
  if (
    caseThickness === 0 &&
    tags === "" &&
    price === 0 &&
    item === "" &&
    name === "" &&
    brand === "" &&
    status === 0 &&
    weight === "" &&
    discription === 0 &&
    model === "" &&
    price === 0 &&
    item === "" &&
    caseMaterial === 0 &&
    caseSize === ""
  ) {
    return false;
  } else {
    return true;
  }
};

export const checkRegistrationFeilds = (
  email,
  password,
  firstName,
  lastName,
  store,
  date,
  phoneNumber,
  gender,
  city,
  address
) => {
  if (
    email === "" &&
    password === "" &&
    firstName === "" &&
    lastName === "" &&
    store === "" &&
    date === "" &&
    phoneNumber === "" &&
    gender === "" &&
    city === "" &&
    address === ""
  ) {
    return false;
  } else {
    return true;
  }
};
