//Header Only
let headr = document.getElementById("head");
headr.style.background="#11254d";
headr.style.padding="15px";
headr.style.color ="white";
headr.style.fontSize="25px";
let head = document.createElement("div");
head.innerHTML = "<b>Newsfeed</b> <I> &emsp; <small>Yet another newsfeed</small></I>";
headr.appendChild(head);


let main = document.getElementById("main");
let viewArea = document.createElement("div");


var request = new XMLHttpRequest();
request.open('GET','https://devashishg.github.io/HomeTask/file.json');
request.onload = ()=>{
    var data = JSON.parse(request.responseText);
    console.log(data);
    for(i=0;i<data.array.length;i++){

        let story = document.createElement("div");//complete story Pallet
        story.className= "article1 article-container";

        let contentStory = document.createElement("div");  // content only 
        contentStory.className="article1";

        let titleText = document.createElement("h1");
        let timeCatText = document.createElement("small");
        let Descr = document.createElement("p");
        let readMore = document.createElement("button");

        let storywall = document.createElement("img");      //image of the story
        storywall.className= "article2";
        storywall.src='./pallet.png';
        storywall.style.width="200px";
        storywall.style.height="200px";
        storywall.style.margin="10px";


        titleText.innerHTML = `${data.array[i].title}`;
        Descr.innerHTML = `${data.array[i].Description}`;
        timeCatText.innerHTML = `Posted on ${data.array[i].Date} //  Category:<b>${data.array[i].Category}</b>`;
        readMore.innerHTML="Continue Reading";

        contentStory.appendChild(titleText);
        contentStory.appendChild(timeCatText);
        contentStory.appendChild(Descr);
        contentStory.appendChild(readMore);
        story.appendChild(storywall);
        story.appendChild(contentStory);
        viewArea.appendChild(story);
    }
    //console.log(i);


};
request.send();


main.appendChild(viewArea);

let foot = document.getElementById("foot");
let footer = document.createElement("div");
foot.style.background="#11254d";
footer.style.padding="20px";
footer.style.color ="white";
footer.innerHTML = "<center>© Newsfeed 2019</center>";
foot.appendChild(footer);