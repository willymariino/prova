Esatto! **Ogni volta che clicchi il pulsante "Aggiungi attività"**, il codice aggiunge sempre e solo `"Nuova attività"` alla lista, senza variazioni. Se lo premi più volte, otterrai un elenco che ripete sempre `"Nuova attività"` dopo le attività iniziali.

---

### **Come posso far aggiungere un'attività personalizzata?**
Se vuoi che l'utente possa **inserire una nuova attività**, puoi aggiungere un input e modificare `aggiungiAttività`:

```js
import { useState } from "react";

function ListaAttività() {
  const [attività, setAttività] = useState(["Studiare React", "Fare esercizi"]);
  const [nuovaAttività, setNuovaAttività] = useState("");

  function aggiungiAttività() {
    if (nuovaAttività.trim() !== "") {
      setAttività([...attività, nuovaAttività]);
      setNuovaAttività(""); // Pulisce l'input dopo l'inserimento
    }
  }

  return (
    <div>
      <h3>Lista attività:</h3>
      <ul>
        {attività.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <input
        type="text"
        value={nuovaAttività}
        onChange={e => setNuovaAttività(e.target.value)}
        placeholder="Scrivi una nuova attività..."
      />
      <button onClick={aggiungiAttività}>Aggiungi attività</button>
    </div>
  );
}

export default ListaAttività;
```

### **Cosa cambia qui?**
- **Usiamo `useState("")` per gestire l'input**.
- **L'utente può scrivere un'attività personalizzata**.
- **Evitiamo l'aggiunta di spazi vuoti (`trim() !== ""`)**.
- **L'input si pulisce dopo aver aggiunto un'attività (`setNuovaAttività("")`)**.

---

🔥 Ora puoi creare una lista dinamica con attività personalizzate! Vuoi qualche altra modifica o spiegazione? 🚀


# spiegazione di quando serve il tag `<form>` #


Ottima osservazione! In React, **non è obbligatorio** racchiudere l’`<input>` in un `<form>` per funzionare, soprattutto se gestiamo l’evento di input manualmente con `onChange` e `useState`. 

### **Quando serve `<form>`?**
L’uso del `<form>` diventa utile se vogliamo:
- **Inviare i dati** quando l’utente preme `Enter`.
- **Gestire l’invio automatico** con `onSubmit`.

Se vogliamo far sì che l’utente possa premere `Enter` per aggiungere un'attività, possiamo modificare l’esempio così:

```js
import { useState } from "react";

function ListaAttività() {
  const [attività, setAttività] = useState(["Studiare React", "Fare esercizi"]);
  const [nuovaAttività, setNuovaAttività] = useState("");

  function handleSubmit(e) {
    e.preventDefault(); // Evita il refresh della pagina
    if (nuovaAttività.trim() !== "") {
      setAttività([...attività, nuovaAttività]);
      setNuovaAttività(""); // Pulisce l'input
    }
  }

  return (
    <div>
      <h3>Lista attività:</h3>
      <ul>
        {attività.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={nuovaAttività}
          onChange={e => setNuovaAttività(e.target.value)}
          placeholder="Scrivi una nuova attività..."
        />
        <button type="submit">Aggiungi attività</button>
      </form>
    </div>
  );
}

export default ListaAttività;
```

### **Cosa cambia con `<form>`?**
- **`onSubmit={handleSubmit}`**: Ora il modulo gestisce l’invio.
- **`e.preventDefault()`**: Evita il refresh automatico della pagina.
- **Puoi premere `Enter` per aggiungere attività**, senza cliccare il bottone.

📌 **Conclusione**: Se vuoi un comportamento più naturale con `Enter`, è utile usare `<form>`, ma per gestire lo stato e aggiornare la lista, **non è strettamente necessario**.

Vuoi provare ad aggiungere un comportamento extra, tipo eliminare elementi uno a uno? 🚀


# aggiunta del tasto cancella #


Perfetto! Aggiungiamo la possibilità di **eliminare un elemento specifico** dalla lista. Per farlo, ogni attività avrà un **pulsante "Elimina"** accanto.

Ecco il codice aggiornato:

