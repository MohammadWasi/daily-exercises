const defangIPaddr = (address) => {
  const defangedip = address.split('.').join('[.]');
  return defangedip;
};
export { defangIPaddr };
