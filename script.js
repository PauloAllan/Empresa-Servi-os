function verificarSalario() {
    const salario = parseFloat(document.getElementById('salario').value);
    const resultadoSalario = document.getElementById('resultado-salario');

    if (isNaN(salario)) {
        resultadoSalario.textContent = "Por favor, insira um valor válido.";
        return;
    }

    if (salario > 3000) {
        resultadoSalario.textContent = "Oferecer Plano Alfa";
    } else {
        resultadoSalario.textContent = "Oferecer Plano Beta";
    }
}

function verificarColesterol() {
    const colesterol = parseFloat(document.getElementById('colesterol').value);
    const resultadoColesterol = document.getElementById('resultado-colesterol');

    if (isNaN(colesterol)) {
        resultadoColesterol.textContent = "Por favor, insira um valor válido.";
        return;
    }

    if (colesterol < 180) {
        resultadoColesterol.textContent = "Saúde Ok";
    } else {
        resultadoColesterol.textContent = "Vamos procurar uma ajuda médica?";
    }
}

function calcularComissao() {
    const vendas = parseFloat(document.getElementById('vendas').value);
    const resultadoVendas = document.getElementById('resultado-vendas');

    if (isNaN(vendas)) {
        resultadoVendas.textContent = "Por favor, insira um valor válido.";
        return;
    }

    let comissao;
    if (vendas >= 100000) {
        comissao = vendas * 0.04;
    } else {
        comissao = vendas * 0.02;
    }

    resultadoVendas.textContent = `A comissão é de R$ ${comissao.toFixed(2)}`;
}
