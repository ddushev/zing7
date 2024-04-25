const isEmailValid = (email: string) => {
  return /^[a-zA-Z0-9._\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,4}$/.test(email);
};

export default isEmailValid;
