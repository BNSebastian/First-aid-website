fetch('http://localhost:3000/results')
    .then(function(response){
        return response.json()
    })
    .then(function(results){
        let placeholder = document.querySelector("#data-output")
        let out = ""
        for (let result of results){
            out += `
            <tr>
                <td>${result._id}</td>
                <td>${result.tipEvaluare}</td>
                <td>${result.dataEvaluare}</td>
                <td>${result.numeCursant}</td>
                <td>${result.gradCursant}</td>
                <td>${result.nota}</td>
            </tr>
            `
        }
        placeholder.innerHTML = out
    })                 