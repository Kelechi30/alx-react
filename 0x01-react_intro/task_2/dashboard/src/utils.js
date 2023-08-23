export function getFullYear() {
  const currentyear = new Date().getFullYear();
  return currentyear;
}

export function getFooterCopy(isIndex) {
  return isIndex ? "Holberton School" : "Holberton School main dashboard";
}
