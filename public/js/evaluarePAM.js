// atribuire variabile
const intrebare = document.querySelector('#question')
const alegeri = Array.from(document.querySelectorAll('.choice-text'))

// declarare variabile
let intrebareCurenta = {}
let acceptareRanspunsuri = true
let punctaj = 0
let contorIntrebari = 0
let intrebariDisponibile = []
let PUNCTE_INTREBARE = 1
let NR_MAXIM_INTREBARI = 9

// intrebarile ce vor fi apelate
let intrebari = [
    {
        intrebare: 'La o persoana aflata in hipotermie, respiratia se verifica timp de:',
        alegere1: '10 secunde',
        alegere2: '20 secunde',
        alegere3: '30 secunde',
        alegere4: '60 secunde',
        raspunsCorect: 4
    },
    {
        intrebare: 'Victimele suspecte de fracturi ale coloanei vertebrale sau bazinului se transporta obligatoriu:',
        alegere1: 'Pe scaun cu rotile',
        alegere2: 'Cu o targa improvizata din paturi',
        alegere3: 'Pe targa rigida',
        alegere4: 'Nu se transporta',
        raspunsCorect: 3
    },
    {
        intrebare: 'Manevra Sandwich consta in:',
        alegere1: '5 lovituri interscapulare, 5 compresiuni abdominale',
        alegere2: '5 insuflatii, 5 compresiuni abdominale',
        alegere3: '5 lovituri interscapulare, 5 compresiuni toracice',
        alegere4: '5 compresiuni toracice, 5 insuflatii',
        raspunsCorect: 3
    },
    {
        intrebare: 'Cum actionati in cazul unui accidentat a carui inima s-a oprit?',
        alegere1: 'Plecati, intrucat nu se mai poate face nimic',
        alegere2: 'Incepeti compresia artificiala a inimii si respiratia artificiala',
        alegere3: 'Miscati energic accidentatul pentru a-si reveni',
        alegere4: 'Incepeti compresia artificiala a inimii, fara respiratie artificiala',
        raspunsCorect: 2
    },
    {
        intrebare: 'Arsura de gradul III:',
        alegere1: 'Provoaca aparitia veziculelor cu lichid sangvinolent',
        alegere2: 'Provoaca aparitia veziculelor cu lichid alb-galbui',
        alegere3: 'Nu provoaca aparitia veziculelor cu lichid sangvinolent',
        alegere4: 'Nu provoaca aparitia veziculelor cu lichid alb-galbui',
        raspunsCorect: 1
    },
    {
        intrebare: 'In cazul electrocutarii executam urmatoarele manevre:',
        alegere1: 'Acoperirea de urgenta cu paturi electro-izolante',
        alegere2: 'Resuscitarea cardio-respiratorie',
        alegere3: 'Resuscitarea cardiaca',
        alegere4: 'Transportarea individului cu ajutorul targilor electro-izolante',
        raspunsCorect: 2
    },
    {
        intrebare: 'Manevra Heimlich consta in:',
        alegere1: '5 lovituri interscapulare',
        alegere2: '5 insuflatii, 5 compresiuni abdominale',
        alegere3: '5 lovituri interscapulare, 5 compresiuni toracice',
        alegere4: '5 compresiuni abdominale',
        raspunsCorect: 4
    },
    {
        intrebare: 'Caile respiratorii pot fi deblocate:',
        alegere1: 'Numai in unitati medicale, folosindu-se instrumente speciale',
        alegere2: 'La locul accidentului, prin interventii specifice',
        alegere3: 'Indiferent de locatie, daca victima este lucida',
        alegere4: 'In prezenta unor persoane autorizate pentru a savarsi aceasta interventie',
        raspunsCorect: 2
    },
    {
        intrebare: 'Compresiile toracice in timpul resuscitarii se fac:',
        alegere1: 'Cu o frecventa de 70 compresii/min, si la o adancime de 3-4 cm',
        alegere2: 'Cu o frecventa de 90 compresii/min, si la o adancime de 3-4 cm',
        alegere3: 'Cu o frecventa de 100-120 compresii/min, si la o adancime de 5-6 cm',
        alegere4: 'Cu o frecventa de 110-130 compresii/min, si la o adancime de 5-6 cm',
        raspunsCorect: 3
    },
    {
        intrebare: 'Este situatie evidenta de deces',
        alegere1: 'lipsa pulsului',
        alegere2: 'lipsa respiratiei',
        alegere3: 'paloare excesiva',
        alegere4: 'rigiditatea cadaverica',
        raspunsCorect: 4
    },
    {
        intrebare: 'Cum se actioneaza in cazul unei persoane inconstiente care respira?',
        alegere1: 'Se pune persoana in pozitie laterala de siguranta',
        alegere2: 'Se incep manevrele de resuscitare, RCP 30:2',
        alegere3: 'Se stropeste cu apa si se una la 112',
        alegere4: 'Se pune persoana in pozitie posterioara de siguranta',
        raspunsCorect: 1
    },
    {
        intrebare: 'Pana cand efectuam RCP unei persoane inconstiente care nu respira?',
        alegere1: 'aproximativ 30-50 minute',
        alegere2: 'aproximativ 40-50 minute',
        alegere3: 'aproximativ 50-60 minute',
        alegere4: 'pana cand obosim',
        raspunsCorect: 4
    },
    {
        intrebare: 'Tahicardia este:',
        alegere1: 'Cresterea valorilor respiratorii peste cele normale',
        alegere2: 'Scaderea valorilor respiratorii sub cele normale',
        alegere3: 'Cresterea pulsului peste valorile normale',
        alegere4: 'Scaderea pulsului sub valorile normale',
        raspunsCorect: 3
    },
    {
        intrebare: 'In cazul unei entorse:',
        alegere1: 'Efectuam FAST',
        alegere2: 'Efectuam BRACE',
        alegere3: 'Efectuam RICE',
        alegere4: 'Efectuam PLS',
        raspunsCorect: 3
    },    
    {
        intrebare: 'In caz de hipotermie:',
        alegere1: 'Se incalzeste persoana cu 1 grad celsius pe ora',
        alegere2: 'Se incalzeste persoana cu 1 grad celsius pe minut',
        alegere3: 'Se introduce persoana in apa fierbinte',
        alegere4: 'Se introduce persoana in apa temperata',
        raspunsCorect: 1
    },
    {
        intrebare: 'In cazul in care o persoana adulta s-a inecat cu un bol alimentar, e inconstienta si nu respira:',
        alegere1: 'Se aplica manevra Heimlich',
        alegere2: 'Se aplica manevra Sandwich',
        alegere3: 'Se face RCP 30:2',
        alegere4: 'Se aplica 5 lovituri interscapulare',
        raspunsCorect: 3
    },
    {
        intrebare: 'In caz de inec prin submersie:',
        alegere1: 'Se face RCP 30:2',
        alegere2: 'Se fac insuflatii timp de 1 minut, dupa care RCP 30:2',
        alegere3: 'Se fac 10 ventilatii, dupa care RCP 30:2',
        alegere4: 'Se fac 5 ventilatii, dupa care RCP 30:2',
        raspunsCorect: 4
    },
    {
        intrebare: 'Dupa locul sangerarii, hemoragia poate fi:',
        alegere1: 'Arteriala, venoasa, capilara',
        alegere2: 'Arteriala, venoasa, pulmonara',
        alegere3: 'Externa, interna, exterioarizata',
        alegere4: 'Externa, interna, interiorizata',
        raspunsCorect: 3
    },
    {
        intrebare: 'Pentru pacientul inconstient care respira, tratamentul este:',
        alegere1: '30 compresiuni / 2 insuflatii',
        alegere2: '30 compresiuni / 3 insuflatii',
        alegere3: 'Pozitia laterala de siguranta',
        alegere4: 'Pozitia anterioara de siguranta',
        raspunsCorect: 3
    }
]

