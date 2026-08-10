# 🔒 Gerador de Hash Web

Uma ferramenta web simples, moderna e leve para calcular hashes de textos em tempo real diretamente no navegador, sem dependências externas ou envio de dados para servidores.

---

### 🚀 Funcionalidades
* **Cálculo em tempo real:** Gera a hash instantaneamente conforme o texto é digitado.
* **Suporte a múltiplos algoritmos:** Suporta SHA-1, SHA-256, SHA-384 e SHA-512.
* **Processamento 100% Client-Side:** Utiliza a API Web Crypto (`crypto.subtle`) para processar os dados localmente, garantindo total privacidade.
* **Cópia rápida:** Botão para copiar o resultado para a área de transferência com um clique.
* **Interface Responsiva:** Design limpo e adaptável a telas de computadores e dispositivos móveis.

---

### 🛠️ Tecnologias Utilizadas
* **HTML5:** Estruturação semântica da página.
* **CSS3:** Estilização moderna e layout flexível.
* **JavaScript (ES6+):** Lógica da aplicação e manipulação do DOM.
* **Web Crypto API:** Interface nativa do navegador para execução de operações criptográficas.

---

### 📂 Estrutura do Projeto
* `index.html`: Estrutura dos elementos visuais da interface.
* `style.css`: Estilização e temas visuais.
* `script.js`: Captura dos dados, integração com a API Web Crypto e eventos da interface.
