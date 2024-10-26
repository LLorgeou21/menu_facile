const ingredientsList = {
    1: { name: "ail" },
    2: { name: "amandes" },
    3: { name: "ananas" },
    4: { name: "avocat" },
    5: { name: "basilic" },
    6: { name: "beurre" },
    7: { name: "betterave" },
    8: { name: "bouillon de légumes" },
    9: { name: "boulette de viande" },
    10: { name: "carotte" },
    11: { name: "cannelle" },
    12: { name: "courgette" },
    13: { name: "courge butternut" },
    14: { name: "crème" },
    15: { name: "dinde" },
    16: { name: "épices" },
    17: { name: "épinards" },
    18: { name: "feta" },
    19: { name: "flocons d'avoine" },
    20: { name: "fromage" },
    21: { name: "fromage frais" },
    22: { name: "fromage râpé" },
    23: { name: "fruits d’hiver" },
    24: { name: "gnocchis" },
    25: { name: "herbes" },
    26: { name: "huile d'olive" },
    27: { name: "lait" },
    28: { name: "lait de coco" },
    29: { name: "laitue" },
    30: { name: "lasagne" },
    31: { name: "lardons" },
    32: { name: "mangue" },
    33: { name: "melon" },
    34: { name: "miel" },
    35: { name: "mozzarella" },
    36: { name: "noix" },
    37: { name: "oignon" },
    38: { name: "oeuf" },
    39: { name: "pain" },
    40: { name: "pain burger" },
    41: { name: "pain complet" },
    42: { name: "parmesan" },
    43: { name: "patate douce" },
    44: { name: "pâte à pizza" },
    45: { name: "pâte feuilletée" },
    46: { name: "pesto" },
    47: { name: "poire" },
    48: { name: "poisson" },
    49: { name: "poivron" },
    50: { name: "pomme" },
    51: { name: "pommes de terre" },
    52: { name: "porridge" },
    53: { name: "poulet" },
    54: { name: "raisins" },
    55: { name: "riz" },
    56: { name: "sauce au choix" },
    57: { name: "sauce barbecue" },
    58: { name: "sauce soja" },
    59: { name: "sauce tomate" },
    60: { name: "semoule" },
    61: { name: "spaghetti" },
    62: { name: "sucre" },
    63: { name: "tacos" },
    64: { name: "tomate" },
    65: { name: "tortillas" },
    66: { name: "viande hachée" },
    67: { name: "vinaigre balsamique" },
    68: { name: "wraps" },
    69: { name: "yaourt" },
    70: { name: "yaourt grec" }
};





