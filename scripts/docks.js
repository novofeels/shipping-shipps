import { getDocks } from "./database.js";

export const dockList = () => {
    const docks = getDocks();

    let docksHTML = "<ul>";

    for (const dock of docks) {
        docksHTML += `<li class="dock-name" data-id="${dock.id}" data-location="${dock.location}" data-volume="${dock.volume}">${dock.location}</li>`;
    }

    docksHTML += "</ul>";

    return docksHTML;
};