```js
import { useState } from "react";

function ListaAttività() {
  const [attività, setAttività] = useState(["Studiare React", "Fare esercizi"]);
  const [nuovaAttività, setNuovaAttività] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (nuovaAttività.trim() !== "") {
      setAttività([...attività, nuovaAttività]);
      setNuovaAttività("");
    }
  }

  function eliminaAttività(index) {
    setAttività(attività.filter((_, i) => i !== index));
  }

  return (
    <div>
      <h3>Lista attività:</h3>
      <ul>
        {attività.map((item, index) => (
          <li key={index}>
            {item} 
            <button onClick={() => eliminaAttività(index)}>❌</button>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={nuovaAttività}
          onChange={e => setNuovaAttività(e.target.value)}
          placeholder="Scrivi una nuova attività..."
        />
        <button type="submit">Aggiungi attività</button>
      </form>
    </div>
  );
}

export default ListaAttività;
```

### **Cosa abbiamo aggiunto?**
1. **`eliminaAttività(index)`**: Elimina un'attività basandosi sull'indice.
2. **`filter((_, i) => i !== index)`**: Crea una nuova lista senza l'elemento selezionato.
3. **Bottone "❌" accanto a ogni attività**: Quando lo clicchi, rimuove l'elemento.

🔥 Ora gli utenti possono **aggiungere e rimuovere attività** facilmente! Vuoi aggiungere qualche altra funzionalità? 🚀


# aggiunta del filtro per categoria #



Ottima scelta! Implementiamo un sistema di **filtri per categoria** in modo che l'utente possa selezionare e visualizzare solo determinate attività.

---

### **Passaggi per filtrare le attività per categoria**
1. **Modifica lo stato per includere la categoria**.
2. **Aggiungi un menu a tendina per selezionare il filtro**.
3. **Usa `filter()` per mostrare solo le attività della categoria selezionata**.

Ecco il codice aggiornato:

```js
import { useState } from "react";

function ListaAttività() {
  const [attività, setAttività] = useState([
    { nome: "Studiare React", categoria: "Studio" },
    { nome: "Fare esercizi", categoria: "Salute" },
    { nome: "Guardare un film", categoria: "Tempo libero" }
  ]);
  
  const [nuovaAttività, setNuovaAttività] = useState("");
  const [categoria, setCategoria] = useState("Tutte"); // Stato del filtro

  function handleSubmit(e) {
    e.preventDefault();
    if (nuovaAttività.trim() !== "") {
      setAttività([...attività, { nome: nuovaAttività, categoria }]);
      setNuovaAttività("");
    }
  }

  function eliminaAttività(index) {
    setAttività(attività.filter((_, i) => i !== index));
  }

  // Filtra le attività in base alla categoria selezionata
  const attivitàFiltrate = categoria === "Tutte"
    ? attività
    : attività.filter(item => item.categoria === categoria);

  return (
    <div>
      <h3>Lista attività:</h3>

      {/* Menu per selezionare la categoria */}
      <label>Filtra per categoria:</label>
      <select onChange={(e) => setCategoria(e.target.value)}>
        <option value="Tutte">Tutte</option>
        <option value="Studio">Studio</option>
        <option value="Salute">Salute</option>
        <option value="Tempo libero">Tempo libero</option>
      </select>

      <ul>
        {attivitàFiltrate.map((item, index) => (
          <li key={index}>
            {item.nome} ({item.categoria})
            <button onClick={() => eliminaAttività(index)}>❌</button>
          </li>
        ))}
      </ul>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={nuovaAttività}
          onChange={e => setNuovaAttività(e.target.value)}
          placeholder="Scrivi una nuova attività..."
        />
        <button type="submit">Aggiungi attività</button>
      </form>
    </div>
  );
}

export default ListaAttività;
```

---

### **🧐 Cosa abbiamo aggiunto?**
✅ **Stato `categoria`**: Permette di selezionare la categoria da filtrare.  
✅ **Dropdown `<select>`**: L'utente può scegliere una categoria.  
✅ **Funzione `filter()`**: Mostra solo le attività della categoria selezionata.  
✅ **Le attività ora hanno una categoria associata**.

