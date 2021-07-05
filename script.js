function adicionaLinha(idTabela){

    let table = document.getElementById(idTabela);                                   
    
    let NumberLines = table.rows.length;
    
    let linha = table.insertRow(NumberLines);
     
    console.log(NumberLines)
    

    let celulas = {

     celula1: linha.insertCell(0),
    
     celula2: linha.insertCell(1),
    
     celula3: linha.insertCell(2),
    
     celula4: linha.insertCell(3),
    
     celula5: linha.insertCell(4),
    
     celula6: linha.insertCell(5),
    
     celula7: linha.insertCell(6)
    }
    
    celulas.celula1.innerHTML = '<input type="text" name="Produto[]" placeholder="Produto"> ';
    
    celulas.celula2.innerHTML = '<input type="text" name="codProduto[]" placeholder="CodProduto">';
    
    celulas.celula3.innerHTML = '<input type="number" name="Quantidade[]" placeholder="Quantidade">';
    
    celulas.celula4.innerHTML = '<input type="number" name="Custo[]" placeholder="Custo">';
    
    celulas.celula5.innerHTML = '<input type="number" name="Porcentagem[]" placeholder="Lucro em porcentagem">';
    
    celulas.celula6.innerHTML = '<input type="text" name="codProduto[]" placeholder="CodProduto">';
    
    celulas.celula7.innerHTML =  "<button onclick='removeLinha(this)'>Remover</button>";
}                        

function removeLinha(linha) {
    

   let i=linha.parentNode.parentNode.rowIndex;
  
   document.getElementById('tbl').deleteRow(i);
} 

function RemoverItensLista(){

    let Table = document.getElementById('tbl');

    let numberLines = Table.rows.length;

    while(numberLines > 0){
        
        Table.deleteRow(1);
    
        console.log(numberLines)
    }
}





          
  
  
 