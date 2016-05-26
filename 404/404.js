function randint(low, high) { // Return a random integer between low and high
  return Math.floor(( Math.random()*(high-low) ))+low;
}

window.onload = function() {
  var scene = document.getElementById("scene");
  for (var i=0; i<500; i++) { // Generate 500 random layers saying 404

    // Create a layer for the parallax scene
    var layer = document.createElement("li");
    layer.setAttribute("class", "layer");
    // Set random depth
    layer.setAttribute("data-depth", Math.random().toFixed(2));
    // Create an inner div to hold the text
    var content = document.createElement("div");
    // Randomize attributes
    content.appendChild(document.createTextNode("404"));   // Add text with:
    content.style.left = randint(-10, 110)+"vw";           //   Random X position
    content.style.top = randint(-10, 110)+"vh";            //   Random Y position
    content.style.fontSize = randint(20, 150)+"px";        //   Random font size (20 to 150 px)
    content.style.opacity = (Math.random()/10).toFixed(2); //   Random opacity (0.00 to 0.10)
    content.style.fontWeight = randint(1, 6) * 100;        //   Random font weight (200 to 500)
    // Add the div
    layer.appendChild(content);

    // Add the layer
    scene.appendChild(layer);
  }

  // Initialize the scene
  var parallax = new Parallax(scene);

};
