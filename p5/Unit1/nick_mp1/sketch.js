// Nick Lombardo, Spring 2020
// https://nicklombardo26.github.io/Atk302/p5/Week2/mp1/index


function setup() {
  // put setup code here
  createCanvas(900,900);
}

function draw()
{
   background('black')
   ;

if(mouseIsPressed)
    {
      //BLUE CIRCLES
        fill('blue')
          ellipse(75,75,150,150)
          ellipse(375,75,150,150)
          ellipse(675,75,150,150)
            ellipse(225,225,150,150)
            ellipse(525,225,150,150)
            ellipse(825,225,150,150)
          ellipse(75,375,150,150)
          ellipse(375,375,150,150)
          ellipse(675,375,150,150)
            ellipse(225,525,150,150)
            ellipse(525,525,150,150)
            ellipse(825,525,150,150)
          ellipse(75,675,150,150)
          ellipse(375,675,150,150)
          ellipse(675,675,150,150)
            ellipse(225,825,150,150)
            ellipse(525,825,150,150)
            ellipse(825,825,150,150)
          ;
        //RED CIRCLES
          fill('red')
            ellipse(225,75,150,150)
            ellipse(525,75,150,150)
            ellipse(825,75,150,150)
              ellipse(75,225,150,150)
              ellipse(375,225,150,150)
              ellipse(675,225,150,150)
            ellipse(225,375,150,150)
            ellipse(525,375,150,150)
            ellipse(825,375,150,150)
              ellipse(75,525,150,150)
              ellipse(375,525,150,150)
              ellipse(675,525,150,150)
            ellipse(225,675,150,150)
            ellipse(525,675,150,150)
            ellipse(825,675,150,150)
              ellipse(75,825,150,150)
              ellipse(375,825,150,150)
              ellipse(675,825,150,150)
            ;

        //Arms
          fill('white')
        //Right
          quad(520,342, 520,400, 645,455, 668,404)
        //left
          quad(350,382, 350,440 ,495,495, 515,446)
          ;

        //Body
          fill('gray')
            rect(350,315,200,125)
          ;
          //head
            fill('black')
              ellipse(450,405,100,125);
            fill('darkgray')
              ellipse(450,380,110,110);
            fill('black')
              ellipse(450,380,5,5)
            ;
    }

else{
    //RED SQUARES
      fill('red')
        rect(0,0,150,150)
        rect(300,0,150,150)
        rect(600,0,150,150)
          rect(150,150,150,150)
          rect(450,150,150,150)
          rect(750,150,150,150)
        rect(0,300,150,150)
        rect(300,300,150,150)
        rect(600,300,150,150)
          rect(150,450,150,150)
          rect(450,450,150,150)
          rect(750,450,150,150)
        rect(0,600,150,150)
        rect(300,600,150,150)
        rect(600,600,150,150)
          rect(150,750,150,150)
          rect(450,750,150,150)
          rect(750,750,150,150)
        ;
    //BLUE SQUARES
      fill('blue')
        rect(150,0,150,150)
        rect(450,0,150,150)
        rect(750,0,150,150)
          rect(0,150,150,150)
          rect(300,150,150,150)
          rect(600,150,150,150)
        rect(0,450,150,150)
        rect(300,450,150,150)
        rect(600,450,150,150)
          rect(150,300,150,150)
          rect(450,300,150,150)
          rect(750,300,150,150)
        rect(0,750,150,150)
        rect(300,750,150,150)
        rect(600,750,150,150)
          rect(150,600,150,150)
          rect(450,600,150,150)
          rect(750,600,150,150)
        ;
      //arms
        fill('white')
      //left
        quad(380,342, 380,400, 255,455, 232,404)
      //Right
        quad(550,382, 550,440, 405,495, 386,446)
        ;
      //Body
        fill('gray')
          rect(350,315,200,125)
        ;
      //head
        fill('black')
          ellipse(450,405,100,125);
        fill('darkgray')
          ellipse(450,380,110,110);
        fill('black')
          ellipse(450,380,5,5)
        ;
  //End else
  }

function mousePressed() {
  console.log(mouseX + ", " + mouseY);
}


//End Draw
}
