let app = {
  colors: [
    'lightsteelblue',
    'palegreen',
    'crimson'
  ],

  contentArea: document.querySelector('.content'),
  formArea : document.querySelector('button'),

  init: function() {
    for (index in app.colors) {
      app.generateColorBox(app.colors[index]);
    }
    app.formArea.addEventListener('click', app.handleAjouterCouleur);
  },

  generateColorBox: function(color) {
    let colorBox = document.createElement('div');
    colorBox.className = 'bg-color-selector';
    colorBox.style.background = color;
    colorBox.innerText = color;
    app.contentArea.appendChild(colorBox);
    colorBox.addEventListener('click', app.handlechangeBackground);
    return colorBox;
  },

  handlechangeBackground : function(evt) {
    var couleur = evt.currentTarget;
    document.body.style.backgroundColor = couleur.innerText;
  },

  handleAjouterCouleur : function(evt) {
    evt.preventDefault();
    let colorUser = document.querySelector("#add-color").value;

    for(colorTab of cssColors) {
      if(colorUser == colorTab) {
        app.generateColorBox(colorUser);
        document.querySelector("#add-color").value = '';
        return
      }
  }
  }
};

document.addEventListener('DOMContentLoaded', app.init);