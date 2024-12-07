// Définir les cartes et les joueurs
const suites = ['Epees', 'Pieces', 'Batons', 'Coupes'];
const valeursCartes = [1, 2, 3, 4, 5, 6, 7, 10, 11, 12];
let deck = [];
let joueurs = [];
let points = [0, 0]; // Équipe 1 et Équipe 2

// Création du deck
function createDeck() {
    deck = [];
    suites.forEach(suit => {
        valeursCartes.forEach(value => {
            deck.push({ suit, value });
        });
    });
}

// Mélanger les cartes
function shuffleDeck() {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
}

// Distribution des cartes
function dealCards() {
    joueurs = [
        { name: "Joueur 1", hand: [] },
        { name: "Joueur 2", hand: [] },
        { name: "Joueur 3", hand: [] },
        { name: "Joueur 4", hand: [] },
    ];

    for (let i = 0; i < 4; i++) {
        joueurs.forEach(player => {
            player.hand.push(deck.pop());
        });
    }
}

// Afficher les mains des joueurs
function displayHands() {
    joueurs.forEach((player, index) => {
        const handDiv = document.querySelector(`#player${index + 1} .hand`);
        handDiv.innerHTML = '';
        player.hand.forEach(card => {
            const cardDiv = document.createElement('div');
            cardDiv.className = 'card';
            cardDiv.textContent = `${card.value} ${card.suit}`;
            handDiv.appendChild(cardDiv);
        });
    });
}
// Boutons
const shuffleButton = document.getElementById('shuffle-button');
const dealButton = document.getElementById('deal-button');
const playButton = document.getElementById('play-button');

// Mélanger les cartes
shuffleButton.addEventListener('click', () => {
    shuffleDeck();
    alert('Les cartes ont été mélangées !');
});

// Distribuer les cartes
dealButton.addEventListener('click', () => {
    dealCards();
    displayHands();
    alert('Les cartes ont été distribuées aux joueurs.');
});

// // Jouer un tour
playButton.addEventListener('click', () => {
    alert('Début du tour !');    
    playTurn();
    
});

// Gestion des sous-parties
document.getElementById('grand-button').addEventListener('click', () => {
    alert('Grand joué : Comparez les plus grandes cartes entre les joueurs.');
});

document.getElementById('petit-button').addEventListener('click', () => {
    alert('Petit joué : Comparez les plus petites cartes entre les joueurs.');
});

document.getElementById('pairs-button').addEventListener('click', () => {
    alert('Paires jouées : Comparez les paires des joueurs.');
});

document.getElementById('game-button').addEventListener('click', () => {
    alert('Jeu joué : Compar ez la valeur totale des cartes.');
});


function playGrand() {
    let maxCard = -1;
    let winner = -1;
    joueurs.forEach((player, index) => {
        let highestCard = Math.max(...player.hand.map(card => card.value));
        if (highestCard > maxCard) {
            maxCard = highestCard;
            winner = index;
        }
    });
    return winner;
}

function playPetit() {
    let minCard = Infinity;
    let winner = -1;
    joueurs.forEach((player, index) => {
        let lowestCard = Math.min(...player.hand.map(card => card.value));
        if (lowestCard < minCard) {
            minCard = lowestCard;
            winner = index;
        }
    });
    return winner;
}


function playPairs() {
    let bestPairValue = -1;
    let winner = -1;

    joueurs.forEach((hand, index) => {
        let pairCount = countPairs(hand);
        if (pairCount > bestPairValue) {
            bestPairValue = pairCount;
            winner = index;
        }
    });

    return winner;
}

function countPairs() {
    let pairs = 0;

    joueurs.forEach(player => {
        if (Array.isArray(player.hand)) {
            let ranks = player.hand.map(card => card.rank);
            // Comptez les paires dans ranks ici
            let rankCounts = {};
            ranks.forEach(rank => {
                rankCounts[rank] = (rankCounts[rank] || 0) + 1;
            });

            Object.values(rankCounts).forEach(count => {
                if (count >= 2) {
                    pairs += Math.floor(count / 2);
                }
            });
        } else {
            console.error("Erreur : hand n'est pas un tableau pour ce joueur", player);
        }
    });

    return pairs;
}


function playGame() {
    joueurs.forEach(player => {
        if (Array.isArray(player.hand)) {
            // Supposons que chaque carte a une propriété "value"
            let total = player.hand.reduce((acc, card) => acc + card.value, 0);
            console.log(`Total des valeurs pour ${player.name} :`, total);
        } else {
            console.error(`Erreur : la main de ${player.name} n'est pas valide :`, player.hand);
        }
    });
}


function awardPoints(playerIndex, pointsToAward) {
    let teamIndex = playerIndex % 2; // Joueurs 1 et 3 = Équipe 1 (index 0), 2 et 4 = Équipe 2 (index 1)
    points[teamIndex] += pointsToAward;
}



function playTurn() {
    console.log("Début du tour !");

    // Étape 1 : Jouer le Grand
    let grandWinner = playGrand();
    console.log(`Grand gagné par : Joueur ${grandWinner + 1}`);
    awardPoints(grandWinner, 2); // Donne 2 points au gagnant

    // Étape 2 : Jouer le Petit
    let petitWinner = playPetit();
    console.log(`Petit gagné par : Joueur ${petitWinner + 1}`);
    awardPoints(petitWinner, 1); // Donne 1 point au gagnant

    // Étape 3 : Jouer les Paires
    let pairWinner = playPairs();
    console.log(`Paires gagnées par : Joueur ${pairWinner + 1}`);
    awardPoints(pairWinner, 3); // Donne 3 points au gagnant

    // Étape 4 : Jouer le Jeu
    let gameWinner = playGame();
    console.log(`Jeu gagné par : Joueur ${gameWinner + 1}`);
    awardPoints(gameWinner, 2); // Donne 2 points au gagnant

    // Étape 5 : Fin du tour
    console.log(`Points actuels : Équipe 1 = ${points[0]}, Équipe 2 = ${points[1]}`);
}


// Initialiser le jeu
function initGame() {
    createDeck();
    shuffleDeck();
    dealCards();
    displayHands();
}

// Démarrer le jeu
initGame();
