    const inputText = document.getElementById('inputText');
    const algorithm = document.getElementById('algorithm');
    const hashOutput = document.getElementById('hashOutput');
    const btnCopy = document.getElementById('btnCopy');

    async function generateHash() {
      const text = inputText.value;
      if (!text) {
        hashOutput.value = '';
        return;
      }

      const encoder = new TextEncoder();
      const data = encoder.encode(text);
      const hashBuffer = await crypto.subtle.digest(algorithm.value, data);
      
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
      
      hashOutput.value = hashHex;
    }

    inputText.addEventListener('input', generateHash);
    algorithm.addEventListener('change', generateHash);

    btnCopy.addEventListener('click', () => {
      if (!hashOutput.value) return;
      
      navigator.clipboard.writeText(hashOutput.value).then(() => {
        btnCopy.textContent = 'Copiado!';
        btnCopy.classList.add('copied');
        
        setTimeout(() => {
          btnCopy.textContent = 'Copiar';
          btnCopy.classList.remove('copied');
        }, 2000);
      });
    });