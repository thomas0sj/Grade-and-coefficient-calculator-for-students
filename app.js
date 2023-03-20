let note = document.getElementById('input-note');
let coeff = document.getElementById('input-coeff');
let btn = document.getElementById('btn');
let matiere = document.getElementById('input-matiere');

let btnMatiere = document.getElementById('btn-matiere');

let listeNote = []; //liste contenant nos notes
let listeCoeff = []; //liste contenant nos coeff USELESS
let listeMatiere = []; //liste pour nos matières

let results = document.getElementById('results');


function ajoutMatiere(){
    let newUL = document.createElement('ul') //creation ul pour chaque matiere
    newUL.setAttribute('id', matiere.value)
    newUL.innerText = matiere.value
    document.body.appendChild(newUL);

    listeDeroulante = document.getElementById('liste-deroulante') //ajout de la matiere dans liste deroulante
    let option = document.createElement('option')
    option.text = matiere.value
    listeDeroulante.appendChild(option);
    console.log(option)
}

btnMatiere.addEventListener('click', ajoutMatiere);


function ajoutElement(){

    //AJOUT DE NOS ELEMENTS ECRITS DANS NOS LISTES
    listeNote.push(note.value) //ajoute note à listeNote
    listeCoeff.push(coeff.value/100) //ajout coeff à listeCoeff

    console.log(listeNote, listeCoeff) //test

    let li = document.createElement('li') //creation de li pour chaque note et coeff
    li.innerText = "Note de " + note.value + " et coefficient de " + coeff.value
    li.setAttribute('id', note.value + coeff.value + listeDeroulante.value)
    console.log(li.id)

    //create button for every li
    let bouton = document.createElement('button')
    bouton.setAttribute('class', 'removeButton')
    bouton.innerText = "Remove"
    li.appendChild(bouton)

    //cherche valeur selectionnée dans liste déroulante
    listeDeroulante = document.getElementById('liste-deroulante')
    value = listeDeroulante.value
    console.log(value, value.id)

    //ajoute li à matière
    document.getElementById(value).appendChild(li)



    /*
    //AJOUT DE LA MATIERE DANS NOTRE LISTE
    for(i=0; i<=listeMatiere.length; i++){
        if(listeMatiere[i] != matiere.value){
            listeMatiere.push(matiere.value)
        }

    //AJOUT DE NOUVEAUX ELEMENTS UL SI CA EXISTE PAS // SINON CA SE RAJOUTE DANS LE UL AVEC LE BON NOM
    for(i=0; i<=listeMatiere.length; i++){
        if(listeMatiere[i] = matiere.value){
            let li = document.createElement('li')
            li.innerText = "Note de " + note.value + " et coefficient de " + coeff.value
            li.setAttribute('id', note.value + coeff.value)
            document.getElementById('maths').appendChild(li)

            console.log(li.id)
        }

        if(listeMatiere[i] != matiere.value){
            listeMatiere.push(matiere.value)
            console.log(listeMatiere)

            let newUL = document.createElement('ul')
            newUL.setAttribute('id', matiere.value)
            newUL.innerText = matiere.value
            document.body.appendChild(newUL)

            console.log(newUL.id)

            let li = document.createElement('li')
            li.innerText = "Note de " + note.value + " et coefficient de " + coeff.value
            li.setAttribute('id', note.value + coeff.value)
            newUL.appendChild(li)
        }
    }


    //AJOUT D'UN NOUVEL ELEMENT "UL"
    let newUL = document.createElement('ul')
    newUL.setAttribute('id', matiere.value)
    newUL.innerText = matiere.value

    console.log(newUL.id) //test


    //AJOUT DE NOS NOTES ET COEFFS DANS NOTRE LISTE
    let li = document.createElement('li')
    li.innerText = "Note de " + note.value + " et coefficient de " + coeff.value
    li.setAttribute('id', note.value + coeff.value);

    console.log(li.id) //test


    //AJOUT DE NOTRE "LI" A NOTRE ELEMENT "UL"
    document.body.appendChild(newUL) //ajoute newUL à notre <body>
    newUL.appendChild(li) //ajoute li à ul
    */


    //CALCUL DE LA MOYENNE EN FONCTION DES NOTES ET COEFFICIENTS
    total = 0
    totalcoeff = 0

    for(i=0; i<listeNote.length; i++){
        total = (listeNote[i]*listeCoeff[i]) + total //forme moyenne : (note*coeff + note*coeff / coeff + coeff)
        totalcoeff = listeCoeff[i] + totalcoeff
        final = total/totalcoeff
    }

    results.innerText = "Moyenne = " + final //donne nos résultats -- peut mettre Math.round(resultats) pour les valeurs entières
}

btn.addEventListener('click', ajoutElement);


let bouton = document.getElementsByClassName('removeButton');

//delete li item on button click
function supprimeLI(){
    let prout = this.parentElement;
    prout.remove();
}

bouton.addEventListener('click', supprimeLI());