document.getElementById('reset-password-form').addEventListener('submit', function(event) {
  var email = document.getElementById('email').value;
  var cpfCnpj = document.getElementById('cpf_cnpj').value;
  var cpfCnpjRegex = /^[0-9]+$/; // Expressão regular para apenas números

  if (!email || !cpfCnpj) {
    event.preventDefault();
    alert('Por favor, preencha ambos os campos: Email e CPF ou CNPJ.');
  } else if (!cpfCnpjRegex.test(cpfCnpj)) {
    event.preventDefault();
    alert('Por favor, preencha o campo CPF ou CNPJ apenas com números.');
  }
});

document.getElementById('cpf_cnpj').addEventListener('input', function(event) {
  var value = event.target.value.replace(/\D/g, ''); // Remove caracteres não numéricos
  if (value.length <= 11) { // CPF
    event.target.value = value.replace(/(\d{3})(\d)/, '$1.$2')
                             .replace(/(\d{3})(\d)/, '$1.$2')
                             .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  } else { // CNPJ
    event.target.value = value.replace(/(\d{2})(\d)/, '$1.$2')
                             .replace(/(\d{3})(\d)/, '$1.$2')
                             .replace(/(\d{3})(\d)/, '$1/$2')
                             .replace(/(\d{4})(\d{1,2})$/, '$1-$2');
  }
});