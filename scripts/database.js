const database = {
    docks: [
        { id: 1, location: "Shanghai, China", volume: "43.5" },
        { id: 2, location: "Busan, South Korea", volume: "21.6" },
        { id: 3, location: "Rotterdam, The Netherlands", volume: "14.35" },
        { id: 4, location: "Antwerp, Belgium", volume: "12.04" }
    ],
    haulers: [
        {id:1, name: "skipping-stone", dockID: 1 },
        {id:2, name: "HMS ButtLoader", dockID: 2 },
        {id:3, name: "Planet Express Ship", dockID: 3 },
        {id:4, name: "stinky", dockID: 4 }
    ],
    shippingShips: [
        { id: 1, name: "shlippy", haulerID: 1 },
        { id: 2, name: "SS GiggleFart", haulerID: 2 },
        { id: 3, name: "Jolly fogger", haulerID: 3 },
        { id: 4, name: "Wobbly Walrus", haulerID: 4 },
        { id: 5, name: "Booty Cruiser", haulerID: 1 }
    ]
}
export const getDocks = () => {
    // You write the code for copying the array and returning it
    return [...database.docks]
}

export const getHaulers = () => {
    return [...database.haulers]
}

export const getShippingShips = () => {
    return [...database.shippingShips]
}