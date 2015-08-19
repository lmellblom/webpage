// Linnéa Mellblom. http://linneamellblom.se
var app = angular.module('meInfo', ['ui.bootstrap', 'ngAnimate']);
app.controller('meCtrl', function($scope, $http) {


	$scope.header = true;
	$scope.separator = ",";

	$scope.projects = [
	{
		header: "Visualisering av valresultat",
		keyword: "Informationsvisualisering, JavaScript, d3.js",
		text: "Projekt i kursen Informationsvisualisering. Visualisering av Sveriges valresultat 2010. Fokus på att hitta samband mellan valresultatet och andra faktorer såsom befolkning och medelinkomst. Projektet gjordes i en grupp om två. Använde JavaScript och biblioteket d3.js. OBS! För tillfället kan endast projektet ses i Firefox.",
		img:"pics/project/infoVis.png",
		github: "https://github.com/lmellblom/InfoVis-election",
		page: "http://lmellblom.github.io/InfoVis-election/"
	},
	{
		header: "'I see fire'",
		keyword:"Procedurella metoder för bilder, GLSL, WebGL",
		text: "Projekt i kursen Procedurella metoder för bilder. Arbetade själv med att skapa procedurell eld med WebGL och GLSL.",
		img:"pics/project/fire.png",
		github: "https://github.com/lmellblom/fire-webGL/",
		page: "http://lmellblom.github.io/fire-webGL/"
	},
	{
		header: "Qr code processing",
		keyword: "Avancerad bildbehandling, MATLAB",
		text: "Ett projekt i kursen Avancerad Bilbehandling. Skulle lokalisera en QR kod i en bild och sedan avkoda meddelandet. Projektet var begränsat till version 6 av QR versioner men även att QR koden lästes av horisontellt från vänster till höger i bilden. Projektet gjordes tillsammans med tre andra. Jag arbetade mest med att arbeta fram algoritmen och kodade i Matlab.",
		img:"pics/project/qrCode.png",
		github: "https://github.com/lmellblom/QR-code"
	},
	{
		header: "Creature Evolution",
		keyword:"Kandidatarbete, Agil utveckling, C++, OpenGL, Qt",
		text: "Creature Evolution utvecklades under Medietekniskt kandidatprojekt. Varelserna är evolverade med genetiska algoritmer och använder ett neuralt nätverk som hjärna. Deras beteende är det enda som utvecklas och kan sättas av användaren. Man kan också välja olika varelser att utveckla. Produkten är inspirerad av arbete av Karl Sims. Progammet är utvecklat i C++ med OpenGl för grafik. Bullet användes för fysikalisk simulation och Qt för GUI.",
		img:"pics/project/creatureEvolution.png",
		youtube: "https://www.youtube.com/watch?v=TI1YTttK8m8&feature=youtu.be",
		github: "https://github.com/lmellblom/creature_evolution"
	},
	{
		header:"Space Curling",
		keyword:"Modellering och simulering, WebGL, JavaScript",
		text: "Ett curlingspel för två spelare. Gjort i WebGL och JavaScript. Modellerna är gjorda i Blender. Som spelare väljer du utslagsvinkel och hastighet. Spelet tar hänsyn till friktion, krock, rotation mm. Curlingstenens bana är grundande på fysikaliska samband.",
		img:"pics/project/curling_kvadrat.png",
		github:"https://github.com/lmellblom/MoS_Projekt",
		page:"http://lmellblom.github.io/MoS_Projekt/"
	},
	{
		header: "Tatzy",
		keyword:"Kommunikation och användargränssnitt, Java",
		text: "Ett yatzy-spel som är kodat i Java. Går ut på att få så många poäng som möjligt. Efter ett tärningskast är det upp till spelaren att välja vart poängen ska hamna. För att underlätta för spelaren så räknar spelet även ut den potentiella poängen i varje kategori. Svåra var att ta fram en struktur för hur man räknar ut poäng och strukturera upp spelet.",
		img:"pics/project/tatzy_kvadrat.png"
	}
	/*east sweden hack, epicimageproject, lägga till rapporten från infovis, 
	träningsdagboken osv... */
	];

	$scope.projects.forEach(function(entry) {
    	entry.isCollapsed = true;
	});

	$scope.selectedProject = function(item) {
		$scope.showProject = item;
		var saveCol = item.isCollapsed;
		resetSelected();
		item.isCollapsed = !saveCol;
		$scope.showProjectCollapsed = item.isCollapsed;		
	}

	var resetSelected = function() {
		$scope.projects.forEach(function(entry) {
    		entry.isCollapsed = true;
		});
	}

	$scope.showProjectCollapsed = true;

	$scope.courses = [
	{
		code: "TNA001",
		name: "Matematisk grundkurs"
	},
	{
		code: "TNA002",
		name: "Linjär Algebra"
	},
	{
		code: "TND012",
		name: "Programmering grundkurs"
	},
	{
		code: "TNM088",
		name: "Digitala Medier"
	},
	{
		code: "TNMK30",
		name: "Elektronisk Publicering"
	},
	{
		code: "TNA003",
		name: "Analys I"
	},
	{
		code: "TND002",
		name: "Objektorienterad programmering"
	},
	{
		code: "TND005",
		name: "Tillämpad matematik i teknik och naturvetenskap"
	},
	{
		code: "TNA004",
		name: "Analys II"
	},
	{
		code: "TNM046",
		name: "Datorgrafik"
	},
	{
		code: "TNA006",
		name: "Analys III"
	},
	{
		code: "TNM040",
		name: "Kommunikation och användargränssnitt"
	},
	{
		code: "TNA007",
		name: "Vektoranalys"
	},
	{
		code: "TNE043",
		name: "Mekanik och vågfysik"
	},
	{
		code: "TNM042",
		name: "Design"
	},
	{
		code: "TNG032",
		name: "Tillämpad transformteori"
	}
	];

	/* To get equal size in the col */
	function chunk(arr, size) {
  	var newArr = [];
  	for (var i=0; i<arr.length; i+=size) {
    	newArr.push(arr.slice(i, i+size));
  	}
  	return newArr;
	}

$scope.chunkedData = chunk($scope.courses, 2);

	$scope.courses.isCollapsed = true;

	$scope.contact;

	$scope.aboutMe = "Studerar Civilingenjör i Medieteknik på Linköpings Universitet och börjar till hösten termin 9 av 10. Har en förkärlek för att hacka kod och lösa problem. När jag inte studerar så spelas det fotboll! Tveka inte att höra av dig om du undrar över något. På denna sida kan du hitta projekt som gjort i skolan, vilka kurser jag läst och även annat jag hittar på. Enjoy!";


});