const mealsBySeason = {
    spring: [
        {
            name: "Risotto aux poivrons et dinde",
            ingredients: [1, 2, 3, 4, 5] // riz, poivron, dinde, bouillon de volaille, oignon
        },
        {
            name: "Wraps de patate douce et feta",
            ingredients: [6, 7, 8, 9, 10] // patate douce, feta, tortillas, avocat, salade
        },
        {
            name: "Pizza légère aux légumes",
            ingredients: [11, 12, 2, 13, 14] // pâte à pizza, tomate, poivron, champignon, mozzarella
        },
        {
            name: "Bowl de patate douce rôtie",
            ingredients: [6, 15, 9, 16] // patate douce, quinoa, avocat, vinaigrette
        },
        {
            name: "Wrap poulet-avocat",
            ingredients: [17, 9, 8, 10] // poulet, avocat, tortillas, salade
        },
        {
            name: "Omelette aux poivrons et feta",
            ingredients: [18, 2, 7] // oeufs, poivron, feta
        },
        {
            name: "Salade tomate-mozza",
            ingredients: [12, 14, 19, 20] // tomate, mozzarella, basilic, huile d'olive
        },
        {
            name: "Tartine avocat & œuf poché",
            ingredients: [21, 9, 18] // pain, avocat, oeuf
        },
        {
            name: "Riz sauté au poulet et carottes",
            ingredients: [1, 17, 22, 23] // riz, poulet, carotte, sauce soja
        }
    ],
    summer: [
        {
            name: "Burger maison à la dinde et avocat",
            ingredients: [3, 24, 9, 10, 12] // dinde, pain à burger, avocat, salade, tomate
        },
        {
            name: "Salade de fruits frais au yaourt grec",
            ingredients: [25, 26, 27] // fruits de saison, yaourt grec, miel
        },
        {
            name: "Brochettes poulet-ananas sauce barbecue",
            ingredients: [17, 28, 29, 2] // poulet, ananas, sauce barbecue, poivron
        },
        {
            name: "Tacos au poisson et mangue",
            ingredients: [30, 31, 8, 10] // poisson, mangue, tortillas, salade
        },
        {
            name: "Pâtes au pesto maison et poivrons",
            ingredients: [32, 33, 2, 34] // pâtes, pesto, poivron, parmesan
        },
        {
            name: "Brochettes de poulet et poivrons",
            ingredients: [17, 2, 5] // poulet, poivron, oignon
        },
        {
            name: "Smoothie banane-fraises",
            ingredients: [35, 36, 37] // banane, fraises, yaourt
        },
        {
            name: "Salade melon et feta",
            ingredients: [38, 7, 39] // melon, feta, menthe
        },
        {
            name: "Toast avocat et tomate",
            ingredients: [21, 9, 12] // pain, avocat, tomate
        },
        {
            name: "Omelette aux tomates et poivrons",
            ingredients: [18, 12, 2] // oeufs, tomate, poivron
        }
    ],
    autumn: [
        {
            name: "Gnocchis de patate douce",
            ingredients: [40, 6, 41, 42] // gnocchis, patate douce, sauce tomate, fromage
        },
        {
            name: "Curry de poulet et courge butternut",
            ingredients: [17, 43, 44, 1, 45] // poulet, courge butternut, lait de coco, riz, épices
        },
        {
            name: "Pain perdu aux pommes et cannelle",
            ingredients: [46, 47, 48, 49] // pain, pommes, cannelle, oeufs
        },
        {
            name: "Salade tiède de betterave et fromage de chèvre",
            ingredients: [50, 51, 52, 16] // betterave, fromage de chèvre, noix, vinaigrette
        },
        {
            name: "Purée de patate douce et carottes",
            ingredients: [6, 22, 51, 52] // patate douce, carotte, beurre, sel
        },
        {
            name: "Wrap dinde et poire",
            ingredients: [3, 53, 8, 10] // dinde, poire, tortillas, salade
        },
        {
            name: "Riz au butternut et dinde",
            ingredients: [1, 43, 3] // riz, butternut, dinde
        },
        {
            name: "Salade pommes et noix",
            ingredients: [46, 50, 10, 16] // pommes, noix, salade, vinaigrette
        },
        {
            name: "Gratin de butternut et riz complet",
            ingredients: [43, 54, 42] // butternut, riz complet, fromage
        },
        {
            name: "Gratin de riz aux légumes et fromage",
            ingredients: [1, 55, 42] // riz, légumes variés, fromage
        }
    ],
    winter: [
        {
            name: "Lasagnes de patate douce et dinde",
            ingredients: [56, 6, 3, 42, 7] // lasagnes, patate douce, dinde, sauce tomate, fromage
        },
        {
            name: "Tarte fine poire-roquefort",
            ingredients: [57, 53, 58] // pâte brisée, poire, roquefort
        },
        {
            name: "Riz au lait crémeux aux fruits d’hiver",
            ingredients: [1, 59, 60, 61] // riz, lait, fruits d'hiver, sucre
        },
        {
            name: "Poulet croustillant aux amandes et carottes rôties",
            ingredients: [17, 62, 63, 64] // poulet, amandes, carottes, épices
        },
        {
            name: "Soupe carottes-patate douce",
            ingredients: [65, 66, 22] // carottes, patate douce, bouillon
        },
        {
            name: "Gratin dauphinois de patate douce",
            ingredients: [67, 68, 69] // pommes de terre, crème, fromage
        },
        {
            name: "Porridge banane et noix",
            ingredients: [70, 71, 72] // flocons d'avoine, banane, noix
        },
        {
            name: "Wrap poulet et patate douce",
            ingredients: [3, 6, 8, 10] // poulet, patate douce, tortillas, salade
        },
        {
            name: "Gratin de pommes de terre et carottes",
            ingredients: [67, 22, 42] // pommes de terre, carottes, fromage
        },
        {
            name: "Salade d’hiver poire et raisins",
            ingredients: [53, 73, 74] // poire, raisins, salade
        }
    ]
    
};

