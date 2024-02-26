import { getHaulers } from "./database.js";

export const haulerList = () => {
    const haulers = getHaulers();

    let haulersHTML = "<ul>";

    for (const hauler of haulers) {
        haulersHTML += `<li class="hauler-name" data-id="${hauler.id}" data-dock-id="${hauler.dockID}" data-name="${hauler.name}">${hauler.name}</li>`;
    }

    haulersHTML += "</ul>";

    return haulersHTML;
};
