export const validatorCPF = (cpf:string) => {

  if(typeof cpf === "number"){
      cpf = String(cpf);
  }

  if(cpf.includes(".") || cpf.includes("-")){
    cpf = cpf.replace(/\D/g, '');
  }

  // Deve ter 11 dígitos
  if (cpf.length !== 11) return false;

  // Elimina CPFs inválidos conhecidos (todos iguais)
  if (/^(\d)\1{10}$/.test(cpf)) return false;

  // Cálculo do 1º dígito
  let soma = 0;
  for (let i = 0; i < 9; i++) {
    soma += parseInt(cpf[i]) * (10 - i);
  }

  let resto = (soma * 10) % 11;
  if (resto === 10) resto = 0;
  if (resto !== parseInt(cpf[9])) return false;

  // Cálculo do 2º dígito
  soma = 0;
  for (let i = 0; i < 10; i++) {
    soma += parseInt(cpf[i]) * (11 - i);
  }

  resto = (soma * 10) % 11;
  if (resto === 10) resto = 0;
  if (resto !== parseInt(cpf[10])) return false;

  return true;
}