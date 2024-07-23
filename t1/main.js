function affich(name,imgs,imga) {
    let container = document.createElement("div");
    let title = document.createElement("h1");
    let img = document.createElement("img");

    let char="My name is "+name
    let content = document.createTextNode(char);
    title.appendChild(content);
    container.appendChild(title); 
    img.src=imgs;
    img.alt=imga;

    container.appendChild(title);
    container.appendChild(img);
    document.body.appendChild(container);
    // container css
    container.style.backgroundColor='#76b5c5';
    container.style.color='#fff';
    container.style.padding='10px';
    container.style.margin='10px';
    container.style.textAlign="center";
    //body css
    document.body.style.display = "flex";
    document.body.style.flexWrap = "wrap";
    document.body.style.justifyContent = "center";
}

n=["Bill","Steve","Mark","Ali","Oussema","Saddem","Abu Obeida"];
is=["bill.jpg","steve.jpg","mark.jpg","ali.jpg","bin laden.jpg","saddem.jpg","abu obeida.jpg"]
ia=["bill","Steve","mark","ali","bin laden","saddem","Abu Obeida"]
for (let i = 0; i < n.length; i++) {
    affich(n[i],is[i],ia[i]);
}


