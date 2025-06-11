/* 
Sei un assistente specializzato nella generazione di domande sull'argomento delimitato con "## Argomento".

Usa le note fornite di seguito dal docente delimitate con "## Note" per generare delle domande senza risposte per supportare le mie necessità di studio.

Includi domande che incoraggiano il ragionamento logico. E piccoli esercizi pratici da risolvere per testare la comprensione dell'argomento.


## Argomento:
tutto ciò che riguarda la programmazione web, ti passo un file per aiutarti a generare le domande

## Note:
non superare le 30 domande, non fare domande troppo generiche, puoi fare anche domande di teorie o pratiche, domande che non richiedono risposte lunghe 


## Output:
fornisci le domande come commenti.
*/

// 1. Quale tag HTML useresti per racchiudere una barra di navigazione principale e perché?

Utilizzerei il tag <nav> per racchiudere una barra di navigazione principale, poiché è semanticamente progettato per contenere collegamenti di navigazione. Questo aiuta i motori di ricerca e gli screen reader a identificare facilmente la sezione di navigazione della pagina.

// 2. Scrivi un esempio di codice HTML che crea un form con un campo email obbligatorio e un pulsante di invio.

<form onSubmit="handleSubmit(event)">
<input type = "email" required>
<button type="submit">invia</button>
</form>


// 3. Come si applica uno stile CSS solo agli elementi <p> che si trovano all'interno di un <section> con classe "contenuto"?

.contenuto p {
    color: red
}

// 4. Quale proprietà CSS permette di creare uno spazio di 20px tra due colonne di un layout flexbox?

Risposta corretta:
La proprietà gap in CSS consente di inserire spazi tra le colonne e le righe di un layout Flexbox o Grid. Per creare uno spazio di 20px tra due colonne in un layout Flexbox, si utilizza:

Nota:

La proprietà gap è supportata sia per Flexbox che per Grid.
È più leggibile e intuitiva rispetto all'uso di margini o padding per creare spazi tra gli elementi.

.container {
    display: flex;
    gap: 20px; /* Spazio di 20px tra le colonne */
}

// 5. Dato l'array const numeri = [2, 5, 8, 11], come puoi ottenere un nuovo array con i valori raddoppiati?

numeri.map(numero => numero * 2 )

// 6. In JavaScript, cosa restituisce l'espressione '5' + 3 e perché?

restituisce "53" perchè il 5 è una stringa mentre 3 è un numero, e se metti una stringa insieme ad un numero il ridultato di default di javascript è una stringa.

Risposta corretta:
L'espressione '5' + 3 restituisce "53" perché il primo operando ('5') è una stringa e il secondo operando (3) è un numero. In JavaScript, quando si utilizza l'operatore + con una stringa e un numero, il numero viene automaticamente convertito in una stringa e i due valori vengono concatenati. Questo comportamento è noto come coercizione di tipo.

Esempio pratico:

Nota:

Se entrambi gli operandi fossero numeri, l'operatore + eseguirebbe una somma aritmetica.
La coercizione di tipo è automatica e può portare a risultati inattesi se non gestita correttamente.
Se hai bisogno di ulteriori esempi o spiegazioni, fammi sapere!


// 7. Scrivi una funzione JavaScript che accetta una stringa e restituisce true se la stringa è palindroma, false altrimenti.

function isPalindrome(valore){
if valore.reverse === !valore {
    return false
}
else {
    return true
}
}

Il codice fornito per la funzione isPalindrome contiene errori logici e di sintassi. La funzione non verifica correttamente se una stringa è palindroma. Ecco una versione corretta e funzionante:

'''
function isPalindrome(valore) {
    // Converte il valore in stringa e lo confronta con la sua versione invertita
    const reversed = valore.split('').reverse().join('');
    return valore === reversed;
}
'''

// Esempio di utilizzo
console.log(isPalindrome("radar")); // Output: true
console.log(isPalindrome("hello")); // Output: false

