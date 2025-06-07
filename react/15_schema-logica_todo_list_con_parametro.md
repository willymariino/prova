### **📌 Schema Logico - Lista Attività con Parametro in React **

#### **1️⃣ **Struttura dei file:****  
  ```
  ├── src
  │   ├── components
  │   │   ├── ListaAttività.jsx
  │   │   ├── AddTaskForm.jsx
  │   ├── App.jsx
  │   ├── index.js
  │   ├── styles.css
  ```

---

#### **2️⃣ Stato dell'applicazione**
- Lo stato è **interno al componente**, e parte con un **array vuoto**:
  ```jsx
  const [attività, setAttività] = useState([]); // ⬅️ Stato locale dell'app
  const [input, setInput] = useState("");       // ⬅️ Stato per l'input
  ```

---

#### **3️⃣ Aggiungere un'attività**
- **Funzione di gestione:**  
  ```jsx
  const aggiungiAttività = (valore) => {
    if (valore.trim() !== "") {
      setAttività([...attività, valore]); // ⬅️ Aggiorna lo stato interno
    }
  };
  ```
- **Evento `onSubmit` per il form:**  
  ```jsx
  const handleSubmit = (e) => {
    e.preventDefault();
    aggiungiAttività(input); // ⬅️ Passiamo il valore come parametro
    setInput(""); // ⬅️ Reset input dopo l'aggiunta
  };
  ```

  - **Input per l'utente:**  
 Sì, idealmente **l'`input` e il `button` dovrebbero essere dentro un `<form>`** per una corretta gestione dell'invio del dato. Il motivo principale è che il **comportamento predefinito di un form** permette di inviare i dati quando si preme "Enter" nella casella di input, rendendo l'esperienza più naturale per l'utente.

Ecco come dovresti strutturarlo:

```jsx
<form onSubmit={handleSubmit}>
  <input
    type="text"
    value={input}
    onChange={(e) => setInput(e.target.value)}
    placeholder="Scrivi attività..."
  />
  <button type="submit">Aggiungi</button>
</form>
```

### 🔹 **Perché usare `<form>`?**
✅ **Gestione automatica dell'invio:** Premendo "Enter" nell'input, l'attività viene aggiunta senza dover cliccare sul pulsante.  
✅ **Migliore accessibilità:** Browser e screen reader riconoscono il comportamento del form.  
✅ **Prevenzione del refresh della pagina:** Con `e.preventDefault()` nel `handleSubmit`, eviti il comportamento predefinito del form.  

Se invece non usassi `<form>`, dovresti gestire manualmente l'invio dell'input, perdendo il vantaggio dell'interazione automatica con il pulsante **Enter**.

---

#### **4️⃣ Visualizzazione della lista**
- Itera sull'array `attività`, che viene aggiornato localmente:
  ```jsx
  <ul>
    {attività.map((item, i) => (
      <li key={i}>{item}</li>
    ))}
  </ul>
  ```

---

#### **5️⃣ Rimuovere un'attività**
- **Pulsante accanto ad ogni attività:**  
  ```jsx
  <button onClick={() => handleDeleteTask(index)}>❌</button>
  ```
- **Funzione per eliminare un'attività:**  
  ```jsx
  const handleDeleteTask = (index) => {
    setAttività(attività.filter((_, i) => i !== index));
  };
  ```

---

#### **6️⃣ Styling**
- **CSS per le attività:**  
  ```css
  .completed {
    text-decoration: line-through;
    color: gray;
  }
  ```

---

#### **7️⃣ Persistenza dei dati (opzionale)**
- **Salvataggio su `localStorage` per mantenere i task tra i refresh:**  
  ```jsx
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(attività));
  }, [attività]);
  ```

---

#### **🔟 Testing con Jest e React Testing Library**
- **Verifica aggiunta di un task:**  
  ```jsx
  test('Aggiunta di un task', () => {
    render(<ListaAttivitàConParametro />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'Nuovo task' } });
    fireEvent.click(screen.getByText('Aggiungi'));
    expect(screen.getByText('Nuovo task')).toBeInTheDocument();
  });
  ```

 ### Differenze rispetto alla versione con stato interno
✅ **Migliore modularità**: separazione netta tra dati e logica. 
✅ **Più flessibile**: può essere usato in diversi contesti senza dipendere dallo stato interno. 

### **Vantaggi di questa versione rispetto alla successiva**
✅ **Indipendente:** l'array parte vuoto e viene popolato dinamicamente.  
✅ **Più semplice da usare:** non dipende da attività iniziali passate dal genitore.  
✅ **Perfetto per piccoli progetti locali senza dipendenza da API o backend.**  


### **📌 Schema Logico - Lista Attività con Parametro in React - versione per backend**

#### **1️⃣ Configurazione iniziale**  
  `
- **Struttura dei file:**  
  ```
  ├── src
  │   ├── components
  │   │   ├── ListaAttività.jsx
  │   │   ├── AddTaskForm.jsx
  │   ├── App.jsx
  │   ├── index.js
  │   ├── styles.css
  ```

---

#### **2️⃣ Stato dell'applicazione**
- L'array delle attività **non parte vuoto**, ma viene inizializzato con un **parametro passato dal genitore**.
- Lo stato **mantiene solo le attività aggiunte dall'utente**, senza gestire un array interno.

```jsx
import { useState } from "react";

