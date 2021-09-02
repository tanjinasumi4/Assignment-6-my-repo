 document.getElementById('error-message').style.display='none';

const toggleSpinner = displayStyle => {
    document.getElementById('spinner').style.display = displayStyle;
}

const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;

    toggleSpinner('block');
    

    //Clear data

    searchField.value = '';

    document.getElementById('error-message').style.display='none';

   
    if(searchText == ''){
        //
    }
    else{
        const url = `https://openlibrary.org/search.json?q=${searchText}`;
    
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data.docs))
    .catch(error => displayError(error));
    }
}

const displayError = error => {
    document.getElementById('error-message').style.display='block';
}

const displaySearchResult = docs => {
const searchResult = document.getElementById('search-result');
searchResult.textContent = ``;

docs.forEach(doc => {
        console.log(doc);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card  h-100 text-center">
        <img src="https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg" class="card-img-top w-50 rounded mx-auto d-block" alt="...">
        <div class="card-body">
            <h2 class="card-title">Title:${doc.title}</h5>
            <h3 class="author">Author:${doc.author_name}</h3>
            <h3 class="publish">Publisher:${doc.publisher}</h3>
            <h3 class="first-publish">First publish:${doc.first_publish_year}</h3>
            
          </div>
      </div>
        `;
        searchResult.appendChild(div);
    })

    toggleSpinner('none');
}
