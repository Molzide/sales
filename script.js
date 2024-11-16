window.addEventListener('load', function() {
    let prixD = parseFloat(document.getElementById("prixD").textContent);
    let prixA = parseFloat(document.getElementById("prixA").textContent);
    let pourcentage = parseInt(((prixD-prixA)/prixD)*100)
    console.log(pourcentage + "%")

    const pourcentageT = document.getElementById("pourcentage");
    const pourcentageTxt = document.getElementById("pourcentage").textContent;

    pourcentageT.outerHTML = '<span id="pourcentageA">'+pourcentage+'% '+pourcentageTxt+'</span>';

});