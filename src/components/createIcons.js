const createIcons = (iconsData) => {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = iconsData.href;
  a.innerHTML = iconsData.iconImg;

  li.append(a);

  return li;
};

export default createIcons;
