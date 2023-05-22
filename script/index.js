const posts = [];

// excess of characters in the header
const EXCESS_OF_CHARACTERS_IN_HEADER = 'В заголовке больше 100 символов';
const EXCESS_OF_CHARACTERS_IN_TEXT = 'В тексте больше 200 символов';

const titleInputNode = document.querySelector('.js-title-input');
const textInputNode = document.querySelector('.js-text-input');
const newPostBtnNode = document.querySelector('.js-new-post-btn');
const quantitySymbolHeaderNode = document.querySelector('.js-quantity-symbol-header');
const quantitySymbolTextNode = document.querySelector('.js-quantity-symbol-text');
const postsContentNode = document.querySelector('.js-posts-content');

newPostBtnNode.addEventListener('click', function(){
    checkingNumberOfCharactersInHeader();
    checkingNumberOfCharactersInText();
    if(getNumberOfCharactersFromTitle() > 100) return;
    if(getNumberOfCharactersFromText() > 200) return;
    const postFromUser = getPostFromUser();
    addPost(postFromUser);
    renderPosts();

    console.log(getNumberOfCharactersFromTitle());
    console.log(getNumberOfCharactersFromText());
});

// Получает новый пост
function getPostFromUser(){
    const date = new Date().toLocaleString();
    const title = titleInputNode.value;
    const text = textInputNode.value;

    return {
        date: date,
        title: title,
        text: text
    };
};

// Устанавливает пост
function addPost({date, title, text}){
    posts.push({
        date,
        title,
        text
    });
};

function getPost(){
    return posts;
}

// Отображает пост
function renderPosts(){
    const posts = getPost();
    let postsHTML = ``;
    posts.forEach(post =>{
        postsHTML += `
            <div class='posts-content'>
                <div class='posts-content__date'>${post.date}</div>
                <div class='posts-content__title'>${post.title}</div>
                <div class='posts-content__text'>${post.text}</div>
            </div>
        `;
    });

    postsContentNode.innerHTML = postsHTML;
};


// Выдает сообщение о превышеном лимите символов в заголовке
function checkingNumberOfCharactersInHeader(){
    if(getNumberOfCharactersFromTitle() > 100){
        quantitySymbolHeaderNode.innerText = EXCESS_OF_CHARACTERS_IN_HEADER;

    } else{
        quantitySymbolHeaderNode.innerText = '';
    };
};

// Выводит сообщение о превышеном лимите символов в тексте
function checkingNumberOfCharactersInText(){
    if(getNumberOfCharactersFromText() > 200){
        quantitySymbolTextNode.innerText = EXCESS_OF_CHARACTERS_IN_TEXT;

    } else{
        quantitySymbolTextNode.innerText = '';
    };
};

// Подсчитывает количество символов в заголовке
function getNumberOfCharactersFromTitle(){
    let quantitySymbolHeader = titleInputNode.value.split(/\s+/).join('').length;
    return quantitySymbolHeader;
};

// Подсчитывает количество символов в тексте
function getNumberOfCharactersFromText(){
    let quantitySymbolText = textInputNode.value.split(/\s+/).join('').length;
    return quantitySymbolText;
};