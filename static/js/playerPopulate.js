// global variables
var qbNames = [
  'Allen, Brandon',
  'Anderson, Derek',
  'Bortles, Blake',
  'Boykin, Trevone',
  'Bradford, Sam',
  'Brady, Tom',
  'Bray, Tyler',
  'Brees, Drew',
  'Bridgewater, Teddy',
  'Brissett, Jacoby',
  'Callahan, Joe',
  'Carr, Derek',
  'Cassel, Matt',
  'Clemens, Kellen',
  'Cook, Connor',
  'Cousins, Kirk',
  'Cutler, Jay',
  'Dalton, Andy',
  'Daniel, Chase',
  'Davis, Austin',
  'Doughty, Brandon',
  'Driskel, Jeff',
  'Fitzpatrick, Ryan',
  'Flacco, Joe',
  'Foles, Nick',
  'Gabbert, Blaine',
  'Garoppolo, Jimmy',
  'Glennon, Mike',
  'Goff, Jared',
  'Gradkowski, Bruce',
  'Grayson, Garrett',
  'Griffin, Robert, III',
  'Griffin, Ryan',
  'Hackenberg, Christian',
  'Heinicke, Taylor',
  'Henne, Chad',
  'Hill, Shaun',
  'Hoyer, Brian',
  'Hundley, Brett',
  'Johnson, Josh',
  'Jones, Landry',
  'Kaepernick, Colin',
  'Keenum, Case',
  'Kessler, Cody',
  'Lewis, Thaddeus',
  'Luck, Andrew',
  'Lynch, Paxton',
  'Mallett, Ryan',
  'Mannion, Sean',
  'Manuel, EJ',
  'Mariota, Marcus',
  'McCarron, AJ',
  'McCown, Josh',
  'Manning, Eli',
  'McCown, Luke',
  'McCoy, Colt',
  'McGloin, Matt',
  'Mettenberger, Zach',
  'Moore, Matt',
  'Nassib, Ryan',
  'Newton, Cam',
  'Orlovsky, Dan',
  'Osweiler, Brock',
  'Palmer, Carson',
  'Petty, Bryce',
  'Ponder, Christian',
  'Prescott, Dak',
  'Rivers, Philip',
  'Rodgers, Aaron',
  'Roethlisberger, Ben',
  'Romo, Tony',
  'Ryan, Matt',
  'Sanchez, Mark',
  'Savage, Tom',
  'Schaub, Matt',
  'Shaw, Connor',
  'Siemian, Trevor',
  'Smith, Alex',
  'Smith, Geno',
  'Moore, Kellen',
  'Stafford, Matthew',
  'Stanton, Drew',
  'Sudfeld, Nate',
  'Tannehill, Ryan',
  'Tanney, Alex',
  'Taylor, Tyrod',
  'Tolzien, Scott',
  'Webb, Joe',
  'Weeden, Brandon',
  'Wentz, Carson',
  'Wilson, Russell',
  'Winston, Jameis'
];

var qbIDs = [
  '18118',
  '12083',
  '16245',
  '17974',
  '11527',
  '4314',
  '15293',
  '7242',
  '16497',
  '18018',
  '18525',
  '16311',
  '8723',
  '5054',
  '17932',
  '14252',
  '8972',
  '12841',
  '9902',
  '14404',
  '18139',
  '18123',
  '8283',
  '611',
  '13723',
  '12982',
  '16041',
  '15201',
  '17922',
  '8769',
  '16836',
  '14257',
  '15190',
  '17927',
  '17179',
  '2405',
  '11992',
  '8358',
  '16907',
  '6489',
  '14971',
  '13443',
  '15694',
  '17966',
  '13697',
  '14008',
  '17929',
  '12771',
  '4932',
  '16850',
  '14868',
  '16763',
  '16116',
  '5282',
  '6276',
  '11047',
  '15746',
  '16175',
  '14219',
  '5834',
  '15093',
  '13320',
  '8590',
  '14053',
  '2428',
  '16864',
  '13270',
  '18055',
  '8244',
  '2593',
  '3807',
  '3867',
  '732',
  '8415',
  '16211',
  '4633',
  '16139',
  '17009',
  '6739',
  '14895',
  '9038',
  '4737',
  '18104',
  '13799',
  '14657',
  '12831',
  '13103',
  '11422',
  '13910',
  '17920',
  '14536',
  '16762'
];

