const form = document.querySelector('.add_task');
const tasks = document.querySelector('.tasks')
let tasksArray = [];


form.addEventListener('submit', function(event){
    event.preventDefault();
    const {url, title} = event.target;

    tasksArray.push({
        id: Date.now(),
        url: url.value,
        title: title.value,
    });
        url.value = '';
        title.value = '';
        createTask();

});

function createTask(){
    tasks.innerText = '';

    tasksArray.map(function({id, url, title}){
        const container = document.createElement('div');
        const divUrl = document.createElement('div')
        const titleEl = document.createElement('p')

        titleEl.innerText = title;
        divUrl.style.backgroundImage = `url(${url})`;

        container.classList.add('product_card');

        container.addEventListener('dblclick', function(){
            tasksArray = tasksArray.filter(function(el){
              return el.id !== id
            });
            createTask();  
          });

        container.append(divUrl, titleEl);
        tasks.append(container);
        
    });
    
}

