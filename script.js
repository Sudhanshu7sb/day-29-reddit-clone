
 let list = document.querySelector(".list");

 let input = document.querySelector(".userInput");
 let submit = document.querySelector(".submit");
 input.addEventListener("keyup",(e) => {
        // console.log(input.value);
        if(e.keyCode === 13){
         var searchTitle = input.value;
         searchDetails(searchTitle);
        }
     });


function searchDetails(input){
    

    let xhr = new XMLHttpRequest() ;
    xhr.open("GET",`https://www.reddit.com/r/${input}.json`);
    xhr.onload = function() {
        let response = JSON.parse(xhr.response);
        console.log(response);
        

        list.innerHTML = "";
        response.data.children.map(elem => {
           
            let root=document.querySelector("#root");
            let left=document.querySelector(".left");
            let right = document.querySelector(".right");
            right.style.backgroundColor = "whitesmoke";
            let li = document.createElement("li");
            let p = document.createElement("p");
            let comment = document.createElement("p");
            comment.classList.add("comment-share-save");
            let score = document.createElement("h5");
            let liLeft = document.createElement("div");
            liLeft.classList.add("liLeft");
            let liright = document.createElement("div");
            liright.classList.add("liRight");
            score.innerHTML=`
            <i class="fas fa-chevron-up"></i>
            ${elem.data.score}
            <i class="fas fa-chevron-down"></i>
            `;
            
            p.innerHTML = `Posted by <a href="#">${"u/"+elem.data.author}</a>
            <i class="fas fa-shield-alt"></i>`;
            let h2 = document.createElement("h2");
            h2.innerHTML = `${elem.data.title}  <a href = "#" class="link_flair_text">${elem.data.link_flair_text}</a>`  ;
            comment.innerHTML = `
            <i class="fas fa-comment-alt"></i>
            <a href="https://www.reddit.com/r/javascript/comments/hgs73j/showoff_saturday_june_27_2020/" class="num_comments">${elem.data.num_comments} Comments </a> 
            <i class="far fa-bookmark"></i>
            <a href ="#">Save</a>
            <i class="fas fa-share"></i>
            <a href="#"> Share</a>`;
            // right links
            right.innerHTML=`
            <article class="root-right-left">
            <a href="#">Help</a>
            <a href="#">Reddit App</a>
            <a href="#">Reddit Coins</a>
            <a href="#">Reddit Premuim</a>
            <a href="#">Reddit Gifts</a>
            </article>

            <article class="root-right-right">
            <a href="#">About</a>
            <a href="#">Careers</a>
            <a href="#">Press</a>
            <a href="#">Advertise</a>
            <a href="#">Blog</a>
            <a href="#">Terms</a>
            <a href="#">Content Policy</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Mod Policy</a>
            </article>
            `
            
            liLeft.append(score);
            liright.append(p,h2,comment);
            li.append(liLeft,liright);
            list.append(li);
            left.append(list);
            root.append(left,right);
        });
    }
    xhr.send();
}


 