💡 Ora puoi filtrare la lista e mostrare solo le attività **Studio**, **Salute** o **Tempo libero**!

Vuoi aggiungere la possibilità di modificare un'attività esistente invece di eliminarla? 🚀

# aggiunta barra di ricerca per i todo

Ottima idea! Aggiungiamo una **barra di ricerca** per filtrare le attività in base al testo inserito. Così, l'utente può digitare una parola e vedere solo i to-do che la contengono.

---

### **🛠️ Passaggi per aggiungere la barra di ricerca**
1. **Creiamo uno stato `query` per gestire il testo della ricerca**.
2. **Filtriamo le attività in base a `query`**.
3. **Aggiorniamo la lista in tempo reale mentre l'utente scrive**.

Ecco il codice aggiornato:

```js
import { useState } from "react";

function ListaAttività() {
  const [attività, setAttività] = useState([
    { nome: "Studiare React", categoria: "Studio" },
    { nome: "Fare esercizi", categoria: "Salute" },
    { nome: "Guardare un film", categoria: "Tempo libero" }
  ]);
  
  const [nuovaAttività, setNuovaAttività] = useState("");
  const [categoria, setCategoria] = useState("Tutte"); // Filtro per categoria
  const [query, setQuery] = useState(""); // Barra di ricerca

  function handleSubmit(e) {
    e.preventDefault();
    if (nuovaAttività.trim() !== "") {
      setAttività([...attività, { nome: nuovaAttività, categoria }]);
      setNuovaAttività("");
    }
  }

  function eliminaAttività(index) {
    setAttività(attività.filter((_, i) => i !== index));
  }

  // Filtra le attività in base alla categoria e al testo della ricerca
  const attivitàFiltrate = attività.filter(item =>
    (categoria === "Tutte" || item.categoria === categoria) &&
    item.nome.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <h3>Lista attività:</h3>

      {/* Barra di ricerca */}
      <input
        type="text"
        placeholder="Cerca attività..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {/* Selezione categoria */}
      <label>Filtra per categoria:</label>
      <select onChange={(e) => setCategoria(e.target.value)}>
        <option value="Tutte">Tutte</option>
        <option value="Studio">Studio</option>
        <option value="Salute">Salute</option>
        <option value="Tempo libero">Tempo libero</option>
      </select>

      <ul>
        {attivitàFiltrate.map((item, index) => (
          <li key={index}>
            {item.nome} ({item.categoria})
            <button onClick={() => eliminaAttività(index)}>❌</button>
          </li>
        ))}
      </ul>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={nuovaAttività}
          onChange={e => setNuovaAttività(e.target.value)}
          placeholder="Scrivi una nuova attività..."
        />
        <button type="submit">Aggiungi attività</button>
      </form>
    </div>
  );
}

export default ListaAttività;
```

---

### **🚀 Cosa abbiamo aggiunto?**
✅ **Stato `query`**: Contiene il testo inserito nella barra di ricerca.  
✅ **`toLowerCase()`**: Converte tutto in minuscolo per una ricerca **case insensitive**.  
✅ **`includes(query)`**: Controlla se il nome dell'attività **contiene** il testo digitato.  
✅ **Filtriamo le attività in base a *categoria* e *query*, mostrando solo quelle rilevanti**.  

💡 **Ora puoi cercare tra le attività mentre scrivi!** Vuoi che aggiungiamo anche la **modifica delle attività**? 🚀

# aggiunta opzione modifica attività esistenti

Perfetto! Aggiungiamo la **modifica delle attività esistenti**, così gli utenti potranno **aggiornare il nome** di una voce nella lista anziché eliminarla e ricrearla. 💡

---

### **🛠️ Passaggi per implementare la modifica**
1️⃣ **Aggiungiamo uno stato `modificaIndex` per identificare quale attività viene modificata**.  
2️⃣ **Mostriamo un input invece del testo quando l'utente clicca "Modifica"**.  
3️⃣ **Aggiorniamo la lista con il nuovo valore quando l'utente conferma la modifica**.  

---

