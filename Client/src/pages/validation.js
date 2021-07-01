export const validateEmail = (data) => {
  if (
    data.match(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    )
  ) {
    return true;
  } else {
    return false;
  }
};

export const validatePassword = (data) => {
  if (
    data.match(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/
    )
  ) {
    return true;
  } else {
    return false;
  }
};
export const validatePhoneNumber = (data) => {
  if (data.match(/^[\d]{4}-[\d]{7}$/)) {
    return true;
  } else {
    return false;
  }
};
export const validateName = (data) => {
  if (data.match(/^[a-z]{1,}$/)) {
    return true;
  } else {
    return false;
  }
};
