useFirebase = true, ontopCanvas = true;
libPath = "srclib/lib/";
basePath = "webapp/";

frontC = null; backC = null;
divCon = null; flipB = null;
canCon = null; butCon = null;
front = true;

function init(){

    self.butCon = createTag("span","but");
    self.flipB = createTag("button", "flip");
    self.frontC = createTag("img", "img");
    self.backC = createTag("img", "img");
    self.divCon = createTag("div", "dc");
    self.canCon = createTag("div", "cc");
    self.butCon.insertChild(self.flipB);

    self.frontC.src = basePath + "imgs/cc1.png";
    self.backC.src = basePath + "imgs/cc2.png";

    self.frontC.setStyle("display", "block");
    self.backC.setStyle("display", "none");

    self.divCon.insertChild(self.frontC);
    self.divCon.insertChild(self.backC);
    self.flipB.text = "Flip Paper";

    self.flipB.setMouseCallback(e=>{
        self.front = !self.front;
        self.frontC.setStyle("display", (self.front)? "block": "none");
        self.backC.setStyle("display", (!self.front)? "block": "none");
    });
    createCanvas(100, 100);
    self.canCon.insertChild(canvas);
    self.divCon.insertChild(canCon);



}
x = 0; y = 0;
function loop(){
    //this.divCon.tag.style['width'] = document.body.clientWidth + "px";
    let tagGet = (this.front)?this.frontC:this.backC;
    canvas.width = tagGet.tag.offsetWidth;
    canvas.height = tagGet.tag.offsetHeight*.999999;

}