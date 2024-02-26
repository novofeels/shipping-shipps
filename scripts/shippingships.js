import { getShippingShips } from "./database.js"

export const shippingShipList = () => {
    const shippingShips = getShippingShips()

    let shippingShipsHTML = "<ul>"

    for (const ship of shippingShips) {
        shippingShipsHTML += `<li class="ship-name" data-id="${ship.id}" data-hauler-id="${ship.haulerID}" data-name="${ship.name}">${ship.name}</li>`
    }

    shippingShipsHTML += "</ul>"

    return shippingShipsHTML
};

