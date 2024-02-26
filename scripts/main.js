import { haulerList } from "./hauling.js"
import { dockList } from "./docks.js"
import { shippingShipList } from "./shippingships.js"

const mainContainer = document.querySelector(".container")

const applicationHTML = `
<h1>SHIPPING SHIPPING SHIPPIES</h1>
<article class="details">
    <section class="haulerbox">
        <h2>Haulers</h2>
        ${haulerList()}
    </section>
    <section class="dockbox">
        <h2>Docks</h2>
        ${dockList()}
    </section>
    <section class="shipbox">
        <h2>Shipping Ships</h2>
        ${shippingShipList()}
    </section>
</article>
`

mainContainer.innerHTML = applicationHTML