function mascaraCPF(obj) {
    let cpf_formatado = obj.value;
    cpf_formatado = cpf_formatado.replace(/[^0-9]/g, '');
    cpf_formatado = cpf_formatado.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');
    obj.value = cpf_formatado;
  }
  
  function mascaraTEL(obj) {
    let telefone_formatado = obj.value;
    telefone_formatado = telefone_formatado.replace(/[^0-9]/g, '');
    telefone_formatado = telefone_formatado.replace(/(\d{2})(\d{5})(\d{4})/g, '($1) $2-$3');
    obj.value = telefone_formatado;
  }
  
  function checkName(nome) {
    if (nome.value.length < 3) return false;
    if (nome.value.match(/[^a-z ]+/gi)) return false;
    return true;
  }
  
  function checkEmail(email) {
    if (email.value.length == "") return false;
    if (email.value.match(/^[\w\.]+@[\w]+\.[\w]/gm)) return true;
    else return false;
  }
  
  function checkCPF(strCPF) {
    var Soma;
    var Resto;
    Soma = 0;
    strCPF = strCPF.replace(/[^0-9]/g, '');
    if (strCPF == "00000000000") return false;
  
    for (i = 1; i <= 9; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;
  
    if ((Resto == 10) || (Resto == 11)) Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10))) return false;
  
    Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;
  
    if ((Resto == 10) || (Resto == 11)) Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11))) return false;
    return true;
  }
  
  function checkTelefone(telefone) {
    if (telefone.length == "") return false;
    if (telefone.match(/^\(\d{2}\)\s\d{5}-\d{4}$/gm)) return true;
    else return false;
  }
  
  function checkNasc(nasc) {
    if (nasc.length == "") return false;
    return true;
  }
  
  function checkEstado(nasc) {
    if (nasc.length == "") return false;
    return true;
  }
  
  function valida() {
    let vetorDados = [];
    let nome = document.getElementById("nome");
    let email = document.getElementById("email");
    let cpf = document.getElementById("cpf");
    let telefone = document.getElementById("fone");
    let nasc = document.getElementById("nasc");
    let estado = document.getElementById("estado");
  
    if (checkName(nome) == false) {
      window.alert("Nome incorreto");
      nome.focus();
      nome.style.background = "yellow";
      return false;
    } else {
      nome.style.background = "white";
      vetorDados.push({
        nome: nome.value,
      });
    }
  
    if (checkTelefone(telefone.value) == false) {
      alert("Telefone não informado");
      telefone.focus();
      telefone.style.background = "yellow";
      return false;
    } else {
      telefone.style.background = "white";
      vetorDados.push({
        fone: telefone.value,
      });
    }
  
    if (checkCPF(cpf.value) == false) {
      window.alert("CPF Inválido")
      cpf.focus();
      cpf.style.background = "yellow";
      return false;
    } else {
      cpf.style.background = "white";
      vetorDados.push({
        cpf: cpf.value,
      });
    }
  
    if (checkNasc(nasc.value) == false) {
      alert("Data de nascimento não informada");
      nasc.focus();
      nasc.style.background = "yellow";
      return false;
    } else {
      nasc.style.background = "white";
      vetorDados.push({
        nasc: nasc.value,
      });
    }
  
    if (checkEstado(estado.value) == false) {
      alert("Estado não informado");
      estado.focus();
      estado.style.background = "yellow";
      return false;
    } else {
      estado.style.background = "white";
      vetorDados.push({
        estado: estado.value,
      });
    }
  
    if (checkEmail(email) == false) {
      window.alert("Email Inválido");
      email.focus();
      email.style.background = "yellow";
      return false;
    } else {
      email.style.background = "white";
      vetorDados.push({
        email: email.value,
      });
    }
}