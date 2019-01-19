if (window.File && window.FileReader) {
    const code = document.querySelector("body");
    function handleFileSelect(e) {
        code.innerHTML = '';
        const file = e.target.files[0];

        if (file) {
            code.addEventListener("keypress", (e) => {
                if (e.keyCode === 32) {
                    const reader = new FileReader();
                    reader.readAsText(file, "UTF-8");

                    reader.onload = function (e) {
                        const string = e.target.result;
                        
                        let i = 0;
                        const codeTyper = setInterval(() => {

                            if (i === string.length - 1)
                                clearInterval(codeTyper);

                            if (string[i] === "\n")
                                code.innerHTML += "<br />";
                            else if (string[i] === " ")
                                code.innerHTML += "&nbsp;";
                            else if (string[i] === "\t")
                                code.innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;";
                            else
                                code.innerHTML += string[i];

                            i++;
                        }, 30);
                    }

                    reader.onerror = function (e) {
                        console.log("error reading file");
                    }
                }
            })
        }
    }
    document.getElementById('files').addEventListener('change', handleFileSelect, false);
}
else
    alert('The File APIs are not fully supported in this browser.');