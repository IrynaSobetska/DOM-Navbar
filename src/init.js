import "./event/toggleListener.js";

import createLink from "./components/createLink.js";
import createIcons from "./components/createIcons.js";
import { data } from "./data.js";

const links = document.querySelector(".links");
const icons = document.querySelector(".social-icons");

data.links.forEach((linkData) => {
  const link = createLink(linkData);
  links.append(link);
});

data.icons.forEach((iconData) => {
  const icon = createIcons(iconData);
  icons.append(icon);
});