var RBArray2016 = [
  'Abdullah, Ameer',
  'Ajayi, Jay',
  'Allen, Javorius',
  'Anderson, C.J.',
  'Andrews, Antonio',
  'Artis-Payne, Cameron',
  'Asiata, Matt',
  'Atkinson III, George',
  'Barner, Kenjon',
  'Bell, Le\'Veon',
  'Bernard, Giovani',
  'Bibbs, Kapri',
  'Blount, LeGarrette',
  'Blue, Alfred',
  'Bolden, Brandon',
  'Booker, Devontae',
  'Brown, Malcolm',
  'Burkhead, Rex',
  'Bush, Reggie',
  'Cadet, Travaris',
  'Carey, Ka\'Deem',
  'Charles, Jamaal',
  'Coleman, Tevin',
  'Collins, Alex',
  'Crockett, John',
  'Crowell, Isaiah',
  'Cunningham, Benjamin',
  'Darkwa, Orleans',
  'Davis, Knile',
  'Davis, Mike',
  'Dixon, Kenneth',
  'Drake, Kenyan',
  'Draughn, Shaun',
  'Dunbar, Lance',
  'Ellington, Andre',
  'Elliott, Ezekiel',
  'Ervin, Tyler',
  'Farrow, Kenneth',
  'Ferguson, Josh',
  'Forsett, Justin',
  'Forte, Matt',
  'Foster, Arian',
  'Foster, D.J.',
  'Freeman, Devonta',
  'Gillislee, Mike',
  'Gordon, Melvin',
  'Gore, Frank',
  'Grant, Corey',
  'Grimes, Jonathan',
  'Gurley, Todd',
  'Harris, DuJuan',
  'Henry, Derrick',
  'Hightower, Tim',
  'Hill, Jeremy',
  'Howard, Jordan',
  'Hyde, Carlos',
  'Ingram, Mark',
  'Ivory, Chris',
  'Jackson, Darius',
  'James, Mike',
  'Jennings, Rashad',
  'Johnson, Chris',
  'Johnson, David',
  'Johnson Jr., Duke',
  'Jones, Matt',
  'Jones, Taiwan',
  'Lacy, Eddie',
  'Langford, Jeremy',
  'Lasco, Daniel',
  'Lewis, Dion',
  'Marshall, Keith',
  'Martin, Doug',
  'Mathews, Ryan',
  'McCoy, LeSean',
  'McKinnon, Jerick',
  'Michael, Christine',
  'Miller, Lamar',
  'Morris, Alfred',
  'Murphy, Marcus',
  'Murray, DeMarco',
  'Murray, Latavius',
  'Neal, Rajion',
  'Oliver, Branden',
  'Pead, Isaiah',
  'Peerman, Cedric',
  'Perkins, Paul',
  'Peterson, Adrian',
  'Pope, Troymaine',
  'Powell, Bilal',
  'Pressley, Jhurell',
  'Prosise, C.J.',
  'Rainey, Bobby',
  'Rawls, Thomas',
  'Redd, Silas',
  'Reynolds, Chasea',
  'Richard, Jalenn',
  'Richardson, Daryl',
  'Riddick, Theo',
  'Robinson, Denard',
  'Sherman, Anthony',
  'Sims, Charles',
  'Smallwood, Wendell',
  'Smith, Rod',
  'Spiller, C.J.',
  'Sproles, Darren',
  'Starks, James',
  'Stewart, Jonathan',
  'Taliaferro, Lorenzo',
  'Taylor, Stepfan',
  'Thompson, Chris',
  'Todman, Jordan',
  'Toussaint, Fitzgerald',
  'Turbin, Robert',
  'Vereen, Shane',
  'Ward, Terron',
  'Ware, Spencer',
  'Washington, DeAndre',
  'Washington, Dwayne',
  'West, Charcandrick',
  'West, Terrance',
  'White, James',
  'Whittaker, Fozzy',
  'Williams, Andre',
  'Williams, Damien',
  'Williams, DeAngelo',
  'Williams, Jonathan',
  'Winston, Glenn',
  'Woodhead, Danny',
  'Yeldon, T.J.',
  'Zenner, Zach'
];

// Player Object
function PlayerObject(name, playerID, position){
  this.name = name;
  this.playerID = playerID;
  this.position = position;
}

// generates an array of qb player objects and returns
function BuildQBArray(qbNames, qbIDs){
  var qbObjects = [];

  for(var i = 0; i < qbNames.length; i++){
    var newQB = new PlayerObject(qbNames[i], qbIDs[i], 'QB');
    qbObjects.push(newQB);
  }

  return qbObjects;
}

var myQB = BuildQBArray(qbNames, qbIDs);

function makeQBUL(array, position){
  var list = document.getElementById(position);
  //console.log(array);


  // source: http://stackoverflow.com/questions/11128700/create-a-ul-and-fill-it-based-on-a-passed-array
  for(var i = 0; i < array.length; i++) {

        // Create the list item:
        var item = document.createElement('li');
        var link = document.createElement('a');

        link.appendChild(document.createTextNode(array[i]['name']))
        link.href = "#";
        // Set its contents:
        item.appendChild(link);

        // Add it to the list:
        list.appendChild(item);
    }

    // Finally, return the constructed list:
    return list;
}