### **📜 Codice aggiornato**
```js
import { useState } from "react";

function ListaAttività() {
  const [attività, setAttività] = useState([
    { nome: "Studiare React", categoria: "Studio" },
    { nome: "Fare esercizi", categoria: "Salute" },
    { nome: "Guardare un film", categoria: "Tempo libero" }
  ]);
  
  const [nuovaAttività, setNuovaAttività] = useState("");
  const [categoria, setCategoria] = useState("Tutte"); 
  const [query, setQuery] = useState(""); 
  const [modificaIndex, setModificaIndex] = useState(null); 
  const [modificaTesto, setModificaTesto] = useState(""); 

  function handleSubmit(e) {
    e.preventDefault();
    if (nuovaAttività.trim() !== "") {
      setAttività([...attività, { nome: nuovaAttività, categoria }]);
      setNuovaAttività("");
    }
  }

  function eliminaAttività(index) {
    setAttività(attività.filter((_, i) => i !== index));
  }

  function avviaModifica(index) {
    setModificaIndex(index);
    setModificaTesto(attività[index].nome);
  }

  function confermaModifica(index) {
    const attivitàAggiornate = [...attività];
    attivitàAggiornate[index].nome = modificaTesto;
    setAttività(attivitàAggiornate);
    setModificaIndex(null); 
  }

  const attivitàFiltrate = attività.filter(item =>
    (categoria === "Tutte" || item.categoria === categoria) &&
    item.nome.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <h3>Lista attività:</h3>

      <input
        type="text"
        placeholder="Cerca attività..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <label>Filtra per categoria:</label>
      <select onChange={(e) => setCategoria(e.target.value)}>
        <option value="Tutte">Tutte</option>
        <option value="Studio">Studio</option>
        <option value="Salute">Salute</option>
        <option value="Tempo libero">Tempo libero</option>
      </select>

      <ul>
        {attivitàFiltrate.map((item, index) => (
          <li key={index}>
            {modificaIndex === index ? (
              <>
                <input
                  type="text"
                  value={modificaTesto}
                  onChange={(e) => setModificaTesto(e.target.value)}
                />
                <button onClick={() => confermaModifica(index)}>✔️</button>
                <button onClick={() => setModificaIndex(null)}>❌</button>
              </>
            ) : (
              <>
                {item.nome} ({item.categoria}) 
                <button onClick={() => avviaModifica(index)}>✏️</button>
                <button onClick={() => eliminaAttività(index)}>❌</button>
              </>
            )}
          </li>
        ))}
      </ul>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={nuovaAttività}
          onChange={e => setNuovaAttività(e.target.value)}
          placeholder="Scrivi una nuova attività..."
        />
        <button type="submit">Aggiungi attività</button>
      </form>
    </div>
  );
}

export default ListaAttività;
```

---

### **🚀 Cosa abbiamo aggiunto?**
✅ **`modificaIndex`**: Identifica l'elemento in modifica.  
✅ **Quando un'attività è in modifica, sostituiamo il testo con un input**.  
✅ **`avviaModifica(index)`**: Inserisce il testo dell'attività nell'input per modificarlo.  
✅ **`confermaModifica(index)`**: Aggiorna la lista e salva il nuovo nome.  
✅ **Bottone ✏️** per modificare un'attività.  

---

💡 Ora puoi **cercare, filtrare, modificare ed eliminare** le attività! 🎯  
Vuoi migliorare ancora di più l'app, magari salvando i dati su `localStorage`? 🚀

# aggiunta local storage
 Ottima scelta! Aggiungiamo **Local Storage** per **salvare le attività anche dopo il refresh della pagina**. 🗄️✨

---

### **🛠️ Passaggi per usare Local Storage**
1️⃣ **Quando lo stato `attività` cambia, salviamo la lista nel localStorage**.  
2️⃣ **Al caricamento della pagina, recuperiamo i dati salvati**.  
3️⃣ **Verifichiamo se ci sono dati validi prima di aggiornarli**.  

---

