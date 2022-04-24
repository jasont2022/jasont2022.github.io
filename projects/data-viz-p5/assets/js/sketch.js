function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.class("container");
}

function draw() {
  // title
  let title = createDiv('How Many Minutes I Spent Studying For Each Class');
  title.position(0, 100);
  title.class("heading");

  // revise the x and y positions later using windowWidth and windowHeight
  // first date object
  noStroke();
  fill("#EC9F05");
  const date1X = 150;
  const date1Y = 250;
  let date1 = rect(date1X, date1Y, 150, 150);
  let date1Text = createDiv('4/6');
  date1Text.position(date1X, date1Y);
  date1Text.class("date1");

  // second date object
  fill("#FB7BA2");
  const date2X = 450;
  const date2Y = 350;
  let date2 = rect(date2X, date2Y, 255, 255);
  let date2Text = createDiv('4/7');
  date2Text.position(date2X, date2Y);
  date2Text.class("date2");

  stroke("white");
  strokeWeight(3);
  line(date1X, date1Y, date2X, date2Y)

  // third date object
  noStroke();
  fill("#FB7BA2");
  const date3X = 400;
  const date3Y = 800;
  let date3 = ellipse(date3X, date3Y, 240, 240);
  let date3Text = createDiv('4/8');
  date3Text.position(date3X, date3Y);
  date3Text.class("date3");

  stroke("white");
  strokeWeight(3);
  line(date2X, date2Y, date3X, date3Y)

  // fourth date object
  noStroke();
  fill("#FB7BA2");
  const date4X = 800;
  const date4Y = 750;
  let date4 = ellipse(date4X, date4Y, 180, 180);
  let date4Text = createDiv('4/9');
  date4Text.position(date4X, date4Y);
  date4Text.class("date4");

  stroke("white");
  line(date3X, date3Y, date4X, date4Y)

  // fifth date object
  noStroke();
  fill("#FB7BA2");
  const date5X = 1000;
  const date5Y = 450;
  let date5 = ellipse(date5X, date5Y, 300, 300);
  let date5Text = createDiv('4/10');
  date5Text.position(date5X, date5Y);
  date5Text.class("date5");

  stroke("white");
  strokeWeight(3);
  line(date4X, date4Y, date5X, date5Y)

  // sixth date object
  noStroke();
  fill("#FB7BA2");
  const date6X = 1200;
  const date6Y = 100;
  let date6 = rect(date6X, date6Y, 240, 240);
  let date6Text = createDiv('4/11');
  date6Text.position(date6X, date6Y);
  date6Text.class("date6");

  stroke("white");
  strokeWeight(3);
  line(date5X, date5Y, date6X, date6Y)

  // seventh date object
  noStroke();
  fill("#FB7BA2");
  const date7X = 1500;
  const date7Y = 400;
  let date7 = rect(date7X, date7Y, 120, 120);
  let date7Text = createDiv('4/12');
  date7Text.position(date7X, date7Y);
  date7Text.class("date7");

  stroke("white");
  line(date6X, date6Y, date7X, date7Y)

  // eigth date object
  noStroke();
  fill("#FB7BA2");
  const date8X = 1250;
  const date8Y = 600;
  let date8 = rect(date8X, date8Y, 120, 120);
  let date8Text = createDiv('4/13');
  date8Text.position(date8X, date8Y);
  date8Text.class("date8");

  stroke("white");
  strokeWeight(3);
  line(date7X, date7Y, date8X, date8Y)

  // finish object
  noStroke();
  fill("Red");
  const finishX = 1600;
  const finishY = 800;
  let finish = ellipse(finishX, finishY, 120, 120);
  let finishText = createDiv('Finish');
  finishText.position(finishX, finishY);
  finishText.class("finish");

  stroke("white");
  strokeWeight(3);
  line(date8X, date8Y, finishX, finishY)
}