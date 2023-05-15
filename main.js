
const newData = []


let readListBtn = document.getElementById('listeleBtn');
let info = document.getElementById('registerInfo')
let kayitList = document.getElementById('kayit-List')
let successful = document.getElementById('registerSuccessful')
let danger = document.getElementById('registerDanger')

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

    setTimeout(() => {  
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