### **📜 Codice aggiornato con Local Storage**
```js
import { useState, useEffect } from "react";

function ListaAttività() {
  const [attività, setAttività] = useState([]);
  const [nuovaAttività, setNuovaAttività] = useState("");
  const [categoria, setCategoria] = useState("Tutte");
  const [query, setQuery] = useState("");
  const [modificaIndex, setModificaIndex] = useState(null);
  const [modificaTesto, setModificaTesto] = useState("");

  // 🚀 Recuperiamo le attività dal Local Storage al caricamento della pagina
  useEffect(() => {
    const datiSalvati = JSON.parse(localStorage.getItem("attività"));
    if (datiSalvati) {
      setAttività(datiSalvati);
    }
  }, []);

  // 📝 Salviamo le attività ogni volta che cambiano
  useEffect(() => {
    localStorage.setItem("attività", JSON.stringify(attività));
  }, [attività]);

  function handleSubmit(e) {
    e.preventDefault();
    if (nuovaAttività.trim() !== "") {
      setAttività([...attività, { nome: nuovaAttività, categoria }]);
      setNuovaAttività("");
    }
  }

  function eliminaAttività(index) {
    setAttività(attività.filter((_, i) => i !== index));
  }

  function avviaModifica(index) {
    setModificaIndex(index);
    setModificaTesto(attività[index].nome);
  }

  function confermaModifica(index) {
    const attivitàAggiornate = [...attività];
    attivitàAggiornate[index].nome = modificaTesto;
    setAttività(attivitàAggiornate);
    setModificaIndex(null);
  }

  const attivitàFiltrate = attività.filter(item =>
    (categoria === "Tutte" || item.categoria === categoria) &&
    item.nome.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <h3>Lista attività:</h3>

      <input
        type="text"
        placeholder="Cerca attività..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <label>Filtra per categoria:</label>
      <select onChange={(e) => setCategoria(e.target.value)}>
        <option value="Tutte">Tutte</option>
        <option value="Studio">Studio</option>
        <option value="Salute">Salute</option>
        <option value="Tempo libero">Tempo libero</option>
      </select>

      <ul>
        {attivitàFiltrate.map((item, index) => (
          <li key={index}>
            {modificaIndex === index ? (
              <>
                <input
                  type="text"
                  value={modificaTesto}
                  onChange={(e) => setModificaTesto(e.target.value)}
                />
                <button onClick={() => confermaModifica(index)}>✔️</button>
                <button onClick={() => setModificaIndex(null)}>❌</button>
              </>
            ) : (
              <>
                {item.nome} ({item.categoria}) 
                <button onClick={() => avviaModifica(index)}>✏️</button>
                <button onClick={() => eliminaAttività(index)}>❌</button>
              </>
            )}
          </li>
        ))}
      </ul>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={nuovaAttività}
          onChange={e => setNuovaAttività(e.target.value)}
          placeholder="Scrivi una nuova attività..."
        />
        <button type="submit">Aggiungi attività</button>
      </form>
    </div>
  );
}

export default ListaAttività;
```

---

### **🚀 Cosa abbiamo aggiunto?**
✅ **`useEffect(() => localStorage.setItem("attività", JSON.stringify(attività), [attività])`** → Salva le attività ogni volta che cambiano.  
✅ **`useEffect(() => { setAttività(JSON.parse(localStorage.getItem("attività"))); }, [])`** → Recupera le attività salvate quando la pagina viene caricata.  
✅ **Ora, anche se chiudi la scheda, le attività rimarranno salvate!** 🎯  

---

🔥 Vuoi aggiungere una funzione che permetta di **segnare le attività come completate** con un checkbox? 🚀

# aggiunta di checkbox da spuntare

Perfetto! Aggiungiamo la possibilità di **segnare le attività come completate** con un checkbox. ✅

---

### **🛠️ Passaggi per implementare il completamento delle attività**
1️⃣ **Aggiungiamo un nuovo stato `completata` dentro ogni attività**.  
2️⃣ **Usiamo un checkbox per cambiare `completata` da `true` a `false`**.  
3️⃣ **Modifichiamo lo stile per evidenziare le attività completate**.  

---

