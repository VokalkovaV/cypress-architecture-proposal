// Soubor pro univerzální pomocné funkce, používám ho například pro vytváření nebo úpravu dat

class Base {
    
    // Example
    /**
     * @function to get username in cypress.env.json in a format which is required to verify
     * if menu item with name on user profile page is correct
     * @param name - Cypress.env('nameOfUser')
     * @param capitals = true if you want format name into all capital letters
     */
    getUserNameInUserProfileMenuFormat(
        name,
        capitals = true,
    ) {
        const newString = name.split(' ')
        if (capitals === true) {
            return (`${newString[1]}, ${newString[0]}`).toUpperCase()
        }
        return (`${newString[1]}, ${newString[0]}`)
    }
    
}

export const base = new Base()