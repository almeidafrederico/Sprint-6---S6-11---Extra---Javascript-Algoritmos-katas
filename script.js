function calculateSalary(salarioFixo, totalVendas){
    let salarioTotal = 0;
    if(totalVendas<=1200){
        salarioTotal = (salarioFixo*100) + (totalVendas*3);
        return salarioTotal/100;
    }else{
        salarioTotal = (salarioFixo*100) + (1200*3) + ((totalVendas-1200)*5);
        return salarioTotal/100;
    }
}
let salario = calculateSalary(1200, 2400)
console.log(`Salario do vendendo: R$ ${salario}`);
salario = calculateSalary(1200, 1200)
console.log(`Salario do vendendo: R$ ${salario}`);



function cashMachine(saque, salarioFixo, totalVendas){
    let salarioTotal = calculateSalary(salarioFixo, totalVendas)
    if(saque>salarioTotal){
        return "Saldo insuficiente "
    }
    let saqueRealizado = "";
    let nota200 = 0;
    let nota100 = 0;
    let nota50  = 0;
    for(let i = 200; i<=saque; i = 200){
        nota200++;
        saque -= 200;
        saqueRealizado = `Notas sacadas: ${nota200} de R$200`
    }
    for(let i = 100; i<=saque; i = 100){
        nota100++;
        saque -= 100;
        saqueRealizado += `, ${nota100} nota de R$100`;
    }
    for(let i = 50; i<=saque; i = 50){
        nota50++;
        saque -= 50;
        saqueRealizado += `, ${nota50} nota de R$50`;
    }
    let saldoAtual = salarioTotal-(nota200*200 + nota100*100 + nota50*50)
    saqueRealizado += `, Saldo Atual: R$${saldoAtual}`

    return saqueRealizado

}
console.log(cashMachine(1100, 1200, 2400))



function calculateStock(estoqueAtual, estoqueMax, estoqueMin){
    let estoqueMed = (estoqueMax + estoqueMin)/2
    if(estoqueMed<=estoqueAtual){
        return "Não efetuar compra";
    }else{
        return "Efetuar compra";
    }
}
console.log(calculateStock(20,20,30))


function calculateAge(){

}