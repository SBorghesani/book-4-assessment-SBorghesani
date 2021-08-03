import { getEntrees, getComboChoices, setEntree } from "./database.js"

const entrees = getEntrees()

document.addEventListener("change", (event) => {
    if (event.target.name === "entree") {
        setEntree(parseInt(event.target.value))
    }
})

// Requirement: The radio input elements that this component funcion renders must all have a name of "entree"

export const Entrees = () => {
    const comboChoices = getComboChoices()
    let html = "<ul>"

    const listItems = entrees.map(entree => {
        if (entree.id === comboChoices.entreeId) {
            return `<li>
                <input type ="radio" name="entree" value="${entree.id}" required checked/> ${entree.name}
            </li>`
        } else {
            return `<li>
            <input type ="radio" name="entree" value="${entree.id}" required /> ${entree.name}
        </li>` 
        }
    })

    html += listItems.join("")
    html += "</ul>"
    return html
}