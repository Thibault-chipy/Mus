// Définir les cartes et les joueurs
const suites = ['Epees', 'Pieces', 'Batons', 'Coupes'];
const valeursCartes = [1, 2, 3, 4, 5, 6, 7, 10, 11, 12];
let deck = [];
let joueurs = [];

// Générer le deck
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

// Distribuer les cartes aux joueurs
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
        handDiv.innerHTML = ''; // Vider les cartes existantes
        player.hand.forEach(card => {
            const cardDiv = document.createElement('div');
            cardDiv.className = 'card';
            cardDiv.textContent = `${card.value} de ${card.suit}`;
            handDiv.appendChild(cardDiv);
        });
    });
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
