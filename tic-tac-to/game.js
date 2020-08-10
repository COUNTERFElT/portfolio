var Dbody = document.body;
var Dtable = document.createElement('table');
var Lines = [];
var Blocks = [];
var Turn = 'X';
var Return = document.createElement('div');

var AsyncCallback = function(Event){
  console.log(Event.target);
  console.log(Event.target.parentNode);
  console.log(Event.target.parentNode.parentNode);

  var MuchLine = Lines.indexOf(Event.target.parentNode);
  console.log(MuchLine);
  var MuchBlock = Blocks[MuchLine].indexOf(Event.target);
  console.log(MuchBlock);

  if(Blocks[MuchLine][MuchBlock].textContent !== ''){}else{
    Blocks[MuchLine][MuchBlock].textContent=Turn;

    var FillAll = false;
    if(Blocks[MuchLine][0].textContent === Turn
       && Blocks[MuchLine][1].textContent === Turn
       && Blocks[MuchLine][2].textContent === Turn){ FillAll = true; }

    if(Blocks[0][MuchBlock].textContent === Turn
       && Blocks[1][MuchBlock].textContent === Turn
       && Blocks[2][MuchBlock].textContent === Turn){ FillAll = true; }
    console.log("역 대각선:"+Math.abs(MuchLine-MuchBlock));
    if(MuchLine - MuchBlock === 0 || Math.abs(MuchLine-MuchBlock)===2){
      console.log('대각선 통과');

      if((Blocks[0][0].textContent === Turn
      && Blocks[1][1].textContent === Turn
      && Blocks[2][2].textContent === Turn)
      ||(Blocks[0][2].textContent === Turn
      && Blocks[1][1].textContent === Turn
      && Blocks[2][0].textContent === Turn)){ FillAll = true; }
    }
    if(FillAll){
      Return.textContent = Turn+'님이 승리';
      Dbody.append(Return);

      Turn = 'X';
      Blocks.forEach(function(Line){
        Line.forEach(function(Block){
          Block.textContent='';
        });
      });

    } else{
      if(Turn === 'X'){
        Turn = 'O';
      } else{
        Turn = 'X';
      }
    }
  }
}

for(var i=0; i<=2; i+=1){
  var Line = document.createElement('tr');
  Lines.push(Line);
  Blocks.push([]);
  for(var j=1; j<=3; j+=1){
    var Block = document.createElement('td');

    Block.addEventListener('click',AsyncCallback);
    Blocks[i].push(Block);
    Line.append(Block);
  }
  Dtable.appendChild(Line);
}
Dbody.appendChild(Dtable);
console.log(Lines,Blocks);
