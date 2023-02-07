
function getAttachedData(data)
{
    console.log(data)
    let main=document.getElementById("main");
    let h1=document.createElement('h1');
    h1.style.textAlign="center";
    h1.innerText=data.title;
    let p=document.createElement('p');
    p.innerText=data.author;
    main.appendChild(h1);
    p.style.paddingLeft="16%"
    main.appendChild(p);
    let img=document.createElement('img');
    img.src=data.imageUrl;
    img.classList.add("center");
    img.style.height="500px"
    img.style.width="500px"
    main.appendChild(img);
   
    main.style.border="2px solid grey"
}
async function getDetail(){
    let params = new URLSearchParams(document.location.search);
    let name = params.get("url");
    let nameSplit=name.toLowerCase().split(" ");
    name=nameSplit.join("-");
    const value= await fetch(`http://localhost:2000/?title=${name}`);
    const data=await value.json();
    if(data.length==0)
    {
        let main=document.getElementById("main");
        let h1=document.createElement('h1');
        h1.style.textAlign="center";
        h1.innerText="No Result Found";
        main.appendChild(h1);
    }
    for(let x of data){
        getAttachedData(x);
    }
}
getDetail();