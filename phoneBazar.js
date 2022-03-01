 document.getElementById('error-message').style.display='none';


const searchPhone=()=>{
    const searchField=document.getElementById('search-feild');
    const searchText=searchField.value;

    // console.log(searchText);

    searchField.value='';
     document.getElementById('error-message').style.display='none';
    if(searchText==''){
        //please write some words 
        
    }
    else{
        
        
        fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`) 
        .then(res=>res.json())
        .then(data=>  displaySerachResult(data.data.slice(0,20)))
        .catch(error => displayError(error));
        
      

    }
   
 }
//  error message
 const displayError=error=>{
    document.getElementById('error-message').style.display='block';
 }

//   display phone

 const displaySerachResult =phones=>{
    const searchResult=document.getElementById('search-result')

    searchResult.textContent='';

    if(phones.length==0){
        //add div no reult found
    }

    phones.forEach(phone=>{
        console.log(phone)

        const div=document.createElement('div');
        div.classList.add('col');
        div.innerHTML=`
      <div class="card h-100 w-75 shadow p-3 mb-5 bg-body rounded mx-auto">
         <img  src="${phone.image}" class="card-img-top w-100 h-75 p-3 " alt="...">
         <div class="card-body">
             <h5 class="card-title">${phone.phone_name}</h5>
             <p class="card-text">${phone.brand}</p>
             <button  class="btn btn-primary" onclick="loadPhoneDetail('${phone.slug}')">More Detail</button>
         </div>
      </div>
        `
 
        searchResult.appendChild(div)

        

      
    })

}

//  single phone detail 

const loadPhoneDetail=phoneId=>{
    console.log(phoneId);

     const url=`https://openapi.programming-hero.com/api/phone/${phoneId}`
     fetch(url)
     .then(res=>res.json())
     .then(data=> desplayPhoneDeatail(data))
}

const desplayPhoneDeatail=phone=>{
    console.log(phone)

    const phoneDetail=document.getElementById('phone-detail');
    phoneDetail.textContent='';
    const div=document.createElement('div');
    div.innerHTML=`
    <img src="${phone.data.image}" class="card-img-top w-50 m-5  " alt="...">
           <div class="card-body">
             <h5 class="card-title">Name: ${phone.data.name}</h5>
             <p class="card-text">Brand: ${phone.data.brand}</p>
             <p class="card-text">Release-Date: ${phone.data.releaseDate}</p>
             <p class="card-text">Main Features: ${phone.data.mainFeatures.sensors}</p>
             <p class="card-text">Main Features: ${phone.data.mainFeatures.memory}</p>
             
            
            
           </div>
    `
    phoneDetail.appendChild(div);

}

