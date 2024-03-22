document.addEventListener("DOMContentLoaded", function() {
    // Button für das Generieren von Namen
    const generateNameButton = document.querySelector(".NameGeneratorContainer .Btn");
    const nameOutput = document.getElementById("NameOut");
    generateNameButton.addEventListener("click", function() {
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
    rollButton.addEventListener("click", function() {
        // Hier könntest du deine Logik für das Würfeln einfügen
        // Zum Beispiel könnte die Logik ein Zufallswurf mit einem Würfel sein
        const maxDieValue = document.getElementById("Dice").value;
        const rolledValue = Math.floor(Math.random() * maxDieValue) + 1;
        dieOutput.textContent = rolledValue;
    });

    // Button für das Generieren des Feindes
    const generateEnemyButton = document.querySelector(".LowerEnemyContainer .Btn");
    const enemyOutput = document.getElementById("EnemyOut");
    generateEnemyButton.addEventListener("click", function() {
        // Hier könntest du deine Logik für die Generierung des Feindes einfügen
        // Zum Beispiel könnte die Logik ein zufälliger Feind sein
        const enemies = ["Feind 1", "Feind 2", "Feind 3"];
        const randomIndex = Math.floor(Math.random() * enemies.length);
        const generatedEnemy = enemies[randomIndex];
        enemyOutput.textContent = generatedEnemy;
    });
});
