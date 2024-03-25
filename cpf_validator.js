function validarCPF() {
    var cpf = document.getElementById("cpf-input").value;
    cpf = cpf.replace(/[^\d]/g, ""); // Remove caracteres não numéricos

    if (cpf.length !== 11 || !validarDigitos(cpf)) {
        document.getElementById("result").innerText = "CPF inválido";
    } else {
        document.getElementById("result").innerText = "CPF válido";
    }
}

function validarDigitos(cpf) {
    var soma = 0;
    var resto;

    for (var i = 1; i <= 9; i++) {
        soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }
    
    resto = (soma * 10) % 11;

    if ((resto == 10) || (resto == 11)) {
        resto = 0;
    }

    if (resto != parseInt(cpf.substring(9, 10))) {
        return false;
    }

    soma = 0;
    for (var i = 1; i <= 10; i++) {
        soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }
    
    resto = (soma * 10) % 11;

    if ((resto == 10) || (resto == 11)) {
        resto = 0;
    }

    if (resto != parseInt(cpf.substring(10, 11))) {
        return false;
    }

    return true;
}