### **📜 Codice aggiornato con attività completate**
```js
import { useState, useEffect } from "react";

function ListaAttività() {
  const [attività, setAttività] = useState([]);
  const [nuovaAttività, setNuovaAttività] = useState("");
  const [categoria, setCategoria] = useState("Tutte");
  const [query, setQuery] = useState("");
  const [modificaIndex, setModificaIndex] = useState(null);
  const [modificaTesto, setModificaTesto] = useState("");

  useEffect(() => {
    const datiSalvati = JSON.parse(localStorage.getItem("attività"));
    if (datiSalvati) {
      setAttività(datiSalvati);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("attività", JSON.stringify(attività));
  }, [attività]);

  function handleSubmit(e) {
    e.preventDefault();
    if (nuovaAttività.trim() !== "") {
      setAttività([...attività, { nome: nuovaAttività, categoria, completata: false }]);
      setNuovaAttività("");
    }
  }

  function eliminaAttività(index) {
    setAttività(attività.filter((_, i) => i !== index));
  }

  function avviaModifica(index) {
    setModificaIndex(index);
    setModificaTesto(attività[index].nome);
  }

  function confermaModifica(index) {
    const attivitàAggiornate = [...attività];
    attivitàAggiornate[index].nome = modificaTesto;
    setAttività(attivitàAggiornate);
    setModificaIndex(null);
  }

  function toggleCompletata(index) {
    const attivitàAggiornate = [...attività];
    attivitàAggiornate[index].completata = !attivitàAggiornate[index].completata;
    setAttività(attivitàAggiornate);
  }

  const attivitàFiltrate = attività.filter(item =>
    (categoria === "Tutte" || item.categoria === categoria) &&
    item.nome.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <h3>Lista attività:</h3>

      <input
        type="text"
        placeholder="Cerca attività..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <label>Filtra per categoria:</label>
      <select onChange={(e) => setCategoria(e.target.value)}>
        <option value="Tutte">Tutte</option>
        <option value="Studio">Studio</option>
        <option value="Salute">Salute</option>
        <option value="Tempo libero">Tempo libero</option>
      </select>

      <ul>
        {attivitàFiltrate.map((item, index) => (
          <li key={index} style={{ textDecoration: item.completata ? "line-through" : "none", color: item.completata ? "gray" : "black" }}>
            <input type="checkbox" checked={item.completata} onChange={() => toggleCompletata(index)} />
            {modificaIndex === index ? (
              <>
                <input
                  type="text"
                  value={modificaTesto}
                  onChange={(e) => setModificaTesto(e.target.value)}
                />
                <button onClick={() => confermaModifica(index)}>✔️</button>
                <button onClick={() => setModificaIndex(null)}>❌</button>
              </>
            ) : (
              <>
                {item.nome} ({item.categoria}) 
                <button onClick={() => avviaModifica(index)}>✏️</button>
                <button onClick={() => eliminaAttività(index)}>❌</button>
              </>
            )}
          </li>
        ))}
      </ul>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={nuovaAttività}
          onChange={e => setNuovaAttività(e.target.value)}
          placeholder="Scrivi una nuova attività..."
        />
        <button type="submit">Aggiungi attività</button>
      </form>
    </div>
  );
}

export default ListaAttività;
```

---

### **🚀 Cosa abbiamo aggiunto?**
✅ **`completata: false`** → Ogni attività ha un valore di completamento.  
✅ **Checkbox accanto a ogni attività** → Permette di segnarla come completata/non completata.  
✅ **`textDecoration: line-through`** → Le attività completate vengono barrate e diventano grigie.  
✅ **Funzione `toggleCompletata(index)`** → Inverte lo stato della proprietà `completata`.  

🔹 Ora puoi **aggiungere, cercare, filtrare, modificare, eliminare e completare** le attività! 🎯  

Vuoi migliorare ancora l'app, magari mostrando **quante attività sono rimaste da completare**? 🚀

# aggiunta conteggio attività non completate

Ottimo! Aggiungiamo un contatore che mostra **quante attività sono ancora da completare**. 📊✅  

---

### **🛠️ Passaggi per implementare il contatore**
1️⃣ **Creiamo una funzione che calcola il numero di attività ancora da completare**.  
2️⃣ **Aggiorniamo il valore ogni volta che cambia lo stato delle attività**.  
3️⃣ **Mostriamo il numero totale di attività incomplete sopra la lista**.  

