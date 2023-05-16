
const newData = []


let readListBtn = document.getElementById('listeleBtn');
let info = document.getElementById('registerInfo')
let kayitList = document.getElementById('kayit-list')
let successful = document.getElementById('registerSuccessful')
let danger = document.getElementById('registerDanger')
let elemanSayisi = document.getElementById('toplamEleman')

document.getElementById('kaydetBtn').addEventListener('click', function(){
    let pasword = document.getElementById('passwordInput')
    let email = document.getElementById('emailInput')

    if(email.value == '' || pasword.value == ''){
        danger.innerHTML = 'Lütfen Bütün Alanları Doldurunuz ! '
        return false;
    }


    if(newData.indexOf(email.value) > -1 ){
        info.innerHTML = 'Bu email ile önceden kayıt oluşturulmuştur!';
        email.value = '';
        pasword.value = '';
        return false;
    }

    


    if (!testEmailValidity(email.value)) {
        info.innerHTML = 'Lütfen geçerli bir email adresi giriniz !';
         return false;
    }

   

    successful.innerHTML = 'Kayıt Başarılı !';
    newData.push(email.value)
    newData.push(pasword.value)
    email.value = '';
    pasword.value = '';

    setTimeout(() => {  //setTimeout bir kez çalıştırır
        successful.innerHTML = '';
    }, 1000);

    console.log(newData)

    function testEmailValidity(email) {
         const re = /\S+@\S+\.\S+/;
        return re.test(String(email).toLowerCase());
         //  '\S+' Bir veya daha fazla karakteri eşler, boşluk olmayan karakter anlamına gelir
        //   \. nokta karakterini eşleştirir 
     }

})

document.getElementById('listeleBtn').addEventListener('click',function(){

    let temp = ''; //Kayıtları yazdırmak için boş string oluşturduk
    let counter = 0; //Sırayla  yazdırması için sayaç oluşturduk
    

    
   
    let listeokuyucu = setInterval(function()  { //setInterval belirli aralıklarla çalıştırır

        temp+= `<li class="list-group-item" id="kayit-list">Email adresi : ${newData[counter]}</li> `
        counter++;
        temp+= `<li class="list-group-item" id="kayit-list">Password : ${newData[counter]}</li> `
        counter++;
    
        kayitList.innerHTML = temp

    if(counter == newData.length){
       
        elemanSayisi.innerHTML = `Toplam Üye = ${newData.length/2}`
        clearInterval(listeokuyucu)
    }   
        
    }, 1000);

})





