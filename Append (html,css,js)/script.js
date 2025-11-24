    let btn = document.getElementById("btn");
    let result = document.getElementById("result");

    function update(){

        let textappend = document.createElement("h1")
        textappend.textContent = "hello"
        result.append(textappend) 
    }