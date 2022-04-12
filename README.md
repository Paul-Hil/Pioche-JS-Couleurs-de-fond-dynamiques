# Couleurs de fond (_background_) dynamiques en JS

Le but de l'exercice est de laisser l'utilisateur changer à loisir la couleur de fond de la page :rainbow:

Pourquoi ? Parce que :)

## Point de départ

Vous sont fournies :

- une liste de couleurs CSS standards sur le web dans js/css-colors.js
- une intégration HTML/CSS de base, avec trois couleurs pré-activées

## Étapes

### 1. Un clic sur une couleur change le _background_

Au clic sur une des couleurs de la liste, le _background_ de la page doit adopter cette couleur.

<details>
<summary>Pistes techniques</summary>

- [`addEventListener`](https://github.com/O-clock-Alumni/fiches-recap/blob/master/js/evenements.md)
- [`Event`](https://developer.mozilla.org/en-US/docs/Web/API/Event) et plus particulièrement [`MouseEvent`](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent) => propriété `.target`
- [`HTMLElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) et notamment sa propriété [`.style`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style)

</details>

<details>
<summary>Indices</summary>

1. Commencer par déterminer sur _quel(s) élément(s) HTML_ l'utilisateur va pouvoir cliquer.
2. Un clic est un événement potentiel, indiquer _comment_ réagir _si_ cet événement survient.
3. L'élément HTML cliqué est récupérable dans le code source qui s'occupe de gérer le clic.

<details>
<summary>Et plus précisement ?</summary>

1. Le code source de départ s'occupe de créer les `<div>` colorés, avec la fonction `generateColorBox`, on a donc déjà accès à ces éléments et on peut directement travailler avec.
2. `.addEventListener` permet d'indiquer, via une fonction, comment réagir à un certain type d'événement, émis par certain(s) éléments HTML.
3. L'élément cliqué a un _background_ accessible via sa propriété `.style` ; il en va de même pour l'élément `document.body`.

</details>
</details>

### 2. Formulaire pour ajouter des couleurs

L'utilisateur doit pouvoir ajouter des couleurs à la liste, en utilisant un formulaire. Celui n'existant pas, il faut commencer par l'ajouter à la page, puis gérer son fonctionnement.

<details>
<summary>Pistes techniques</summary>

- [`Event.preventDefault()`](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)
- [`HTMLInputElement`](https://developer.mozilla.org/fr/docs/Web/API/HTMLInputElement) quand on cible un élément HTML `<input>`
- La propriété `.value` d'un `HTMLInputElement`, qui correspond à l'attribut HTML `value=` de l'élément HTML.

</details>

<details>
<summary>Indices</summary>

1. Un formulaire est un élément HTML comme les autres, par contre il émet des événements spécifiques, notamment `'submit'`.
2. Lors de la soummission du formulaire, l'élément HTML qui subit `'submit'` n'est pas l'élément qui contient le texte de la couleur. Il faut aller le cibler précisement.
3. Le code source contient déjà tout le nécessaire pour concrètement ajouter une nouvelle couleur à la liste, une fois la couleur connue.

<details>
<summary>Et plus précisement ?</summary>

1. On reste sur un `.addEventListener`, en changeant l'élément ciblé, le type d'événement écouté, et la fonction _callback_.
2. Penser à empêcher le comportement par défaut du navigateur (rechargement de la page lors de la soumission du formulaire). Pour ce faire, mettre à contribution le paramètre du _callback_. Ce paramètre _peut_ également être utile pour aller cibler l'élément HTML du formulaire qui contient la valeur de la couleur.
3. `generateColorBox` est une fonction que vous pouvez appeler, tant que vous lui passez une couleur.

</details>
</details>

### 3. Activer la couleur ajoutée

Quand une couleur est ajoutée à la liste, le _background_ de la page web doit changer :tada:

<details>
<summary>Indice</summary>

On active une couleur en cliquant sur l'élément HTML qui contient affiche son nom. Or, le code source permet d'avoir accès à cet élément HTML. On peut donc [« émuler » le clic](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/click).

</details>

### Bonus

- Si l'utilisateur propose un nom de couleur invalide, il doit être ignoré.
- Vider le champ texte après l'ajout d'une couleur valide.
