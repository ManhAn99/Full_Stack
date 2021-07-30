let inputSearch = document.querySelector('.input-search');
let button = document.querySelector('button');
let email = document.querySelector('.email');
let identification = document.querySelector('.identification');
let company = document.querySelector('.company');
let followers = document.querySelector('.followers');
let image = document.querySelector('.image');
let container = document.querySelector('.container');
let name = document.querySelector('.name')

button.onclick = async () => {
    container.style.display = 'flex'
    let value = inputSearch.value.trim();
    if(!value) return alert('Try again!');
  
     let data = await fetch(`https://api.github.com/users/${value}`);
     data = await data.json();
     let _email =  data.email;
     let _company = data.company;
     let _identification = data.id;
     let _followers = data.followers;
     let _image = data[`avatar_url`];
     let _name = data.login
     name.innerHTML = _name;
     identification.innerHTML = _identification;
     if(_company == null){
        company.innerHTML = `No Company`;
     }
     else{
        company.innerHTML = _company;
     }

     if(_email == null) {
        email.innerHTML = `No Email`;
     }
     else{
         email.innerHTML = _email
     }
     followers.innerHTML = `${_followers} followers`;
     image.src = _image;
     inputSearch.value = ``
     



     console.log(email, company, identification, followers);
    
}