let pgNo=1,pagesize=16,category="articles";
let mainbody=document.getElementById("main");
function createCard(x)
{
    //console.log(x);
    let mdiv=document.createElement('div');
     let div=document.createElement('div');
     let div1=document.createElement('div');

    let img=document.createElement("img");

    let p=document.createElement('p');
    let p1=document.createElement('p');

    let a=document.createElement('a');
    a.href="../src/outer.html?url=" + x.urlTitle;
    
    console.log("hello" , a.href)
    a.appendChild(p);

    img.src=x.imageUrl;
    img.style.height="200px"
    img.style.width="200px"

       
    p.innerText=x.title;
    p1.innerText=x.metaDescription;

    div.appendChild(img);
   
    div1.appendChild(a);

    div1.appendChild(p1);

    div.style.display="flex"

    mdiv.appendChild(div);
    mdiv.appendChild(div1);

    mdiv.style.display="flex";
    mdiv.style.gap="40px";
    mdiv.style.margin="20px";
    mdiv.style.border="2px solid grey"
    mainbody.appendChild(mdiv);
}



async function searchAll(){
    mainbody.innerHTML=" ";
   
    let search=document.getElementById('search');
    console.log(search.value);
    const value = await fetch(`http://localhost:5500/?pagesize=${pagesize}&page=${pgNo}&search=${search.value}&ctr=12`)
    const data = await value.json();
    console.log(value)
    for(let x of data){
      createCard(x)
    }
      pgNo+=1;
}


async function getData(category) {
    console.log(category);
    if (category == 'articles') {
        mainbody.innerHTML = "";
        const value = await fetch(`http://localhost:5500/?pagesize=${pagesize}&page=${pgNo}&ctr=14`);
        const data = await value.json();
        for(let x of data){
                  createCard(x)
                }
                pgNo+=1;
        
    } 
    else {
        mainbody.innerHTML = "";
        const value = await fetch(`http://localhost:5500/?pagesize=${pagesize}&page=${pgNo}&category=${category}&ctr=5`);
        const data = await value.json();
        for(let x of data){
                  createCard(x)
                }
                pgNo+=1;
       
    }
}
getData('articles');



function getMoreData()
{
    getData();
}