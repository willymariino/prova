Ottimo! Vediamo un **caso pratico** di `useState` applicato a una lista di elementi e come possiamo modificarla dinamicamente. 🚀

---

### **Gestire una lista con useState**
Immaginiamo di avere una lista di attività (`to-do list`) e vogliamo aggiungere o rimuovere elementi.

```js
import { useState } from "react";

function ListaAttività() {
  const [attività, setAttività] = useState(["Studiare React", "Fare esercizi"]); 

  function aggiungiAttività() {
    setAttività([...attività, "Nuova attività"]);
  }

  function rimuoviUltima() {
    setAttività(attività.slice(0, -1));
  }

  return (
    <div>
      <h3>Lista attività:</h3>
      <ul>
        {attività.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={aggiungiAttività}>Aggiungi attività</button>
      <button onClick={rimuoviUltima}>Rimuovi ultima</button>
    </div>
  );
}

export default ListaAttività;
```

### **Cosa succede qui?**
- `useState(["Studiare React", "Fare esercizi"])`: lo stato iniziale è un **array di stringhe**.
- `setAttività([...attività, "Nuova attività"])`: crea un nuovo array **copia** e aggiunge `"Nuova attività"`, mantenendo le precedenti.
- `slice(0, -1)`: rimuove **l'ultima attività**.

---

### **Come usare useEffect per recuperare dati da un'API?**
Ora, vediamo un esempio più avanzato con `useEffect`: recuperare dati da un'API quando il componente viene montato.

```js
import { useState, useEffect } from "react";

function ListaPost() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
      const data = await response.json();
      setPost(data);
    }

    fetchData();
  }, []); // Effetto eseguito solo una volta

  return (
    <div>
      <h3>Post dal server:</h3>
      <ul>
        {post.map(p => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListaPost;
```

### **Cosa succede qui?**
- `useEffect(() => {...}, [])`: esegue il codice **solo al primo render**.
- `fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")`: chiama un'API per ottenere 5 post.
- `setPost(data)`: aggiorna lo stato con i post ricevuti.

---

### **useContext per condividere dati tra componenti**
Ora, vediamo **useContext**, utile per condividere dati senza passare "props" manualmente.

#### **Creiamo un contesto tema (Light/Dark)**
```js
import { createContext, useContext, useState } from "react";

const TemaContext = createContext();

function TemaProvider({ children }) {
  const [tema, setTema] = useState("light");

  return (
    <TemaContext.Provider value={{ tema, setTema }}>
      {children}
    </TemaContext.Provider>
  );
}

function BottoneTema() {
  const { tema, setTema } = useContext(TemaContext);

  return (
    <button onClick={() => setTema(tema === "light" ? "dark" : "light")}>
      Cambia tema (attuale: {tema})
    </button>
  );
}

function App() {
  return (
    <TemaProvider>
      <h2>Benvenuto!</h2>
      <BottoneTema />
    </TemaProvider>
  );
}

export default App;
```

### **Cosa succede qui?**
- `createContext()`: crea un **contenitore di dati condivisi**.
- `<TemaContext.Provider>`: distribuisce il valore del tema a tutti i componenti figli.
- `useContext(TemaContext)`: permette ai componenti di **accedere al tema senza passare prop manualmente**.
- `"light" / "dark"`: il bottone cambia tema **dinamicamente**.

---

🎉 Ora hai esempi pratici di `useState`, `useEffect` e `useContext`! Vuoi provare a modificarli o ti servono altri dettagli? 🚀