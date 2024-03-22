console.log("PizzariaSaar");

document.getElementById("mozzarella").addEventListener("click", function() {
    const kaasalleenImg = document.getElementById("kaasalleen");
    if (kaasalleenImg.style.display === "none") {
        kaasalleenImg.style.display = "block"; //Toon de kaasalleen afbeelding wanneer erop wordt geklikt
    } else {
        kaasalleenImg.style.display = "none"; // Verberg de kaasalleen afbeelding als er nogmaals op wordt geklikt
    }
});

document.getElementById("salami").addEventListener("click", function() {
    const salamialleenImg = document.getElementById("salamialleen");
    if (salamialleenImg.style.display === "none") {
        salamialleenImg.style.display = "block"; 
    } else {
        salamialleenImg.style.display = "none"; 
    }
});

document.getElementById("paprika").addEventListener("click", function() {
    const paprikaalleenImg = document.getElementById("paprikaalleen");
    if (paprikaalleenImg.style.display === "none") {
        paprikaalleenImg.style.display = "block"; 
    } else {
        paprikaalleenImg.style.display = "none"; 
    }
});

document.getElementById("ham").addEventListener("click", function() {
    const hamalleenImg = document.getElementById("hamalleen");
    if (hamalleenImg.style.display === "none") {
        hamalleenImg.style.display = "block"; 
    } else {
        hamalleenImg.style.display = "none"; 
    }
});


document.getElementById("mozzarella").addEventListener("click", function() {
    const socheesyTekst = document.getElementById("socheesytekst");
    
    if (socheesyTekst.style.display === "none") {
        socheesyTekst.style.display = "block";
    } else {
        socheesyTekst.style.display = "none";
    }

});

document.getElementById("paprika").addEventListener("click", function() {
    const yummyTekst = document.getElementById("yummytekst");
    
    if (yummyTekst.style.display === "none") {
        yummyTekst.style.display = "block";
    } else {
        yummyTekst.style.display = "none";
    }

});

