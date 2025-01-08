console.log("exo-7");




var traductor = 
    { 

        car : 'voiture',
        house : 'Maison',
        game : 'jeux',
        videogame : 'jeux vidéo',
        show : 'spectacle'
        ,
        traduct(toTraduct)
        {

            for (i=0; i < toTraduct.length; i++ ){


                for (let propertyTrad in traductor){
                        if (propertyTrad === toTraduct[i].type){
                            //console.log("OK : " + toTraduct[i].type + " traduit en : " + traductor[propertyTrad]);
                            toTraduct[i]['type traduit'] = traductor[propertyTrad];
                        }
                        
                    }                
            }
        }
    };

    function buttonList () {

        let listElement = document.getElementById("listElement");
        let typeHTML = document.getElementById("typeHTML").value.toLowerCase();
        strList = "";
        for (var i = 0; i < jsonDatas.length; i++){

            //variable verification de la checkbox
            let outOfStock = document.getElementById(jsonDatas[i].name.replace(/\s/g, "").toLowerCase()).checked;

            //verification du type et de la checkbox
            if ((jsonDatas[i].type === typeHTML && outOfStock === false) ){
                //affichage des éléments
                strList += ( `<li>${jsonDatas[i].name} : ${jsonDatas[i].price}€</br> ${jsonDatas[i].description} </br> Stock : ${jsonDatas[i].quantity} </li>`);
                listElement.innerHTML = (strList);
            }
        }
    }
    function printChecklist(){
        let checkList = "";
        console.log(jsonDatas.car);
        let checkStocks = document.getElementById("checkStocks");
        for (i in jsonDatas.type[1]){
            //formatage du texte
            let nameId = jsonDatas.type.replace(/\s/g, "").toLowerCase();
            checkList += ( `<input type="checkbox" name="${nameId}" id ="${nameId}"> <label for="${nameId}">${jsonDatas[i].type}</label>`);
        }
        checkStocks.innerHTML =(checkList);
    }

    function buttonSort(){
        let sortOption = document.getElementById("sortOption").value;
        //tri en fonction du choix
        if (sortOption === "prix croissant"){
            jsonDatas.sort((a,b) => a.price - b.price);
        } 
        else if (sortOption === "prix décroissant") {
            jsonDatas.sort((a,b) => b.price - a.price);
        } 
        else if (sortOption === "nom") {
            jsonDatas.sort((a,b) => a.name.localeCompare(b.name));
        }


        buttonList();
    }

    function addArticle(){
        let name = document.getElementById("txtName").value;
        let type = document.getElementById("txtType").value;
        let description = document.getElementById("txtDescription").value;
        let price = document.getElementById("txtPrice").value;
        let quantity = document.getElementById("txtStock").value;

        jsonDatas.push({name, type, description, price, quantity});

        printChecklist();

        buttonList();
    }

    console.log(jsonDatas);
    traductor.traduct(jsonDatas);


    for (let i in jsonDatas){
        console.log(`${jsonDatas[i]['type traduit']}`)
    }
    
    let contents = document.getElementById("main").innerHTML;
    let mainDiv = document.getElementById("main");

    printChecklist();

    