const personalMeals = [
    {
        name: "Gnocchis à la sauce tomates",
        ingredients: [24, 59, 42] // gnocchis, sauce tomate, parmesan
    },
    {
        name: "Lasagne classique",
        ingredients: [30, 66, 59, 37, 22, 5] // lasagnes, viande hachée, sauce tomate, oignon, fromage râpé, basilic
    },
    {
        name: "Spaghetti carbonara à l’italienne",
        ingredients: [61, 38, 42, 31] // spaghetti, œuf, parmesan, lardons
    },
    {
        name: "Eggburger",
        ingredients: [40, 38, 66, 22, 64, 11] // pain burger, œuf, steak haché, tranche de cheddar (fromage râpé), tomates, curry
    },
    {
        name: "Poulet curry au riz",
        ingredients: [53, 16, 55, 14] // poulet, épices (curry), riz, crème
    },
    {
        name: "Soupe",
        ingredients: [13, 39] // soupe potiron, crouton
    },
    {
        name: "Tacos",
        ingredients: [65, 53, 49, 55] // tortillas, poulet, poivrons, riz
    },
    {
        name: "Semoule et boulettes de viandes avec légumes",
        ingredients: [60, 9, 49, 59] // semoule, boulettes de viande, légumes (poivron), sauce tomate
    }
];


currentmeal=[];

function getCurrentSeason() {
    const month = new Date().getMonth();
    if (month >= 2 && month < 5) return "spring";   // Mars à Mai
    if (month >= 5 && month < 8) return "summer";   // Juin à Août
    if (month >= 8 && month < 11) return "autumn";  // Septembre à Novembre
    return "winter";  // Décembre à Février
}

function getRandomMeals(season) {
    currentmeal=[];
    const seasonalMeals = mealsBySeason[season];
    const allMeals = [...seasonalMeals, ...personalMeals];
    
    // Mélanger les plats
    const shuffledMeals = allMeals.sort(() => 0.5 - Math.random());
    currentmeal=shuffledMeals.slice(0, 8);
    // Retourner les 5 premiers plats
    return shuffledMeals.slice(0, 8);
}

function displayMeals(season) {
    const mealsContainer = document.getElementById("meals-container");
    mealsContainer.innerHTML = ""; // Vider le conteneur avant d'ajouter les nouveaux plats

    const meals = getRandomMeals(season);

    meals.forEach(meal => {
        const mealElement = document.createElement("div");
        mealElement.classList.add("meal");

        // Vérifier si tous les ingrédients sont définis avant de les afficher
        const ingredientNames = meal.ingredients.map(id => {
            const ingredient = ingredientsList[id];
            return ingredient ? ingredient.name : "Ingrédient inconnu"; // Utiliser une valeur par défaut si l'ingrédient est manquant
        }).join(', ');

        mealElement.innerHTML = `<h3>${meal.name}</h3><p>Ingrédients : ${ingredientNames}</p>`;
        mealsContainer.appendChild(mealElement);
    });
}


document.addEventListener("DOMContentLoaded", () => {
    const season = getCurrentSeason();
    displayMeals(season);
});

