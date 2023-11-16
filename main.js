const usersHuman = [{
        type: "humain",
        name: "John Doe",
        email: "j.smith@gmail.com",
        age: 25
    },
    {
        type: "humain",
        name: "Jane Smith",
        email: "ja.doe@sfr.fr",
        age: 5
    },
    {
        type: "humain",
        name: "Le Vénérable",
        email: "levy@gmail.com",
        age: 500
    }
];

const usersPet = [{
        type: "animal de compagnie",
        espece: "chien",
        name: "Rox",
        age: 7,
        propriétaire: "John Doe"
    },
    {
        type: "animal de compagnie",
        espece: "renard",
        name: "Roukie",
        age: 300,
        propriétaire: "Le Vénérable"
    }
];

const usersXeno = [{
        type: "Xeno",
        espece: "Krogan",
        name: "Wrex",
        menace: "Rouge",
        age: 45
    },
    {
        type: "Xeno",
        espece: "Turien",
        name: "Garrus",
        menace: "Vert",
        age: 35
    },
    {
        type: "Xeno",
        espece: "Asari",
        name: "Liara",
        menace: "ULTRA Rouge",
        age: 25
    }
];

const tabData = [];
tabData.push(usersHuman,usersPet,usersXeno);

function afficherHumain(humains) {
    console.log("--- -- -");
    console.log("Nom:",humains.name);
    console.log("Email:",humains.email);
    console.log("Âge:",humains.age);
}

function afficherAnimal(animaux) {
    console.log("--- -- -");
    console.log("Nom:",animaux.name);
    console.log("Espèce:",animaux.espece);
    console.log("Âge:",animaux.age);
    console.log("Proprio:",animaux.propriétaire);
}

function afficherXeno(xenos) {
    console.log("--- -- -");
    console.log("Nom:",xenos.name);
    console.log("Espèce:",xenos.espece);
    console.log("Âge:",xenos.age);
    console.log("Niv de menace:",xenos.menace);
}

function profil(tab) {
    for(let i = 0; i < tab.length; i++) {
        if(tab[i].type == "humain") {
            afficherHumain(tab[i]);
        } else if (tab[i].type == "animal de compagnie") {
            afficherAnimal(tab[i]);
        } else if (tab[i].type == "Xeno") {
            afficherXeno(tab[i]);
        } else {
            console.log("Type de Profil non Existant");
        }
    }
}

console.log("Tests profil(x):");
profil(usersHuman);
profil(usersPet);
profil(usersXeno);

console.log("------------------------------------ ---- --- -- -");

function profilAll(grandTab) {
    for(let i = 0; i < grandTab.length; i++) {
        profil(grandTab[i]);
    }
}

console.log("Test profilAll(y):");
profilAll(tabData);