// functie ce ne permite sa salvam intrebarile si raspunsurile alese in local storage
function appendToStorage(data){
    var old = localStorage.getItem('#raspunsuriAlese');
    if (old === null) old = "";
    localStorage.setItem('#raspunsuriAlese', old + data);
}

// functie principala
incepeEvaluare = () => {
    localStorage.setItem('#raspunsuriAlese', "")
    contorIntrebari = 0
    punctaj = 1
    intrebariDisponibile = [...intrebari]
    intrebareNoua()
}

// functie incrementare intrebari
intrebareNoua = () => {
    // conditie finala
    if(intrebariDisponibile.length === 0 || contorIntrebari > NR_MAXIM_INTREBARI-1){
        // salveaza local punctajul
        localStorage.setItem('#scorRecent', punctaj)
        // redirectionare 
        return window.location.assign('./rezultatePAM.html')
    }
    // Incrementare contor intrebari
    contorIntrebari++
    // definirea aleatoare a indexului aferent intrebarii curente
    const indexIntrebare = Math.floor(Math.random()*intrebariDisponibile.length)
    // alegerea intrebarii curente in functie de index
    intrebareCurenta = intrebariDisponibile[indexIntrebare]
    // extragerea informatiei din elementul curent al listei intrebariDisponibile
    intrebare.innerText = intrebareCurenta.intrebare

    //    
    alegeri.forEach(alegere => {
        const numar = alegere.dataset ['number']
        alegere.innerText = intrebareCurenta['alegere' + numar]
    })

    // elimina intrebarea folosita din lista
    intrebariDisponibile.splice(indexIntrebare, 1)

    // conditie continuare
    acceptareRanspunsuri = true 

    // salveaza intrebarea in localstorage, pentru a fi afisata la final
    appendToStorage('---------- \n ' + 'INTREBARE: ' + intrebareCurenta.intrebare + ' \n ')
}

// functie alegere
alegeri.forEach(alegere => {
    // event listener
    alegere.addEventListener('click', eveniment => {
        // conditie pt cazul de finalitate
        if(!acceptareRanspunsuri) return
        acceptareRanspunsuri = false

        // definire variabile ce stocheaza raspunsul corect/selectat
        const raspunsSelectat = eveniment.target
        const intrebareSelectata = raspunsSelectat.dataset['number']
        // comparare raspunsuri
        let clasaAplicata = intrebareSelectata == intrebareCurenta.raspunsCorect ? 'correct' : 'incorrect'
        // conditie aplicata raspunsurilor corecte
        if(clasaAplicata === 'correct') {
            incrementarePunctaj(PUNCTE_INTREBARE)
        }
        raspunsSelectat.parentElement.classList.add(clasaAplicata)

        // obtinerea unei noi intrebari dupa 750 ms
        setTimeout(() => {
            raspunsSelectat.parentElement.classList.remove(clasaAplicata)
            intrebareNoua()
        }, 750)

        // salveaza raspunsul ales in localstorage, pt a fi afisat la final
        appendToStorage('RASPUNS ALES: ' + intrebareCurenta['alegere' + intrebareSelectata] + '\n')
    })
})

// functie de incrementare punctaj
incrementarePunctaj = numar => {
    punctaj += numar
}

incepeEvaluare()