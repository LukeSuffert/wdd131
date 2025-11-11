const attackButton = document.querySelector(".attack-button");
  const levelButton = document.querySelector(".level-button");
  const stats = document.querySelector(".stats");

  // take hp and lvl elements
  const levelElement = stats.querySelector("p:nth-child(2)");
  const healthElement = stats.querySelector("p:nth-child(3)");

    // Initialize level and health from the DOM
  let level = parseInt(levelElement.textContent.match(/\d+/)[0]);
  let health = parseInt(healthElement.textContent.match(/\d+/)[0]);


  attackButton.addEventListener("click", () => {
    if (health > 0) {
      health -= 20;
      if (health < 0) health = 0; 
      healthElement.innerHTML = `<strong>Health:</strong> ${health}`;
    }
  });

 
  levelButton.addEventListener("click", () => {
    level += 1;
    levelElement.innerHTML = `<strong>Level:</strong> ${level}`;
  });
