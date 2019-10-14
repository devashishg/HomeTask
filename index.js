//Header Only
let headr = document.getElementById("head");
headr.style.background="#11254d";
headr.style.padding="15px";
headr.style.color ="white";
headr.style.fontSize="25px";
headr.style.position="relative";
let head = document.createElement("div");
head.innerHTML = "<b>Newsfeed</b> <I> &emsp; <small>Yet another newsfeed</small></I>";
headr.appendChild(head);


//Read More Box
let box=document.createElement("div");
box.className = "Modal";
box.style.display = "none";
let conTent =document.createElement("div");
conTent.className = "modal-content";
box.appendChild(conTent);



var data;
let main = document.getElementById("main");
main.className= "article-container";

let story = document.createElement("div");
story.className= "seventy";
main.appendChild(box);

//HTTP Request

var request = new XMLHttpRequest();
request.open('GET','https://devashishg.github.io/HomeTask/file.json');
request.onload = ()=>{
    data = JSON.parse(request.responseText);
    //Loop to iterate JSOn
    for(i=0;i<data.array.length;i++){
        let titleText = document.createElement("h1");
        let timeCatText = document.createElement("small");
        let Descr = document.createElement("p");
        let readMore = document.createElement("button");
        readMore.className = "button1";
        readMore.innerHTML="Continue Reading";
        readMore.id= `${i}`;

        titleText.innerHTML = `${data.array[i].title}`;
        Descr.innerHTML = `${data.array[i].Description.substring(0,300)}....`;
        timeCatText.innerHTML = `Posted on ${data.array[i].Date} //  Category:<b>${data.array[i].Category}</b>`;

        let storywall = document.createElement("img");      //image of the story
        storywall.className= "rest";
        storywall.src='./pallet.png';
        storywall.style.margin="10px";
        storywall.style.marginRight="15px";
        storywall.setAttribute('width', '80px');
        storywall.setAttribute('height', 'auto');

        let oneArticle = document.createElement('div');
        oneArticle.className = 'article-container hundred';
        //oneArticle.style.marginRight="10px";

        let contentStory = document.createElement("div");  // content only 
        contentStory.className="seventy";
        contentStory.appendChild(titleText);
        contentStory.appendChild(timeCatText);
        contentStory.appendChild(Descr);
        contentStory.appendChild(readMore);
 

        oneArticle.appendChild(storywall);
        oneArticle.appendChild(contentStory);

        story.appendChild(oneArticle);
        if(i<data.array.length-1){
        story.appendChild( document.createElement('hr'));}
    }

    main.appendChild(story);
    let form = document.createElement("form");
    form.setAttribute('action','#');
    form.className = 'rest';  
    
    main.appendChild(form);
    console.log(data);

    var btns = document.querySelectorAll('.button1');
    for (j = 0; j < btns.length; j++) { 
    var id = btns[j].getAttribute('id');
    btns[j].addEventListener('click', ()=> {
        console.log('Triggered');
        box.style.display = "block";    
        conTent.innerHTML = data.array[Number(id)].Description;
    });}


};
request.send();

let foot = document.getElementById("foot");
let footer = document.createElement("div");
foot.style.background="#11254d";
footer.style.padding="20px";
footer.style.color ="white";
footer.style.marginTop ="20px";
footer.innerHTML = "<center>© Newsfeed 2019</center>";
foot.appendChild(footer);





window.onclick = function(event) {
    if (event.target == box) {
      box.style.display = "none";
    }
  }
