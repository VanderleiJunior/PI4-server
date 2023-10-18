function validName(name) {
  if (name.trim() === "") {
    return false;
  }

  const regex = /^[a-zA-ZÀ-ÖØ-öø-ÿ -']+$/;

  if (
    name[0] === " " ||
    name[0] === "-" ||
    name[name.length - 1] === " " ||
    name[name.length - 1] === "-"
  ) {
    return false;
  }

  if (name.includes("  ") || name.includes("--")) {
    return false;
  }

  if (
    /^[^a-zA-ZÀ-ÖØ-öø-ÿ' -]/.test(name[0]) ||
    /[^a-zA-ZÀ-ÖØ-öø-ÿ' -]$/.test(name[name.length - 1])
  ) {
    return false;
  }

  return regex.test(name);
}

export default validName;
