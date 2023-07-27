const createLink = (linkData) => {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = linkData.src;
  a.innerHTML = linkData.title;

  li.append(a);

  return li;
};

export default createLink;
