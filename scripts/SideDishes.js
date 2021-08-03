import { getSides, setSide, getComboChoices } from "./database.js"

const sideDishes = getSides()

document.addEventListener(
    "change", 
    (event) => {
    if (event.target.name === "sideDish") {
        setSide(parseInt(event.target.value))
    }
})

// Requirement: The radio input elements that this component funcion renders must all have a name of "sideDish"
export const Sides = () => {
    const comboChoices = getComboChoices()
    let html = "<ul>"

    const listItems = sideDishes.map(side => {
        if (side.id === comboChoices.sideId) {
        return `<li>
            <input type="radio" name="sideDish" value="${side.id}" required checked /> ${side.title}
        </li>`
        } else {
            return `<li>
            <input type="radio" name="sideDish" value="${side.id}" required /> ${side.title}
        </li>`
        }
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}

