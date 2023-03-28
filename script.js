// Seleciona o elemento HTML com a classe "wrapper" e armazena em uma constante
const wrapper = document.querySelector(".wrapper"),

// Seleciona o campo de input da form e armazena em uma constante
qrInput = wrapper.querySelector(".form input"),

// Seleciona o botão da form e armazena em uma constante
generateBtn = wrapper.querySelector(".form button"),

// Seleciona a imagem do código QR e armazena em uma constante
qrImg = wrapper.querySelector(".qr-code img");

// Declaração da variável para armazenar o valor prévio do input
let preValue;

// Adiciona um ouvinte de eventos de clique ao botão "Gerar código QR"
generateBtn.addEventListener("click", () => {

    // Armazena o valor do input em uma variável, removendo espaços em branco do início e do final
    let qrValue = qrInput.value.trim();

    // Verifica se o input está vazio ou se o valor prévio é igual ao atual e retorna se for verdadeiro
    if(!qrValue || preValue === qrValue) return;

    // Atribui o valor atual do input à variável preValue
    preValue = qrValue;

    // Altera o texto do botão para indicar que o código QR está sendo gerado
    generateBtn.innerText = "Gerando código QR...";

    // Atribui a URL do código QR à imagem do código QR
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;

    // Adiciona um ouvinte de eventos de carregamento da imagem do código QR
    qrImg.addEventListener("load", () => {

        // Adiciona a classe "active" à div com a classe "wrapper" para exibir a imagem do código QR
        wrapper.classList.add("active");

        // Restaura o texto original do botão
        generateBtn.innerText = "Gerar QR Code";
    });
});

// Adiciona um ouvinte de eventos de teclado ao campo de input da form
qrInput.addEventListener("keyup", () => {

    // Verifica se o valor do input está vazio e remove a classe "active" da div com a classe "wrapper" se for verdadeiro
    if(!qrInput.value.trim()) {
        wrapper.classList.remove("active");

        // Limpa a variável preValue
        preValue = "";
    }
});