Correzioni apportate:

Errore di sintassi: La condizione if valore.reverse === !valore è errata. Il metodo .reverse() funziona solo sugli array, quindi è necessario convertire la stringa in un array con .split('').
Logica: La funzione deve confrontare la stringa originale con la sua versione invertita.
Chiusura del ciclo: Ho utilizzato .join('') per ricostruire la stringa invertita dopo averla trasformata in array e invertita.

// 8. Come si imposta un input di tipo password in HTML e come si può mostrare/nascondere il valore digitato tramite JavaScript?

// 9. In Express, come si accede ai dati inviati nel body di una richiesta POST in formato JSON?

// 10. Scrivi una regola CSS che rende rosso il testo di tutti i link (<a>) quando il mouse passa sopra.

// 11. Qual è la differenza tra un tag <section> e un tag <article> in HTML? Fai un esempio pratico di utilizzo.

// 12. Scrivi una query SQL per selezionare tutte le pizze con prezzo superiore a 8 euro e ordinale per nome in ordine crescente.

// 13. In CSS, come si selezionano tutti i <li> che sono il primo figlio di ogni <ul>?

// 14. Quale proprietà CSS permette di centrare verticalmente un elemento all'interno di un flex container?

// 15. Dato l'array const utenti = [{nome: "Anna"}, {nome: "Luca"}], come puoi ottenere un array con solo i nomi usando map?

// 16. Spiega la differenza tra == e === in JavaScript con un esempio pratico.

// 17. Scrivi una funzione JavaScript che restituisce true se un numero passato come parametro è pari, false altrimenti.

// 18. Come si gestisce la validazione di un campo obbligatorio in un form HTML senza usare JavaScript?

// 19. In una richiesta HTTP con Express, dove si trovano i parametri passati tramite query string?

// 20. Scrivi un esempio di media query CSS che nasconde un elemento con classe "sidebar" su schermi con larghezza inferiore a 600px.

// 21. Qual è la differenza tra display: none e visibility: hidden in CSS?

// 22. Descrivi cosa fa il metodo Array.filter() in JavaScript e fornisci un esempio pratico.

// 23. Come si crea una relazione molti-a-molti tra due tabelle in MySQL? Scrivi la struttura delle tabelle coinvolte.

// 24. In React, cosa sono i controlled components? Fai un esempio di input controllato.

// 25. Spiega la differenza tra props e state in un componente React.

// 26. Scrivi una funzione JavaScript che restituisce la somma di tutti i numeri di un array usando reduce.

// 27. Come si effettua una richiesta GET verso un'API in React usando axios e useEffect?

// 28. In Express, come si definisce una rotta che accetta un parametro dinamico nell'URL? Fai un esempio.

// 29. Qual è la differenza tra INNER JOIN e LEFT JOIN in SQL? Fai un esempio di query per ciascuno.

// 30. Scrivi un esempio di funzione middleware personalizzata in Express che logga il metodo e il percorso di ogni richiesta.

// 31. In CSS Flexbox, come si distribuiscono gli elementi figli con spazio uguale tra loro?

// 32. Come si aggiorna in modo immutabile una proprietà di un oggetto nello stato di React?

// 33. Scrivi una funzione JavaScript che restituisce un nuovo array con solo i numeri dispari da un array di numeri.

// 34. In un form React con più campi, come si gestisce lo stato di tutti i campi con un solo useState?

// 35. Qual è la differenza tra GET e POST nelle richieste HTTP? Quando si usa ciascuno? e le altre operazioni CRUD?

// 36. Scrivi una query SQL per contare quante pizze ci sono per ogni categoria.

// 37. In Node.js, a cosa serve il file package.json?

// 38. Come si configura un proxy in vite.config.js per inoltrare le richieste API al backend?

// 39. In React Router, come si definisce una rotta dinamica e come si accede al parametro nell'URL?

// 40. Scrivi un esempio di funzione che usa il destructuring delle props in un componente React.