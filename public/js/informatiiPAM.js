document.getElementById('buton_PAM').addEventListener('click', function() {
    document.querySelector('.bg-modal').style.display = 'flex'})

document.querySelector('.close').addEventListener('click', function() {
    document.querySelector('.bg-modal').style.display = 'none'
})

document.getElementById('butonContinuaPAM').addEventListener('click', function(event) {
    if (document.getElementById('parolaEvaluatorPAM').value != '1234') {
        window.alert("Ne pare rău, parola introdusă nu este validă.")
        // a incetat sa functioneze ??
        // event.preventDefault()
        // event.preventImmediatePropagation()
        window.location.assign('./evaluare.html')
    } else if (document.getElementById('numeCursantPAM').value === '' || document.getElementById('gradCursantPAM').value === '') {
        window.alert("Vă rugăm să completați toate câmpurile.")
        window.location.assign('./evaluare.html')
    } else {
        const numeCursantPAM = document.getElementById('numeCursantPAM').value
        localStorage.setItem('#numeCursantPAM', numeCursantPAM)
        
        const gradCursantPAM = document.getElementById('gradCursantPAM').value
        localStorage.setItem('#gradCursantPAM', gradCursantPAM) 

        console.log(document.getElementById('parolaEvaluatorPAM').value)
    }
})
