// atribuire variabile
const scorRecent = localStorage.getItem('#scorRecent')
const numeCursantPAM = localStorage.getItem('#numeCursantPAM')
const gradCursantPAM = localStorage.getItem('#gradCursantPAM')
const raspunsuriAlese = localStorage.getItem('#raspunsuriAlese')
const PAM = 'PAM'

// generare data curenta
var today = new Date();
var zi = String(today.getDate()).padStart(2, '0');
var luna = String(today.getMonth() + 1).padStart(2, '0'); //Ianuarie e 0
var an = today.getFullYear();
data = zi + '.' + luna + '.' + an;

if (scorRecent >= 5) {
    rezultatePrompt.innerText = `Rezultatul evaluării dumneavoastră este: ${scorRecent}. Felicitări, ${numeCursantPAM}, ai promovat.`
} else {
    rezultatePrompt.innerText = `Rezultatul evaluării dumneavoastră este: ${scorRecent}. Ne pare rău, ${numeCursantPAM}, nu ai promovat.`
}

// afiseaza rezultatele evaluarii
rezultateComplete.innerText = `Examen: Primul ajutor medical \n -------------------------------------------- \n Data examinării: ${data} \n --------------------------------------------  \n Nume cursant: ${numeCursantPAM} \n Grad cursant: ${gradCursantPAM} \n --------------------------------------------  \n Nota: ${scorRecent} \n ${raspunsuriAlese}`

// functie cu ajutorul careia printam continutul rezultatului
function printRezultate(divName) {
    var printContents = document.getElementById(divName).innerHTML;
    var originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();

    document.body.innerHTML = originalContents;
}

async function sendDATA(){
    fetch('http://localhost:3000/results', {
	method: 'POST',
	body: JSON.stringify({
        tipEvaluare: PAM,
        dataEvaluare: data,
        numeCursant: numeCursantPAM,
        gradCursant: gradCursantPAM,
        nota: scorRecent
    }),
	headers: {
		'Content-type': 'application/json; charset=UTF-8'
	}
}).then(function (response) {
	if (response.ok) {
        window.alert("Rezultatele evaluarii au fost salvate pe cluster0")
		return response.json()
	}
	return Promise.reject(response)
}).then(function (data) {
	console.log(data)
}).catch(function (error) {
	console.warn('Something went wrong.', error)
})
}