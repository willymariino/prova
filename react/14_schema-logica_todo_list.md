### **📌 Schema Logico - Creazione di una To-Do List in React**

#### **1️⃣ Configurazione iniziale**
- Crea il progetto React: Usa `npx create-react-app` o un setup personalizzato.
- **Struttura dei file:**  
  ```
  ├── src
  │   ├── components
  │   │   ├── ToDoList.jsx
  │   │   ├── ToDoItem.jsx
  │   │   ├── AddTaskForm.jsx
  │   ├── App.jsx
  │   ├── index.js
  │   ├── styles.css
  ```
Ecco uno schema logico dei passaggi necessari per creare una To-Do List in React:


1. Configurazione iniziale
Crea il progetto React: Usa npx create-react-app o un setup personalizzato.
Struttura dei file: Organizza i file, ad esempio:
App.jsx: Componente principale.
ToDoList.jsx: Componente per la lista.
ToDoItem.jsx: Componente per ogni elemento della lista.

2. Stato dell'applicazione
Usa lo state per gestire i dati della lista:
Un array per memorizzare le attività (tasks).
Una stringa per il valore dell'input (newTask).
Esempio:

#### **2️⃣ Stato dell'applicazione**
- Usa `useState` per gestire i dati:
  ```jsx
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  ```

3. Aggiungere un'attività
#### **3️⃣ Aggiungere un'attività**
- **Input:** Campo di testo per inserire nuove attività.
- **Gestione evento:** `onChange` per aggiornare `newTask`.
- **Aggiunta:** Bottone con `onClick` per aggiornare `tasks`.
  
  ```jsx
  <input
    type="text"
    value={newTask}
    onChange={(e) => setNewTask(e.target.value)}
  />
  ```
- **Pulsante di aggiunta:**  
  ```jsx
  <button onClick={handleAddTask}>Aggiungi</button>
  ```
- **Funzione di gestione:**  
  ```jsx
  const handleAddTask = () => {
    if (newTask.trim() === '') return;
    setTasks([...tasks, { text: newTask, completed: false }]);
    setNewTask('');
  };
  ```

---

#### **4️⃣ Visualizzare la lista**
- Itera sui task con `.map()`:  
  ```jsx
  {tasks.map((task, index) => (
    <ToDoItem key={index} task={task} onDelete={() => handleDeleteTask(index)} />
  ))}
  ```

---

#### **5️⃣ Rimuovere un'attività**
- Pulsante accanto a ogni task:
  ```jsx
  <button onClick={() => handleDeleteTask(index)}>❌</button>
  ```
- **Funzione di gestione:**  
  ```jsx
  const handleDeleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
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
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
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

#### **8️⃣ Persistenza dei dati**
- **Salvataggio con localStorage:**  
  ```jsx
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);
  ```

---

#### **9️⃣ Componentizzazione avanzata**
- **Separazione dei componenti per riusabilità:**  
  ```jsx
  <ToDoList tasks={tasks} onDelete={handleDeleteTask} onToggle={handleToggleTask} />
  ```
---

#### **🔟 Testing con Jest e React Testing Library**
- Test per la gestione degli eventi:
  ```jsx
  test('Aggiunta di un task', () => {
    render(<App />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'Nuovo task' } });
    fireEvent.click(screen.getByText('Aggiungi'));
    expect(screen.getByText('Nuovo task')).toBeInTheDocument();
  });
  ```

---

### 🛠 **Come Contribuire**
Se vuoi contribuire al progetto, segui questi passi:

1. **Forka il repository** su GitHub.
2. **Clona il repository**:
   ```bash
   git clone https://github.com/tuo-username/todo-list.git
   cd todo-list
   ```
3. **Crea un branch per la tua modifica**:
   ```bash
   git checkout -b feature-miglioramento-UX
   ```
4. **Apporta le modifiche** al codice e **committa**:
   ```bash
   git add .
   git commit -m "Migliorata l'UX della lista"
   ```
5. **Push del branch**:
   ```bash
   git push origin feature-miglioramento-UX
   ```
6. **Apri una Pull Request** e descrivi le modifiche fatte.

💡 **Linee guida**
- Mantieni il codice leggibile e ben documentato.
- Segui il formato dei commit standard (es. `feat: Aggiunta gestione errore input`).
- Testa le tue modifiche prima di inviare la PR.

---

Con questa versione il file sarà ben strutturato e facilmente leggibile una volta pushato su GitHub! 😃 Ti piace così? Vuoi aggiungere altri dettagli? 🚀



#### **4️⃣ Visualizzare la lista**
Usa il metodo `.map()` per iterare sull'array tasks e renderizzare ogni attività come componente o elemento HTML.

#### **5️⃣ Rimuovere un'attività**
Aggiungi un pulsante accanto a ogni attività.
Usa un evento onClick per rimuovere l'attività dall'array tasks (filtrando l'array).

6. Segnare un'attività come completata
Aggiungi una proprietà completed a ogni attività.
Usa un evento (es. onClick o una checkbox) per aggiornare lo stato completed di un'attività.

#### **6️⃣ Segnare un'attività come completata**
- **Aggiunta proprietà `completed`.**  
  ```jsx
  const [tasks, setTasks] = useState([{ text: "Prova", completed: false }]);
  ```
- **Checkbox o click per aggiornare lo stato.**

#### **7️⃣ Styling**
Usa CSS per:
Differenziare le attività completate (es. con una linea barrata).
Rendere l'interfaccia più user-friendly.
#### **7️⃣ Styling**
  ```css
  .completed {
    text-decoration: line-through;
    color: gray;
  }
  ```

#### **8️⃣ Persistenza dei dati (opzionale)**
Usa localStorage o un database per salvare le attività e mantenerle tra i refresh della pagina.

#### **9️⃣ Componentizzazione (opzionale)**
Dividi l'app in componenti riutilizzabili:
ToDoList: Per la lista.
ToDoItem: Per ogni attività.
AddTaskForm: Per il modulo di aggiunta.

#### **🔟 Testing (opzionale)**
Scrivi test per verificare che:
Le attività vengano aggiunte correttamente.
Le attività possano essere rimosse.
Lo stato venga aggiornato correttamente.

