export function getFullYear() {
  const currentyear = new Date().getFullYear();
  return currentyear;
}

export function getFooterCopy(isIndex) {
  return isIndex ? "Holberton School" : "Holberton School main dashboard";
}

export function getLatestNotification() {
  return (
    <p>
      <strong>Urgent requirement</strong> - complete by EOD
    </p>
  );
}