document.getElementById('qbdropdown').appendChild(makeQBUL(myQB, 'qb'));
//document.getElementById('rbdropdown').appendChild(makeQBUL(RBArray2016, 'rb'));

var QB_BUTTON_CLICKED = document.getElementById('qbButton').value;
var RB_BUTTON_CLICKED = document.getElementById('qbButton').value;

var apiStats;

$('#qb li').on('click', function(){
  var myTable = document.getElementById('stats-table');
  // alert(QB_BUTTON_CLICKED);
  // 0 means not clicked, 1 means clicked
  if(QB_BUTTON_CLICKED == 'false'){
    var columnRow = document.createElement('tr');
    var columnHeadings = ['Name',
      'Passes Completed',
      'Passes Attempted',
      'Yards Gained by Passing',
      'Passing Touchdowns',
      'Interceptions Thrown',
      'Passing Rating',
      'Times Sacked',
      'Yards Lost due to Sacks'
    ];

    // set the proper heading columsn for QB
    for(var i = 0; i < columnHeadings.length; i++){
      var columnCell = document.createElement('th');
      columnCell.appendChild(document.createTextNode(columnHeadings[i]));
      columnRow.appendChild(columnCell);
      myTable.appendChild(columnRow);
    }

    // Now the player
    var playerRow = document.createElement('tr');
    var playerCell = document.createElement('th');

    playerCell.appendChild(document.createTextNode($(this).text()));
    playerRow.appendChild(playerCell);
    myTable.appendChild(playerRow);


    QB_BUTTON_CLICKED = 'true';

    // fill out the api stuff
    //var playerClicked = $(this).text();
    //var playerObject = $.grep(myQB, function(e){ return e.name === playerClicked; });




  }
  else{
    var playerRow = document.createElement('tr');
    var playerCell = document.createElement('th');

    playerCell.appendChild(document.createTextNode($(this).text()));
    playerRow.appendChild(playerCell);
    myTable.appendChild(playerRow);


  }

  // call the api yo
  var playerClicked = $(this).text();
  var playerObject = $.grep(myQB, function(e){ return e.name === playerClicked; });

  GetPlayerStatsFromAPI(playerObject);
  console.log(apiStats['PlayerSeason']);

  var qbStats = [];
  var passingCompletions = apiStats['PlayerSeason']['PassingCompletions'];
  var passesAttempted = apiStats['PlayerSeason']['PassingAttempts'];
  var passingYards = apiStats['PlayerSeason']['PassingYards'];
  var passingTouchdowns = apiStats['PlayerSeason']['PassingTouchdowns'];
  var passingInterceptions = apiStats['PlayerSeason']['PassingInterceptions'];
  var passingRating = apiStats['PlayerSeason']['PassingRating'];
  var passingSacks = apiStats['PlayerSeason']['PassingSacks'];
  var passingSackYards = apiStats['PlayerSeason']['PassingSackYards'];

  qbStats.push(passingCompletions);
  qbStats.push(passesAttempted);
  qbStats.push(passingYards);
  qbStats.push(passingTouchdowns);
  qbStats.push(passingInterceptions);
  qbStats.push(passingRating);
  qbStats.push(passingSacks);
  qbStats.push(passingSackYards);

  for(var i = 0 ; i < qbStats.length; i++){
    var playerCell = document.createElement('th');
    playerCell.appendChild(document.createTextNode(qbStats[i]));
    playerRow.appendChild(playerCell);
    myTable.appendChild(playerRow);
  }


});

$('#clear-button').on('click', function(){
  $("#stats-table tr").remove();
  QB_BUTTON_CLICKED = 'false';
  RB_BUTTON_CLICKED = 'false';
});


function GetPlayerStatsFromAPI(playerObject){

  $(function() {
  $.ajax({
      async: false,
      // player id starts at 732
      url: "https://api.fantasydata.net/v3/nfl/stats/JSON/Player/" + playerObject[0]['playerID'],
      beforeSend: function(xhrObj){
          // Request headers
          xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key"," 01c35bafdc1b44f6b555db93e7997b0c");
      },
      type: "GET",
      // Request body
      data: "{body}",
  })
  .done(function(data) {
      //alert("yay");
      //console.log(data);
      //myd.push(data);
      apiStats = data;
      //console.log("NAME: " + data[0].Name + " FANTASY POSITION: " + data[0].FantasyPosition);
  })
  .fail(function() {
      alert("error");
  });
});
}
