export const formationsAndDiplomes = [
    {
        date: 2020,
        nom: "Développeur web et mobile",
        ecole: "Wild Code School",
        lieu: "Biarritz (64)",
        contenu: {
            outils: "nodeJS, JS, React, expressJs, API rest",
            dev: {
                Projet1: "html/css/js",
                Projet2: "front React avec api externe",
                Projet3: "front react et back expressJs",
            },
        },
    },
    {
        date: 2013,
        nom: "Développeur logiciel",
        ecole: "AFPA",
        lieu: "Pont-de-Claix (38)",
        contenu: [
            {
                outils: "asp.net, SQL Server, winforms, EF, C#",
                dev: {
                    projet1:
                        "application winform de jestion de fabrication de pistons (en groupe",
                    projet2:
                        "site e-commerce de vente de CD front et back avec web service (en solo)",
                },
            },
        ],
    },
    {
        date: 1994,
        nom: "Formation technique pour chef de service",
        ecole: "ITECH, LT Diderot",
        lieu: "Lyon (69)",
        contenu: {
            outils: "fiches, de prix, décomposition et analyse de tissus",
        },
    },
    {
        date: 1991,
        nom: "BTS Textile option Tissage",
        ecole: "LT Diderot",
        lieu: "Lyon (69)",
        contenu: {
            outils:
                "tissage armuré et jacquard, décomposition de tissus, analyses de fils et de matières",
            projet1:
                "tissu cloqué 100% coton par simple lavage à haute température",
        },
    },
    // {
    //     date: 1989,
    //     nom: "Bac F3 (électrotechnique)",
    //     ecole: "LT Diderot",
    //     lieu: "Lyon (69)",
    //     contenu: [],
    // },
];

export const experiencesProfessionnelles = [
    {
        date: "2020-2021",
        nom: "Wild Code School",
        lieu: "Biarritz (64)",
        contenu: [
            {
                projet: "Star-Burger",
                description: "Site de burger façon 3 etoiles",
                technique: ["html", "css", "javascript", "git"],
                lien:
                    "https://wildcodeschool.github.io/btz_p1_star-burgers/index.html",
                github: "https://github.com/DavidDvpt/btz_p1_star-burgers",
            },
            {
                projet: "World of Wildcraft",
                description:
                    "Recherche de guilde et de joueur de WoW à haut ranking",
                technique: ["react", "bootstrap", "reactstrap", "axios", "git"],
                lien: "https://worldofwildcraft.netlify.app/",
                github: "https://github.com/DavidDvpt/btz-0920-p2-wow",
            },
            {
                projet: "Hackathon 24h - Viking-invasion",
                description:
                    '"Back to the future" Outil pour aider les viking dans leurs pillages',
                technique: ["react", "bootstrap", "reactstrap", "axios", "git"],
                lien: "https://viking-invasion.netlify.app/",
                github:
                    "https://github.com/TheodoreLefrancois/vikings-invasion",
            },
            {
                projet: "tre6clope",
                description:
                    "Application admin et client pour l'association 'Tree6clope'",
                technique: [
                    "nodejs",
                    "react",
                    "expressjs",
                    "materialui",
                    "mysql",
                    "prisma",
                ],
                lien: "",
                github: "",
            },
        ],
    },
    {
        date: "2014",
        nom: "e-Obs Technologies",
        lieu: "Roanne (42)",
        contenu: [
            {
                projet: "Ajout de Module CMS",
                description:
                    "Module permettant l'affectation de vehicules et de livreurs à toute commande passée en magasin ainsi que la gestion du planning",

                technique: ["php", "MVC", "mysql", "javascript", "tortoise"],
                lien: "",
                github: "",
            },
            {
                projet: "Ajout d'outil javascript",
                description:
                    "DAL de gestion de google map API pour intégrer l'itinéraire à l'outil de livraison des commandes",
                technique: ["javascript", "php", "mysql", "google map API"],
                lien: "",
                github: "",
            },
        ],
    },
    {
        date: "2013-2014",
        nom: "AFPA",
        lieu: "Pont-de-Claix (38)",
        contenu: [
            {
                projet: "Gestion de fabrication de pistons",
                description:
                    "Gestion de qualité des pistons avec utilisation de rôles utilisateurs",
                technique: ["Windows Forms", "sqlserver", "c#", "net"],
                lien: "",
                github: "",
            },
            {
                projet: "Site e-commerce de vente de CD",
                description:
                    "Gestion de l'identification, du catalogue, du panier, de la commande et du paiement par web service",
                technique: ["aspnet", "sqlserver", "c#", "net", "Web Service"],
                lien: "",
                github: "",
            },
        ],
    },
    {
        date: "1993-2020",
        nom: "Tissages d'Ameublement de la Loire (TAL)",
        contenu: [
            {
                projet: "CAO - croisement de fils",
                description:
                    "Adaptation des esquisses papier en fichier informatique pour mécanique Jacquard",
                // technique: ["Nedgraphics", "Staubli", "Dornier"],
                technique: [],
                lien: "",
                github: "",
            },
            // {
            //     projet: "Gestion de collections",
            //     description:
            //         "Processus complet du dessin papier au produit fini sur robrack",
            //     technique: ["Ordonnancement", "Stocks", "Prix"],
            //     lien: "",
            //     github: "",
            // },
            {
                projet: "Maintenance informatique",
                description:
                    "Petite maintenance et interlocuteur des prestataires informatiques",
                // technique: ["windows", "intranet", "sauvegardes"],
                technique: [],
                lien: "",
                github: "",
            },
        ],
    },
];