---

### **📜 Codice aggiornato con contatore attività incomplete**
```js
import { useState, useEffect } from "react";

function ListaAttività() {
  const [attività, setAttività] = useState([]);
  const [nuovaAttività, setNuovaAttività] = useState("");
  const [categoria, setCategoria] = useState("Tutte");
  const [query, setQuery] = useState("");
  const [modificaIndex, setModificaIndex] = useState(null);
  const [modificaTesto, setModificaTesto] = useState("");

  useEffect(() => {
    const datiSalvati = JSON.parse(localStorage.getItem("attività"));
    if (datiSalvati) {
      setAttività(datiSalvati);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("attività", JSON.stringify(attività));
  }, [attività]);

  function handleSubmit(e) {
    e.preventDefault();
    if (nuovaAttività.trim() !== "") {
      setAttività([...attività, { nome: nuovaAttività, categoria, completata: false }]);
      setNuovaAttività("");
    }
  }

  function eliminaAttività(index) {
    setAttività(attività.filter((_, i) => i !== index));
  }

  function avviaModifica(index) {
    setModificaIndex(index);
    setModificaTesto(attività[index].nome);
  }

  function confermaModifica(index) {
    const attivitàAggiornate = [...attività];
    attivitàAggiornate[index].nome = modificaTesto;
    setAttività(attivitàAggiornate);
    setModificaIndex(null);
  }

  function toggleCompletata(index) {
    const attivitàAggiornate = [...attività];
    attivitàAggiornate[index].completata = !attivitàAggiornate[index].completata;
    setAttività(attivitàAggiornate);
  }

  // 🚀 Calcola quante attività non sono ancora completate
  const attivitàIncomplete = attività.filter(item => !item.completata).length;

  const attivitàFiltrate = attività.filter(item =>
    (categoria === "Tutte" || item.categoria === categoria) &&
    item.nome.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <h3>Lista attività:</h3>

      {/* Mostra il numero di attività ancora da completare */}
      <p>Attività ancora da completare: <strong>{attivitàIncomplete}</strong></p>

      <input
        type="text"
        placeholder="Cerca attività..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <label>Filtra per categoria:</label>
      <select onChange={(e) => setCategoria(e.target.value)}>
        <option value="Tutte">Tutte</option>
        <option value="Studio">Studio</option>
        <option value="Salute">Salute</option>
        <option value="Tempo libero">Tempo libero</option>
      </select>

      <ul>
        {attivitàFiltrate.map((item, index) => (
          <li key={index} style={{ textDecoration: item.completata ? "line-through" : "none", color: item.completata ? "gray" : "black" }}>
            <input type="checkbox" checked={item.completata} onChange={() => toggleCompletata(index)} />
            {modificaIndex === index ? (
              <>
                <input
                  type="text"
                  value={modificaTesto}
                  onChange={(e) => setModificaTesto(e.target.value)}
                />
                <button onClick={() => confermaModifica(index)}>✔️</button>
                <button onClick={() => setModificaIndex(null)}>❌</button>
              </>
            ) : (
              <>
                {item.nome} ({item.categoria}) 
                <button onClick={() => avviaModifica(index)}>✏️</button>
                <button onClick={() => eliminaAttività(index)}>❌</button>
              </>
            )}
          </li>
        ))}
      </ul>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={nuovaAttività}
          onChange={e => setNuovaAttività(e.target.value)}
          placeholder="Scrivi una nuova attività..."
        />
        <button type="submit">Aggiungi attività</button>
      </form>
    </div>
  );
}

export default ListaAttività;
```

---

### **🚀 Cosa abbiamo aggiunto?**
✅ **Funzione `attivitàIncomplete`** → Conta le attività **non completate**.  
✅ **Mostra il numero di attività incomplete sopra la lista**.  
✅ **Si aggiorna automaticamente quando un'attività viene completata o eliminata**.  

🔹 Ora puoi **sapere quante attività devi ancora fare** con un semplice contatore! 🎯  

