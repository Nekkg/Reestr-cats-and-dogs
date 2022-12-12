function addField (argument) {
    
    let myTable = document.getElementById("myTable");
    let currentIndex = myTable.rows.length;
    let currentRow = myTable.insertRow(-1);

    if(currentIndex > 10){
        return;
    }

    let typeBox = document.createElement("input");
    typeBox.setAttribute("name", "type" + currentIndex);

    let breedBox = document.createElement("input");
    breedBox.setAttribute("name", "breed" + currentIndex);

    let nicknameBox = document.createElement("input");
    nicknameBox.setAttribute("name", "nickname" + currentIndex);

    let dataBox = document.createElement("input");
    dataBox.setAttribute("type", "text");
    dataBox.setAttribute("class", "date");
    dataBox.setAttribute("name", "data" + currentIndex);
    dataBox.setAttribute("id", "sampleDate" + currentIndex);
    dataBox.setAttribute("placeholder", "year/month/data");

    
    let yearsBox = document.createElement("div");
    yearsBox.setAttribute("name", "years" + currentIndex);
    yearsBox.setAttribute("class", "years");
    yearsBox.setAttribute("id", "fullYears" + currentIndex); 

    let addRowBox = document.createElement("input");
    addRowBox.setAttribute("type", "button");
    addRowBox.setAttribute("class", "button");
    addRowBox.setAttribute("id", "addPet");
    addRowBox.setAttribute("value", "Добавить питомца");
    addRowBox.setAttribute("onclick", "addField();");

    let currentCell = currentRow.insertCell(-1);
    currentCell.appendChild(typeBox);

    currentCell = currentRow.insertCell(-1);
    currentCell.appendChild(breedBox);

    currentCell = currentRow.insertCell(-1);
    currentCell.appendChild(nicknameBox);

    currentCell = currentRow.insertCell(-1);
    currentCell.appendChild(dataBox);

    currentCell = currentRow.insertCell(-1);
    currentCell.appendChild(yearsBox);

    currentCell = currentRow.insertCell(-1);
    currentCell.appendChild(addRowBox);

}

document.getElementById('end').addEventListener('click', () => {
    document.querySelectorAll(".date").forEach((item, index) => {
        let years = new Date(new Date() - new Date(item.value)).getFullYear() - 1970; 
        const list_div = document.getElementsByTagName("div")[index].innerHTML = new Date(new Date() - new Date(item.value)).getFullYear() - 1970; 
    })
})

function getCurrentPet(index) {
   return [document.getElementsByName('nickname' + index)[0].value, document.getElementsByName('type' + index)[0].value, document.getElementsByName('breed' + index)[0].value]
}
