if (window.File && window.FileReader) {

    const code = document.querySelector("body");

    function handleFileSelect(e) {
        code.innerHTML = '';
        const file = e.target.files[0];

        if (file) {
            const start = (e) => {
                if (e.keyCode === 32) {
                    code.removeEventListener("keypress", start);
                    const reader = new FileReader();
                    reader.readAsText(file, "UTF-8");

                    reader.onload = (e) => {
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

                            window.scrollTo(0, code.clientHeight);
                            i++;
                        }, 25);
                    }

                    reader.onerror = (e) => {
                        console.log("error reading file");
                    }
                }
            }
            code.addEventListener("keypress", start);
        }
    }
    document.getElementById('files').addEventListener('change', handleFileSelect, false);
}
else
    alert('The File APIs are not fully supported in this browser.');