export default function ListaAttivitàConParametro({ iniziali = [] }) {
  const [attività, setAttività] = useState(iniziali); // ⬅️ Usa il parametro passato
  const [input, setInput] = useState(""); // ⬅️ Stato solo per l'input
```

---

#### **3️⃣ Aggiungere un'attività**
- **Campo di input:**  
  ```jsx
  <input
    type="text"
    value={input}
    onChange={(e) => setInput(e.target.value)}
    placeholder="Scrivi attività..."
  />
  ```
- **Bottone di aggiunta:**  
  ```jsx
  <button type="submit">Aggiungi</button>
  ```
- **Funzione di gestione:**  
  ```jsx
  const aggiungiAttività = (valore) => {
    if (valore.trim() !== "") {
      setAttività([...attività, valore]); // ⬅️ Aggiunge il valore al parametro iniziali
    }
  };
  ```
- **Evento `onSubmit` per il form:**  
  ```jsx
  const handleSubmit = (e) => {
    e.preventDefault();
    aggiungiAttività(input); // ⬅️ Passiamo il valore come parametro
    setInput(""); // ⬅️ Reset input dopo l'aggiunta
  };
  ```

---

#### **4️⃣ Visualizzazione della lista**
- Itera sulle attività passate come prop (`iniziali`) e quelle aggiunte:
  ```jsx
  <ul>
    {attività.map((item, i) => (
      <li key={i}>{item}</li>
    ))}
  </ul>
  ```

---

#### **5️⃣ Rimuovere un'attività**
- **Aggiunta di un pulsante accanto ad ogni attività:**
  ```jsx
  <button onClick={() => handleDeleteTask(index)}>❌</button>
  ```
- **Funzione di gestione per eliminare:**  
  ```jsx
  const handleDeleteTask = (index) => {
    setAttività(attività.filter((_, i) => i !== index));
  };
  ```

---

#### **6️⃣ Segnare un'attività come completata**
- **Checkbox per aggiornare lo stato:**  
  ```jsx
  <input
    type="checkbox"
    checked={task.completed}
    onChange={() => handleToggleTask(index)}
  />
  ```
- **Funzione di gestione:**  
  ```jsx
  const handleToggleTask = (index) => {
    const updatedTasks = [...attività];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setAttività(updatedTasks);
  };
  ```

---

#### **7️⃣ Styling**
- **CSS per le attività completate:**  
  ```css
  .completed {
    text-decoration: line-through;
    color: gray;
  }
  ```

---

#### **8️⃣ Persistenza dei dati (opzionale)**
- **Salvataggio con localStorage:**  
  ```jsx
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(attività));
  }, [attività]);
  ```

---

#### **9️⃣ Componentizzazione avanzata**
- **Suddivisione in componenti riutilizzabili:**  
  ```jsx
  <ListaAttivitàConParametro iniziali={["Comprare il latte", "Fare esercizi React"]} />
  ```

---

#### **🔟 Testing con Jest e React Testing Library**
- Test per la gestione degli eventi:
  ```jsx
  test('Aggiunta di un task', () => {
    render(<ListaAttivitàConParametro iniziali={[]} />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'Nuovo task' } });
    fireEvent.click(screen.getByText('Aggiungi'));
    expect(screen.getByText('Nuovo task')).toBeInTheDocument();
  });
  ```
### 🚀 **Vantaggi di questa versione**
✅ **Migliore modularità:** separazione netta tra stato interno e dati passati come parametro.  
✅ **Più flessibile:** può essere usato in diversi contesti senza dipendere da uno stato interno.  
✅ **Ideale per backend:** il genitore può passare dati recuperati da API senza gestire `useState([])`.  

Ecco un **riassunto** dei vantaggi della versione con **backend**, rispetto a quella **senza backend**:

### 🚀 **Versione con Backend vs. Versione senza Backend**  

#### **✅ Senza Backend** (solo con `localStorage` o stato interno)
- **Dati salvati solo nel browser**, persi se si cambia dispositivo.
- **Uso singolo**, non permette accesso multiutente.
- **Facile da implementare**, ideale per progetti semplici e locali.
- **Filtri e ricerca gestiti in React**, senza possibilità di query avanzate.
- **Non scalabile**, performance limitata su dataset grandi.

#### **✅ Con Backend** (database + API)


### 🚀 **Vantaggi della versione con Backend**
✅ **Persistenza dei dati avanzata:** Le attività vengono salvate su un server e rimangono disponibili tra i refresh e su dispositivi diversi.  
✅ **Multiutenza e collaborazione:** Più utenti possono accedere alla stessa lista, modificandola in tempo reale.  
✅ **Maggiore sicurezza:** I dati sono protetti con autenticazione (`JWT`, `OAuth`) e accesso controllato.  
✅ **Query efficienti:** Filtraggio e ricerca gestiti direttamente dal database (`SQL`, `MongoDB`) per ottime performance.  
✅ **Scalabilità:** Ideale per liste con migliaia di attività e utenti.  
✅ **Integrazione con servizi esterni:** Sincronizzazione con API come Google Calendar, notifiche via email o WhatsApp.  
✅ **Accesso mobile e cross-platform:** Può essere usata su browser, app mobile o Progressive Web App (PWA).  
