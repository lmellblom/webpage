// Linnéa Mellblom. http://linneamellblom.se
var app = angular.module('meInfo', ['ui.bootstrap', 'ngAnimate']);
app.controller('meCtrl', function($scope, $http) {


	$scope.header = true;
	$scope.separator = ",";

	$scope.projects = [
		{
		header: "Moments",
		keyword : "XML, XSLT, PHP, MySQL, RSS, DTD",
		text: "Ett projekt som jag gjorde själv i kursen 'Dokumentstrukturer' och är en form av mikroblogg. Uppgiften var att skapa en sida som genom formulär haterade tillägg och ändrig av data i en databas. Fokus låg på att det skulle vara en XML-baserad data som hämtades och sedan skulle hateras med olika XSLT-transformationer. I mitt projekt kan man skapa användare för att kunna publicera innehåll, gå in och skriva inlägg, gilla andra inlägg och söka på olika kategorier i databasen. ",
		img: "moments.png",
		github: "https://github.com/lmellblom/TNM065/tree/master/project",
		pdf: "moments_linme882.pdf"
	},
	{
		header: "Arrows",
		keyword : "Design och programmering av datorspel, phaser.io, JavaScript",
		text: "Ett spel jag gjort i kursen 'Design och programmering av datorspel' 2015. Hitta hem med så få klick som möjligt. Åk genom 4 olika kapitel med 20 nivåer. Undvik svarta hål, samla stjärnor och färga världen! Gjort för både mobil och desktop och kan spelas i browsern. Spelet är en inledande prototyp och det 20 olika nivåerna visar de olika spelmekanismer som är implementerade.",
		img: "arrows.png",
		github: "https://github.com/lmellblom/TDDD23-Arrows",
		page: "http://lmellblom.github.io/TDDD23-Arrows/",
		youtube: "https://youtu.be/RLhM7SwaRfI",
		extra: "Deltog med detta spel i LiU Game Award 2015 och utav 80 bidrag valdes 10 finalister ut vilket jag sedan kom trea i! Wihuu.",
		extraPic: "liuga.png"
	},
	{
		header: "Träningsdagbok",
		keyword : "Avancerad webbprogrammering, MEAN",
		text: "Ett projekt som gjordes själv i kursen 'Advanced Web Programming'. Skapa en full-stack applikation där fokus låg både på klienten och serversidan. Skrev applikationen i MEAN, MongoDB, Express, AngularJS och NodeJs. Lärorikt projekt där vi började från noll och byggde upp allt själva. Från många olika tuturials kom jag sedan fram till slutresultatet. Mycket kan göras bättre och även fler features kan läggas till. Applikationen utgick från en träningsdagbok där du som användare ska fylla i när och vad du tränat. Det kan även bli ett community där du kan se dina FB-vänner och kan då gå in och kommentera och se deras aktiviteter.",
		img: "trainingJournal.png",
		github: "https://github.com/lmellblom/TrainingJournal",
		youtube: "https://vimeo.com/129659089"
	},
	{
		header: "Bildmosaik",
		keyword: "Bilddatabaser, Matlab, PCA (Principal Components Analysis)",
		text: "Ett projekt som gjordes i grupp om två i kursen bilddatabaser. Givet en inbild ska programmet återskapa denna bild genom att ersätta områden i inbilden med olika databasbilder. Mosaikbilden som skapas kommer därmed innehålla en mängd olika databasbilder. På nära avstånd kommer varje enskild databasbild att synas men på ett längre avstånd kommer mosaikbilden i sin helhet att efterlikna orginalbilden. Analysera bilder för att hitta färg, viktiga områden och sen hitta bästa matchning i databasen.",
		img: "bilddatabaser.png",
		github: "https://github.com/lmellblom/EpicImageProject",
		pdf: "Bildmosaik.pdf"
	},
	{
		header: "Grafisk Design och Kommunikation",
		keyword: "Visuell kommunikation, Adobe Creative Suite",
		text : "En introduktionskurs i grafisk design och kommunikation där vi i grupp om tre personer skulle ta fram en företagsidentitet för ett cykelföretag. Företagsnamn och värderingar skulle tas fram. Grafisk profil och konceptskisser. Målgruppsanalys och marknadsperspektiv. Den grafiska profilen kan ses i pdf:en (OBS. Allt om företaget är fiktivt!). ",
		img: "GDK.jpg",
		pdf: "GrafiskProfil.pdf"
	},
	{
		header: "Visualisering av valresultat",
		keyword: "Informationsvisualisering, JavaScript, d3.js",
		text: "Projekt i kursen Informationsvisualisering. Visualisering av Sveriges valresultat 2010. Fokus på att hitta samband mellan valresultatet och andra faktorer såsom befolkning och medelinkomst. Projektet gjordes i en grupp om två. Använde JavaScript och biblioteket d3.js. OBS! För tillfället kan endast projektet ses i Firefox.",
		img:"infoVis.png",
		github: "https://github.com/lmellblom/InfoVis-election",
		page: "http://lmellblom.github.io/InfoVis-election/",
		pdf:"InfoVis_linme882.pdf"
	},
	{
		header: "'I see fire'",
		keyword:"Procedurella metoder för bilder, GLSL, WebGL",
		text: "Projekt i kursen Procedurella metoder för bilder. Arbetade själv med att skapa procedurell eld med WebGL och GLSL.",
		img:"fire.png",
		github: "https://github.com/lmellblom/fire-webGL/",
		page: "http://lmellblom.github.io/fire-webGL/",
		pdf:"fire_linme882.pdf"
	},
	{
		header: "Qr code processing",
		keyword: "Avancerad bildbehandling, MATLAB",
		text: "Ett projekt i kursen Avancerad Bilbehandling. Skulle lokalisera en QR kod i en bild och sedan avkoda meddelandet. Projektet var begränsat till version 6 av QR versioner men även att QR koden lästes av horisontellt från vänster till höger i bilden. Projektet gjordes tillsammans med tre andra. Jag arbetade mest med att arbeta fram algoritmen och kodade i Matlab.",
		img:"qrCodes.png",
		github: "https://github.com/lmellblom/QR-code",
		pdf: "TNM034_QrCodeProcessing.pdf"
	},
	{
		header: "Creature Evolution",
		keyword:"Kandidatarbete, Agil utveckling, C++, OpenGL, Qt",
		text: "Creature Evolution utvecklades under Medietekniskt kandidatprojekt. Varelserna är evolverade med genetiska algoritmer och använder ett neuralt nätverk som hjärna. Deras beteende är det enda som utvecklas och kan sättas av användaren. Man kan också välja olika varelser att utveckla. Produkten är inspirerad av arbete av Karl Sims. Progammet är utvecklat i C++ med OpenGL för grafik. Bullet användes för fysikalisk simulation och Qt för GUI.",
		img:"creatureEvolution.png",
		youtube: "https://www.youtube.com/watch?v=TI1YTttK8m8&feature=youtu.be",
		github: "https://github.com/lmellblom/creature_evolution"
	},
	{
		header:"Space Curling",
		keyword:"Modellering och simulering, WebGL, JavaScript",
		text: "Ett curlingspel för två spelare. Gjort i WebGL och JavaScript. Modellerna är gjorda i Blender. Som spelare väljer du utslagsvinkel och hastighet. Spelet tar hänsyn till friktion, krock, rotation mm. Curlingstenens bana är grundande på fysikaliska samband.",
		img:"curling_kvadrat.png",
		github:"https://github.com/lmellblom/MoS_Projekt",
		page:"http://lmellblom.github.io/MoS_Projekt/"
	},
	{
		header: "Tatzy",
		keyword:"Kommunikation och användargränssnitt, Java",
		text: "Ett yatzy-spel som är kodat i Java. Går ut på att få så många poäng som möjligt. Efter ett tärningskast är det upp till spelaren att välja vart poängen ska hamna. För att underlätta för spelaren så räknar spelet även ut den potentiella poängen i varje kategori. Svåra var att ta fram en struktur för hur man räknar ut poäng och strukturera upp spelet.",
		img:"tatzy_kvadrat.png"
	}
	/*east sweden hack, epicimageproject, lägga till rapporten från infovis, 
	träningsdagboken osv... */
	];

	$scope.projects.forEach(function(entry) {
    	entry.isCollapsed = true;
	});

	$scope.homeLink = function(item) {
		if (item.page)
			return item.page;
		else if(item.github)
			return item.github;

		return ""; 
	}

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

	$scope.courses =[
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
	},
	{
		code:"TNG033",
		name:"Programmering i C++"
	},
	{
		code:"TNG006",
		name:"Matematisk statistik"
	},
	{
		code:"TNG015",
		name:"Signaler och system"
	},
	{
		code:"TNM061",
		name:"3-D Datorgrafik"
	},
	{
		code:"TNG028",
		name:"Reglerteknik"
	},
	{
		code:"TNM059",
		name:"Grafisk Teknik"
	},
	{
		code:"TNG022",
		name:"Modellbygge och simulering"
	},
	{
		code:"TNM087",
		name:"Bildbehandling och bildanalys"
	},
	{
		code:"TNM093",
		name:"Tillämpad visualisering och virtuell verklighet"
	},
	{
		code:"TNM085",
		name:"Modelleringsprojekt"
	},
	{
		code:"TND004",
		name:"Datastrukturer"
	},
	{
		code:"TNM094",
		name:"Medietekniskt kandidatprojekt (18hp)"
	},
	{
		code:"TNM031",
		name:"Nätverksprogrammering och säkerhet"
	},
	{
		code:"TDDB84",
		name:"Designmönster"
	},
	{
		code:"TNM034",
		name:"Avancerad bildbehandling"
	},
	{
		code:"TNM091",
		name:"Mediaproduktion för immersiva miljöer"
	},
	{
		code: "TNM084",
		name: "Procedurella metoder för bilder"
	},
	{
		code:"TNM084",
		name:"Informationsvisualisering"
	},
	{
		code:"TNM069",
		name:"Grafisk Design och Kommunikation"
	},
	{
		code:"TDDD27",
		name:"Avancerad webbprogrammering"
	},
	{
		code:"TNM025",
		name:"Bilddatabaser"
	},
	{
		code:"TNM096",
		name:"Artificiell intelligens - principer och tekniker"
	},
	{
		code:"TDDD23",
		name:"Design och programmering av datorspel"
	},
	{
		code:"TNM067",
		name:"Vetenskaplig visualisering"
	},
	{
		code:"TNM095",
		name:"Artificiell intelligens för interaktiv media"
	},
	{
		code:"TNM065",
		name:"Dokumentstrukturer"
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

	$scope.aboutMe = "Studerar Civilingenjör i Medieteknik på Linköpings Universitet och går femte och därmed sista året på utbildningen. Har en förkärlek för att hacka kod och lösa problem. När jag inte studerar så spelas det fotboll! Tveka inte att höra av dig om du undrar över något. På denna sida kan du hitta projekt som gjort i skolan, vilka kurser jag läst och även annat jag hittar på. Enjoy!";


});