document.getElementById("reload-all").addEventListener("click", () => {
    const season = getCurrentSeason();
    displayMeals(season);
});

document.getElementById("savePdfBtn").addEventListener("click", () => {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Calcul de la date de la semaine
    const today = new Date();
    const dayOfWeek = today.getDay();
    
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - (dayOfWeek + 6) % 7); // Lundi

    const endOfWeek = new Date(today);
    endOfWeek.setDate(today.getDate() + (6 - dayOfWeek)); // Dimanche

    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const startDateStr = startOfWeek.toLocaleDateString('fr-FR', options);
    const endDateStr = endOfWeek.toLocaleDateString('fr-FR', options);

    // Titre du document PDF avec les dates, centré
    doc.setFontSize(16);
    const title = `Menu de la semaine (${startDateStr} au ${endDateStr} ${new Date().getFullYear()})`;
    const titleWidth = doc.getTextWidth(title);
    const pageWidth = doc.internal.pageSize.getWidth();
    doc.text(title, (pageWidth - titleWidth) / 2, 10);
    doc.setFontSize(12);

    let yOffset = 20;

    if (currentmeal.length === 0) {
        doc.text("Aucun plat disponible pour le moment.", (pageWidth - doc.getTextWidth("Aucun plat disponible pour le moment.")) / 2, yOffset);
    } else {
        currentmeal.forEach((meal, index) => {
            const mealName = meal.name || "Plat inconnu";
            const ingredients = meal.ingredients.map(id => {
                const ingredient = ingredientsList[id];
                return ingredient ? ingredient.name : "Ingrédient inconnu";
            });

            // Nom du plat, centré
            doc.text(`${index + 1}. ${mealName}`, (pageWidth - doc.getTextWidth(`${index + 1}. ${mealName}`)) / 2, yOffset);
            yOffset += 8;

            // Liste des ingrédients pour chaque plat
            ingredients.forEach(ingredient => {
                doc.text(`- ${ingredient}`, (pageWidth - doc.getTextWidth(`- ${ingredient}`)) / 2, yOffset);
                yOffset += 6;

                // Vérifiez si le bas de la page est atteint
                if (yOffset > 270) { // 270 est une limite de confort, peut être ajustée
                    doc.addPage();
                    yOffset = 10; // Réinitialiser l'offset vertical pour la nouvelle page
                }
            });

            // Ligne de séparation entre les plats
            yOffset += 10;

            // Vérifiez si le bas de la page est atteint après l'ajout de l'espacement
            if (yOffset > 270) {
                doc.addPage();
                yOffset = 10;
            }
        });
    }

    // Ajout d'une liste complète des ingrédients
    const allIngredients = new Set(); // Utiliser un Set pour éviter les doublons

    currentmeal.forEach(meal => {
        meal.ingredients.forEach(id => {
            const ingredient = ingredientsList[id];
            if (ingredient) {
                allIngredients.add(ingredient.name);
            }
        });
    });

    // Titre de la liste complète des ingrédients
    doc.addPage();
    doc.text("Liste complète des ingrédients", (pageWidth - doc.getTextWidth("Liste complète des ingrédients")) / 2, 10);
    yOffset = 20;

    // Ajout des ingrédients
    allIngredients.forEach(ingredient => {
        doc.text(`- ${ingredient}`, (pageWidth - doc.getTextWidth(`- ${ingredient}`)) / 2, yOffset);
        yOffset += 6;

        // Vérifiez si le bas de la page est atteint
        if (yOffset > 270) {
            doc.addPage();
            yOffset = 10;
        }
    });

    // Construction du nom du fichier avec la plage de dates
    const pdfFileName = `menu_semaine_${startOfWeek.toLocaleDateString('fr-FR').replace(/ /g, '_')}_${endOfWeek.toLocaleDateString('fr-FR').replace(/ /g, '_')}.pdf`;

    // Enregistrement du PDF sous le nom généré
    doc.save(pdfFileName);
});
