function radio(){
    let sexborder=document.querySelectorAll('[type="radio"]') 
  if(sexborder[0].checked){
      document.getElementById('imghomme').classList.add('bordhome')
      document.getElementById('spnHom').classList.add('spnHom')
      lbl=document.querySelectorAll('.inpts input')
      for(i=0;i<lbl.length;i++){
        lbl[i].classList.add('inptHom')
      }
  } else{
      document.getElementById('imghomme').classList.remove('bordhome')
      document.getElementById('spnHom').classList.remove('spnHom')
      lbl=document.querySelectorAll('.inpts input')
      for(i=0;i<lbl.length;i++){
        lbl[i].classList.remove('inptHom')
      }
  }
  if(sexborder[1].checked){
      document.getElementById('imgfemme').classList.add('bordfem')
      document.getElementById('spnFem').classList.add('spnFem')
      lbl=document.querySelectorAll('.inpts input')
      for(i=0;i<lbl.length;i++){
        lbl[i].classList.add('inptFem')
      }
  }else{
      document.getElementById('imgfemme').classList.remove('bordfem')
      document.getElementById('spnFem').classList.remove('spnFem')
      lbl=document.querySelectorAll('.inpts input')
      for(i=0;i<lbl.length;i++){
        lbl[i].classList.remove('inptFem')
      }
  }
  }

  //---------------calculer--------------
var Poids=document.getElementById('Poids')
var longueur= document.getElementById('longueur')
var age=document.getElementById('age')
var selct=document.getElementById('slc')
let btn=document.getElementById('btn')
var rslt=document.getElementById('rsl')
btn.addEventListener('click',claculer)
function claculer(){
    if(age.value=='' || longueur.value==''|| Poids.value=='' || isNaN(age.value)|| isNaN( longueur.value) ||isNaN(Poids.value) ){
        document.getElementById('msgErr').style='display: block;'
        document.getElementById('msgErr').innerHTML='verifier les champs'
    }else if(selct.selectedIndex==0){
        selct.style='border: 2px solid red;'
    }
    else{
        selct.style=''
    let sexVerf=document.querySelectorAll('[type="radio"]') 
    sexVerf.forEach(sx =>{
        if(!sx.checked){ 
        document.getElementById('msgErr').innerHTML='choisissez le sexe'
        }else{
            document.getElementById('msgErr').style='display:none;'
        }
    })
    if(sexVerf[0].checked && selct.selectedIndex==1){
        rslt.innerHTML=(10*Number(Poids.value)+6.25*Number(longueur.value)-5*Number(age.value)+5 )*1.2 +' Kcal'
        }else if(sexVerf[0].checked && selct.selectedIndex==2){
            rslt.innerHTML=(10*Number(Poids.value)+6.25*Number(longueur.value)-5*Number(age.value)+5 )*1.375 +' Kcal'
        
        }else if(sexVerf[0].checked && selct.selectedIndex==3){
            rslt.innerHTML=(10*Number(Poids.value)+6.25*Number(longueur.value)-5*Number(age.value)+5 )*1.55 +' Kcal'
        
        }else if(sexVerf[0].checked && selct.selectedIndex==4){
            rslt.innerHTML=(10*Number(Poids.value)+6.25*Number(longueur.value)-5*Number(age.value)+5 )*1.725 +' Kcal'
        
        }else if(sexVerf[0].checked && selct.selectedIndex==5){
            rslt.innerHTML=(10*Number(Poids.value)+6.25*Number(longueur.value)-5*Number(age.value)+5 )*1.9 +' Kcal'
        }
    
        if(sexVerf[1].checked && selct.selectedIndex==1){
            rslt.innerHTML=(10*Number(Poids.value)+6.25*Number(longueur.value)-5*Number(age.value)-161)*1.2 +' Kcal'
         }
        else if(sexVerf[1].checked && selct.selectedIndex==2){
            rslt.value=(10*Number(Poids.value)+6.25*Number(longueur.value)-5*Number(age.value)-161)*1.375 +' Kcal'
         }
        else if(sexVerf[1].checked && selct.selectedIndex==3){
            rslt.value=(10*Number(Poids.value)+6.25*Number(longueur.value)-5*Number(age.value)-161)*1.55 +' Kcal'
         }
        else if(sexVerf[1].checked && selct.selectedIndex==4){
            rslt.value=(10*Number(Poids.value)+6.25*Number(longueur.value)-5*Number(age.value)-161)*1.725 +' Kcal'
         }
        else if(sexVerf[1].checked && selct.selectedIndex==5){
            rslt.innerHTML=(10*Number(Poids.value)+6.25*Number(longueur.value)-5*Number(age.value)-161)*1.9 +' Kcal'
         }
        }
}