🔥 Vuoi migliorare ancora l'app, magari permettendo agli utenti di **riordinare le attività manualmente**? 🚀  

# traspoertare l'app su mbile con react native?
Ottima domanda! Se vuoi **trasformare questa app in un'app mobile** con **React Native**, dovresti adattare il codice per funzionare su dispositivi mobili. 🚀  

---

### **🛠️ Passaggi per la conversione in React Native**
1️⃣ **Installare React Native** se non lo hai già:
   ```sh
   npx react-native init ListaAttivitàApp
   cd ListaAttivitàApp
   ```
2️⃣ **Sostituire i componenti web (`div`, `form`, `button`, `ul`, `li`, `input`) con componenti React Native**:
   - Usa `<View>` invece di `<div>`.
   - Usa `<Text>` invece di `<p>` o `<label>`.
   - Usa `<TextInput>` invece di `<input>`.
   - Usa `<TouchableOpacity>` o `<Pressable>` invece di `<button>`.
3️⃣ **Gestire lo stato (`useState`, `useEffect`) normalmente**.
4️⃣ **Utilizzare AsyncStorage invece di localStorage per salvare i dati**.

---

### **📜 Esempio di codice React Native**
Ecco una versione **semplificata** dell'app in React Native:  

```js
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ListaAttività() {
  const [attività, setAttività] = useState([]);
  const [nuovaAttività, setNuovaAttività] = useState("");

  useEffect(() => {
    const caricaDati = async () => {
      const datiSalvati = await AsyncStorage.getItem("attività");
      if (datiSalvati) {
        setAttività(JSON.parse(datiSalvati));
      }
    };
    caricaDati();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem("attività", JSON.stringify(attività));
  }, [attività]);

  function aggiungiAttività() {
    if (nuovaAttività.trim() !== "") {
      setAttività([...attività, { nome: nuovaAttività, completata: false }]);
      setNuovaAttività("");
    }
  }

  function eliminaAttività(index) {
    setAttività(attività.filter((_, i) => i !== index));
  }

  function toggleCompletata(index) {
    const nuovaLista = [...attività];
    nuovaLista[index].completata = !nuovaLista[index].completata;
    setAttività(nuovaLista);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titolo}>Lista Attività</Text>

      <TextInput
        style={styles.input}
        placeholder="Scrivi una nuova attività..."
        value={nuovaAttività}
        onChangeText={setNuovaAttività}
      />

      <TouchableOpacity style={styles.bottone} onPress={aggiungiAttività}>
        <Text style={styles.bottoneTesto}>Aggiungi</Text>
      </TouchableOpacity>

      <FlatList
        data={attività}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.item}>
            <Text style={item.completata ? styles.completato : styles.testo}>{item.nome}</Text>
            <TouchableOpacity onPress={() => toggleCompletata(index)}>
              <Text>{item.completata ? "✅" : "⭕"}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => eliminaAttività(index)}>
              <Text>❌</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  titolo: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  input: { borderWidth: 1, padding: 10, marginBottom: 10 },
  bottone: { backgroundColor: '#007AFF', padding: 10, borderRadius: 5 },
  bottoneTesto: { color: 'white', textAlign: 'center' },
  item: { flexDirection: 'row', justifyContent: 'space-between', padding: 10, borderBottomWidth: 1 },
  testo: { fontSize: 18 },
  completato: { fontSize: 18, textDecorationLine: 'line-through', color: 'gray' }
});
```

---

### **🚀 Cosa è cambiato rispetto a React per il web?**
✅ **Componenti mobile (`View`, `Text`, `TextInput`, `FlatList`, `TouchableOpacity`)** sostituiscono i componenti HTML.  
✅ **`AsyncStorage`** salva i dati invece di `localStorage`.  
✅ **`FlatList`** è più efficiente per liste rispetto a `.map()`.  
✅ **`StyleSheet.create()`** viene usato invece del CSS classico.  

🔹 **Ora hai un'app mobile pronta per essere testata su Android/iOS!** 🎯  

🔥 Vuoi aggiungere un'animazione per migliorare l'esperienza utente su mobile? 🚀
