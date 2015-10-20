// Linnéa Mellblom. http://linneamellblom.se
var app = angular.module('cvInfo', []);
app.controller('cvCtrl', function($scope) {

	$scope.imageOfMeSrc = "../pics/me.jpg"; 

	$scope.me = {
		header: "Vem är jag?",
		description: "Jag är en positiv och glad person som är nyfiken på nya kunskaper. Jag studerar på Civilingenjörsprogrammet Medieteknik i Norrköping och går femte och därmed sista året på utbildningen. I framtiden ser jag mig jobba med systemutveckling, gärna inom webb eller visualisering men hittar hela tiden nya områden som är roliga att utforska ytterligare. På fritiden ligger träning mig varmt om hjärtat och spelar fotboll i Lindö FF där jag är lagkapten."
	};

	$scope.personalInformation = [
		{
			head: "Namn",
			text: "Linnéa Mellblom"
		},
		{
			head: "Född",
			text: "1992-06-24"
		},
		{
			head: "Adress",
			text: "Lindövägen 6, 60243 Norrköping"
		},
		{
			head: "Mail",
			text: "linnea@mellblom.nu"
		},
		{
			head: "Telefon",
			text: "0703-818876"
		},
		{
			head: "Web",
			text: "www.linneamellblom.se"
		}
	];
	$scope.personalInformation.header = "Personuppgifter";

	$scope.education = [
		{
			title: "Civilingenjör i medieteknik",
			university: "Linköpings universitet",
			city: "Norrköping",
			when: "11 - pågående"
		}
	];
	$scope.education.header = "Utbildning";


	$scope.work = [
		{
			head: "Orderspecialist",
			text: "Arbetade på orderavdelningen på Telia Sonera under sommaren. Lade beställningar i ett antal olika system. Viss kundkontakt förekom. Lära sig arbeta snabbt och effektivt och arbeta i nya miljöer.",
			company: "Telia Sonera AB",
			city: "Norrköping",
			when: "jun - aug 14"
		},
		{
			head: "Labbassistent",
			text: "Anställd av universitet för att hjälpa till vid laborationer för studenter i lägre årskurser. Två kurser, grundkurs i C++ och Elektronisk Publicering. Examinerade studenter på laborationer och vara där för att svara på frågor och leda studenterna i rätt riktning.",
			company: "Linköpings universitet",
			city: "Norrköping",
			when: "sep - dec 13"
		},
		{
			head: "Företagsrådgivare, kundtjänst",
			text: "Jobbade på företagskundtjänsten som företagsrådgivare. Svarade på inkommande samtal om fast telefon och bredband. Även hjälpa kund att hitta bästa lösningen för sitt företag och sälja. Kundnära upplevelse, service och analys. Stresstålig personlighet krävdes. ",
			company: "Telia Sonera AB",
			city: "Norrköping",
			when: "jun - aug 13"
		},
		{
			head: "Mattementor",
			text: "Mattementor innebar att vara lektionsledare ungefär ett pass varannan vecka, och hjälpa studenter i årskursen under i kurserna Matematisk Grundkurs, Linjär Algebra och Envariabelanalys. Som lektionsledare vara där för att kunna svara på frågor men även ta upp enklare uppgifter på tavlan.",
			company: "Linköpings universitet",
			city: "Norrköping",
			when: "sep 12 - mars 13"
		},
		{
			head: "Juniorkonsult",
			text: "Arbetade som juniorkonsult på Systemstrategerna på ett uppdrag i Norrköping på Telia. Test och testsupport till kringliggande system",
			company: "Systemstrategerna",
			city: "Norrköping",
			when: "juli - aug 12"
		}
	];
	$scope.work.header = "Arbetslivserfarenhet";


	$scope.otherCommitments = [
		{
			head:"Kassör i Medietekniksektionens tjejförening Mette",
			text:"Medietekniksektionens tjejförening Mette har som uppdrag att arbeta för jämställdhet och skapa en god studiemiljö för tjejer. Föreningen arbetar genom att arrangera olika evenemang och företagsbesök. Var kassör i föreningen. ",
			when:"13/14"
		}
	];
	$scope.otherCommitments.header = "Förtroendeuppdrag";


	/*succes, warning, danger*/
	$scope.skills = [
	{
		head:"JavaScript",
		percent: "100",
		level:"success"
	},
	{
		head:"C++",
		percent: "100",
		level:"success"
	},
	{
		head:"CSS",
		percent: "100",
		level:"success"
	},
	{
		head:"HTML(5)",
		percent: "100",
		level:"success"
	},
	{
		head:"Java",
		percent: "90",
		level:"success"
	},
	{
		head:"Matlab",
		percent: "90",
		level:"success"
	},
	{
		head:"WebGL",
		percent: "70",
		level:"warning"
	},
	{
		head:"OpenGL",
		percent: "60",
		level:"warning"
	},
	{
		head:"AngularJS",
		percent: "80",
		level:"success"
	},
	{
		head:"Bootstrap",
		percent: "80",
		level:"success"
	}
	];

	$scope.skills.header ="Skills";

	$scope.languages = [
	{
		language: "Svenska",
		hover: "Modersmål",
		languageText: "Svenska"
	},
	{
		language: "Engelska",
		hover: "Mycket bra",
		languageText: "Engelska"
	}
	];

	$scope.mouseOverLang = function(thing) {
        thing.languageText = thing.hover;
    }
    $scope.mouseOverLeve = function(thing) {
        thing.languageText = thing.language;
    }


});