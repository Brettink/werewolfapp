useFirebase = true;
libPath = "src/lib/";
basePath = "src/webapp/";

frontC = null, backC = null;
divCon = null, flipB = null;
front = true;

function init(){

    self.flipB = createTag("button", "flip");
    self.frontC = createTag("img", "frontC");
    self.backC = createTag("img", "backC");
    self.divCon = createTag("div", "cc");

    self.frontC.src = basePath + "imgs/cc1.png";
    self.backC.src = basePath + "imgs/cc2.png";
    self.backC.setStyle("display", "none");
    self.divCon.setStyle("margin", "auto");
    self.divCon.setStyle("width", "60%");
    self.divCon.insertChild(self.frontC);
    self.divCon.insertChild(self.backC);
    self.flipB.text = "Flip Paper";
    self.flipB.setMouseCallback(e=>{
        self.front = !self.front;
        self.frontC.setStyle("display", (self.front)? "block": "none");
        self.backC.setStyle("display", (!self.front)? "block": "none");
    });
    createCanvas(100, 100);

}

function loop(){

}