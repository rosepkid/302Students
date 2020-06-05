// Alexis Adolphs, Spring 2020
// https://alexis-adolfs.github.io/ATK302/p5/Week2/mp1/

function setup() {
  // put setup code here
  createCanvas(720, 400);
}

function draw() {
  background(21, 51, 112);
  noStroke();

  fill('light gray');
  ellipse(93, 82, 102, 102);

  fill(131, 135, 145);
  rect(0, 298, 720, 80);

  fill(30, 195, 44);
  rect(0, 352, 720, 50);

  fill(197, 192, 192);
  ellipse(338, 156, 120, 120);

  fill(197, 192, 192);
  rect(278, 164, 119.5, 119.5);

  fill(224, 194, 158);
  quad(326, 174, 350, 174, 353, 185, 323, 185);

  fill(17, 117, 169);
  quad(312, 246, 364, 246, 358, 314, 319, 314);

  fill(243, 228, 189);
  ellipse(339, 127, 100, 100);

  fill(236, 32, 32);
  quad(310, 185, 365, 185, 372, 246, 303, 246);
  arc(339, 121, 100, 100, 110, 0);

  fill(255, 255, 255);
  ellipse(312, 119, 100, 10);
  quad(351, 189, 362, 189, 366, 203, 348, 203);

  fill(118, 62, 13);
  triangle(361, 120, 389, 120, 376, 134);

  fill(0);
  ellipse(304, 134, 10, 10);
  ellipse(339, 134, 10, 10);

  fill(224, 194, 158);
  triangle(320, 138, 313, 145, 320, 146);

  fill(0);
  ellipse(348, 315, 25, 15);
  ellipse(323, 314, 25, 15);

  fill(243, 228, 189);
  triangle(353, 203, 365, 203, 357, 230);
  ellipse(358, 229, 15, 15);

  if (mouseIsPressed) {
    fill(82, 124, 37);
    quad(551, 139, 581, 139, 584, 161, 548, 161);

    fill(113, 169, 52);
    ellipse(567, 93, 120, 120);
    quad(543, 278, 589, 278, 580, 329, 550, 329);
    triangle(590, 170, 643, 131,594, 190);
    ellipse(640, 134, 15, 15);
    triangle(540, 173, 484, 138, 536, 190);
    ellipse(484, 139, 15, 15);

    fill(82, 124, 37);
    ellipse(552, 326, 25, 15);
    ellipse(573, 326, 25, 15);
    triangle(552, 98, 546, 104, 553, 110);

    fill(249, 194, 217);
    quad(542, 161, 589, 161, 614, 279, 516, 279);

    fill(255, 255, 255);
    ellipse(563, 39, 30, 30);
    ellipse(588, 42, 30, 30);
    ellipse(610, 53, 30, 30);
    ellipse(538, 42, 30, 30);
    ellipse(520, 56, 25, 25);
    ellipse(621, 70, 25, 25);

    fill(0);
    ellipse(532, 89, 12, 12);
    ellipse(576, 90, 12, 12);

    fill(243, 228, 189);
    triangle(310, 189, 308, 201, 269, 192);
    ellipse(275, 192, 15, 15);

  }
}

function mouseReleased() {
  console.log(mouseX + ", " + mouseY) ;
}
