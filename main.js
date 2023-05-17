
const newData = []


let readListBtn = document.getElementById('listeleBtn');
let info = document.getElementById('registerInfo')
let kayitList = document.getElementById('kayit-list')
let successful = document.getElementById('registerSuccessful')
let danger = document.getElementById('registerDanger')
let elemanSayisi = document.getElementById('toplamEleman')
let removeBtn = document.getElementById('removeBtn')


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
        if (counter >= newData.length) {
            successful.innerHTML = '';
            readListBtn.click();
        }
  
    }, 1000);
    

    console.log(newData)

    function testEmailValidity(email) {
         const re = /\S+@\S+\.\S+/;
        return re.test(String(email).toLowerCase());
         //  '\S+' Bir veya daha fazla karakteri eşler, boşluk olmayan karakter anlamına gelir
        //   \. nokta karakterini eşleştirir 
     }

})
let temp = ''; //Kayıtları yazdırmak için boş string oluşturduk
let counter = 0; //Sırayla  yazdırması için sayaç oluşturduk
let userCounter = 1
document.getElementById('listeleBtn').addEventListener('click',function(){

    
    

    
   
    let listeokuyucu = setInterval(function()  { //setInterval belirli aralıklarla çalıştırır

      

        temp += `<li class="list-group-item" id="kayit-list">
        ${userCounter}. Üye <br>
        Email adresi: ${newData[counter]} <br>
        Password: ${newData[counter + 1]} <br>
        </li>`;
        counter+=2;
        userCounter++;
        
      
        kayitList.innerHTML = temp

       
        clearInterval(listeokuyucu); 
        
    }, 1000);
    elemanSayisi.innerHTML = `Toplam Üye = ${newData.length/2}`

})

document.getElementById('removeBtn').addEventListener('click', function() {
    const uyeSil = prompt('Kaçıncı üyeyi silmek istersiniz?');
    const index = parseInt(uyeSil) - 1; //index numarasını yakaladık
  
    if (index >= 0 && index < newData.length / 2) {
      newData.splice(index * 2, 2);
      temp = '';
      counter = 0;
      userCounter = 1;
      kayitList.innerHTML = '';
      elemanSayisi.innerHTML = '';
      if (readListBtn.click()) {
        newData.length == 0;
        
      }
       //readListBtn Yeniden listeyi okuyarak güncellemeyi sağlar
    }
  });
