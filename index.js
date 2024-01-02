var a = 10;
function loopDemo() {
  for (i = 1; i <= a; i++) {
    console.log(i);
    console.log("====================================");
  }
}
loopDemo();

function objectLoop() {
  const y = [
    {
      name: "Divyanshi",
      id: 29,
    },
    {
      name: "Naman",
      id: 1,
    },
  ];
  y.forEach((element) => {
    console.log(element.name + "  " + element.id);
    console.log("====================================");
  });
}
objectLoop();
