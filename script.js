const texto = document.querySelector(".texto");
const result = document.querySelector(".result-p");
const output = document.querySelector(".output")


const encryptedWords = ["enter","imes","ober","ai","ufat"];
const wordsToEncrypt = ["e", "i", "o", "a", "u"];

texto.focus();

document.body.addEventListener("click", (e)=>{
    const target = e.target.getAttribute("class");
    if(target === "criptografar" || target === "descriptografar" || target === "result-btn"){
        let palavra = texto.value;

        output.setAttribute("class", "output hide");
        result.parentElement.classList.remove("hide")
        
        if(palavra === ""){
            result.textContent = "Por favor, digite alguma palavra!";
            return;
        }
        if(/[\u0080-\u00FF]/g.test(palavra) || /[^a-z ]/g.test(palavra)){
            result.textContent = "Apenas letras minúsculas e sem acento."
            return;
        }

        if(target === "criptografar")criptografador(palavra)
        if(target === "descriptografar")descriptografador(palavra);
        if(target === "result-btn")copiar(texto);
        
        texto.focus()
    }

})
function criptografador(texto){
    for(let i = 0; i < encryptedWords.length; i++)texto = texto.replaceAll(wordsToEncrypt[i], encryptedWords[i])
    result.textContent = texto;
}
function descriptografador(texto){
    for(let i = 4;i >= 0; i--)texto = texto.replaceAll(encryptedWords[i],wordsToEncrypt[i])
    result.textContent = texto;
}
function copiar(){navigator.clipboard.writeText(result.textContent)};