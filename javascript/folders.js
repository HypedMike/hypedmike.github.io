class folder{
    constructor(title, description, img = null){
        this.title = title; this.description = description;
        if(img != null){
            this.img = img;
        }
    }
}

class filemanager{
    constructor(){
        this.folder_file = this.loadFile("res.txt");
    }
    loadFile(filePath) {
        var result = null;
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", filePath, false);
        xmlhttp.send();
        if (xmlhttp.status==200) {
          result = xmlhttp.responseText;
        }
        return result;
    }
}

//alert("test");
//f = new filemanager();
//f.folder_file = f.loadFile("res.txt");
//alert(f.folder_file);