//je selectionne mon bouton reset
var reset=document.querySelector('.reset')
// je selectionne mon textarea
var textarea=document.querySelector('textarea');
//je selectionne ma balise qui permet d'afficher le résultat
var affiche=document.querySelector('.afficher')
//je selectionnne ma premiere checkbox
var checkbox=document.querySelector('.checkbox');
//je selectionne ma deuxieme checkbox
var checkbox2=document.querySelector('.checkbox2');
//je selectionne mon bouton
var boutton=document.querySelector('.envoyez');
//je selectionne mon bouton suivant
var boutton3=document.querySelector('.suivant');
//je creer ma question une
var question1="<h1>"+"mon titre"+"</h1>";
//je creer un booleen undifined
var reponse=" ";
//je creer ma question2
var question2=question1+"\n"+"<h2>"+"la vie à la campagne"+"</h2>";
//je creer une boucle for pour selectionner mes chexkbox

//je creer un ecouteur d'event au clique de mon boutton
boutton.addEventListener('click',function(){

        
        //je fait une condition pour savoir si le résultat est ok et je garde en memoir la réponse grace à un booléen

    if(textarea.value==question1||document.cookie.length > 0){
                //je stock ma reponse dans un cookie
    
                sessionStorage.setItem('myCat', 'Tom');
      
        //je remove la couleur faux si l'utilisateur c'est tromper 1 fois
        checkbox.classList.remove('faux');
        //j'ajoute la couleur vrai à l'utilisateur si il a répondu juste à la question
        checkbox.classList.add('vrai');
        //je compare ma question 2 à mon textarea
        if(textarea.value==question2||document.cookie=='reponse2' ){
            checkbox2.classList.remove('faux');
            checkbox2.classList.add('vrai');
            //j'affiche mon boutton suivant après que tout le questionnaire soit juste
            boutton3.classList.remove('d-none');
      
        }
        else{
            checkbox2.classList.add('faux');
        }
    }
    else{
        //dans else j'ajoute la couleur rouge pour faux
        checkbox.classList.add('faux');
     
        }
    })

        //je creer un nouvel évent qui permet d'afficher le résultat à chaque appui du clavier
        textarea.addEventListener("keyup",function(){
            affiche.innerHTML=textarea.value;
})
//je creer un evenement au chargement 
window.addEventListener('load',function(){
    if(document.cookie.length > 0){
        //je stock ma reponse dans un cookie



reponse=true;
//je remove la couleur faux si l'utilisateur c'est tromper 1 fois
checkbox.classList.remove('faux');
//j'ajoute la couleur vrai à l'utilisateur si il a répondu juste à la question
checkbox.classList.add('vrai');
if(getCookie('reponse2')==="reponse2" ){
    checkbox2.classList.remove('faux');
    checkbox2.classList.add('vrai');
    //j'affiche mon boutton suivant après que tout le questionnaire soit juste
    boutton3.classList.remove('d-none');
}
else{
    alert('error');
}
    }
})
//je creer un ecouteur d'evenement pour mon bouton reset
reset.addEventListener("click",function(){
    var unedate = new Date(2010,12,24);
document.cookie ="moncontenu=nouveau contenu;expires="+unedate.toUTCString();
document.cookie ="reponse2=nouveau contenu;expires="+unedate.toUTCString();
document.cookie ="reponse1=nouveau contenu;expires="+unedate.toUTCString();

})
