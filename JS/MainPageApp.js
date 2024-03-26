document.addEventListener("DOMContentLoaded", function () {
    // Button für das Generieren von Namen
    const generateNameButton = document.querySelector(".NameGeneratorContainer .Btn");
    const nameOutput = document.getElementById("NameOut");
    generateNameButton.addEventListener("click", function () {
        // Hier könntest du deine Logik für die Namensgenerierung einfügen
        // Zum Beispiel könnte die Logik ein zufälliger Name sein
        const names = ["Name 1", "Name 2", "Name 3"];
        const randomIndex = Math.floor(Math.random() * names.length);
        const generatedName = names[randomIndex];
        nameOutput.textContent = generatedName;
    });

    // Button für das Würfeln
    const rollButton = document.querySelector(".DiceContainer .Btn");
    const dieOutput = document.getElementById("DieOutput");
    rollButton.addEventListener("click", function () {
        // Hier könntest du deine Logik für das Würfeln einfügen
        // Zum Beispiel könnte die Logik ein Zufallswurf mit einem Würfel sein
        const maxDieValue = document.getElementById("Dice").value;
        const rolledValue = Math.floor(Math.random() * maxDieValue) + 1;
        dieOutput.textContent = rolledValue;
    });

    // Button für das Generieren des Feindes
    const generateEnemyButton = document.querySelector(".LowerEnemyContainer .Btn");
    const enemyOutput = document.getElementById("EnemyOut");
    generateEnemyButton.addEventListener("click", function () {
        // Hier könntest du deine Logik für die Generierung des Feindes einfügen
        // Zum Beispiel könnte die Logik ein zufälliger Feind sein
        const enemies = ["Feind 1", "Feind 2", "Feind 3"];
        const randomIndex = Math.floor(Math.random() * enemies.length);
        const generatedEnemy = enemies[randomIndex];
        enemyOutput.textContent = generatedEnemy;
    });

    const AddPlayerButton = document.getElementById("AddPlayerButton");
    const PlayerOutput = document.getElementsByClassName("PlayerContainer");
    AddPlayerButton.addEventListener("click", function () {
        if (!confirm("Willst Du einen neuen Spieler hinzufügen?")) { return;}
        var container = document.querySelector(".PlayerContainer");
        var playerCount = container.querySelectorAll(".SinglePlayerCard").length;

        var newPlayerId = "SPC" + (playerCount + 1);

        var newPlayerCard = document.createElement("div");
        newPlayerCard.classList.add("SinglePlayerCard");
        newPlayerCard.id = newPlayerId;

        newPlayerCard.innerHTML = `
            <div class="PlayerName" contenteditable="true">Name</div>
            <div class="Name" contenteditable="true">Name</div>
            <div class="Species">
                <select name="playerSpecies" class="playerSpeciesSelector">
                    <option value="Mensch">Mensch</option>
                    <option value="Elf">Elf</option>
                    <option value="Zwerg">Zwerg</option>
                    <option value="Graminessa">Graminessa</option>
                    <option value="Zachhag">Zachhag</option>
                    <option value="Halbling">Halbling</option>
                </select>
            </div>
            <div class="Lebenspunkte">
                <p class="TextIdentifier">LP</p>
                <input type="number" class="Lebenspunkte">
            </div>
            <div class="Attributes">
            <div class="Attribute">
            <p class="TextIdentifier">Mut</p>
            <input type="number" class="Attributes">
        </div>
        <div class="Attribute">
            <p class="TextIdentifier">Intelligenz</p>
            <input type="number" class="Attributes">
        </div>
        <div class="Attribute">
            <p class="TextIdentifier">Charisma</p>
            <input type="number" class="Attributes">
        </div>
        <div class="Attribute">
            <p class="TextIdentifier">Geschick</p>
            <input type="number" class="Attributes">
        </div>
        <div class="Attribute">
            <p class="TextIdentifier">Körperkraft</p>
            <input type="number" class="Attributes">
        </div>
        <div class="Attribute">
            <p class="TextIdentifier">Geschwindigkeit</p>
            <input type="number" class="Attributes">
        </div>
        <div class="Attribute">
            <p class="TextIdentifier">Gewandtheit</p>
            <input type="number" class="Attributes">
        </div>
        <div class="Attribute">
            <p class="TextIdentifier">Instinkt</p>
            <input type="number" class="Attributes">
        </div>
            </div>
            <button class="Btn" style="background-color: rgba(165, 42, 42, 0.7);" onclick="DeleteMe(${playerCount + 1});">-</button>
        `;

        container.insertBefore(newPlayerCard, document.getElementById("AddPlayerButton"));
    });
});

function DeleteMe(playerId) {
    if (!confirm("Willst Du diesen Spieler wirklich löschen?")) { return;}
    var element = document.getElementById("SPC" + playerId);
    element.parentNode.removeChild(element);
}


