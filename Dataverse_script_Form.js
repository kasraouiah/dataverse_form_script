function getCurrentUserName() {
    var currentUserName = Xrm.Utility.getGlobalContext().userSettings.userName; // Obtenir le nom de l'utilisateur
    var message = currentUserName + ": Your JavaScript code in action!";
    console.log(message);
}

// Fonction exécutée sur l'événement OnChange d'une colonne
function dynamics365_OnChange(executionContext) {
    var formContext = executionContext.getFormContext();
    formContext.ui.controls.get("ahmed_userm").setVisible(false);

    // Vérifier si le champ "name" contient une valeur
    /*
    var accountName = formContext.getAttribute("name").getValue();
    if (accountName && accountName.toLowerCase().includes("dynamics")) {
        formContext.getAttribute("websiteurl").setValue("https://www.dynamics365.com");
        formContext.getAttribute("telephone1").setValue("92-000-11001100");
        formContext.getAttribute("description").setValue("Website URL, Phone, and Description set using custom script.");
    }
    */
}
