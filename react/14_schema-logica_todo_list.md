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

#### **2️⃣ Stato dell'applicazione**
Usa lo state per gestire i dati della lista:
Un array per memorizzare le attività (tasks).
Una stringa per il valore dell'input (newTask).


Esempio:
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

**Funzione per aggiungere task**  
  ```jsx
  const handleAddTask = () => {
    if (newTask.trim() === '') return; // rimuovi spazi inutili
    setTasks([...tasks, { text: newTask, completed: false }]); // crei un nuovo array con tutte le voci del precedente tramite ...task, + l'elemento nuovo con newTask
    setNewTask(''); // azzeri il campo di input, una volta inviata la task
  };
  ```

   **crei il campo di Input per inviare le task**  
  ```jsx
  <input
    type="text"
    value={newTask}
    onChange={(e) => setNewTask(e.target.value)}
  />

  **Pulsante di aggiunta**  
  ```jsx
  <button onClick={handleAddTask}>Aggiungi</button>
  ```


#### **4️⃣ Visualizzare la lista**
Usa il metodo `.map()` per iterare sull'array tasks e renderizzare ogni attività come componente o elemento HTML.
 Esempio:
 Itera sui task con `.map()`:  
  ```jsx
  {tasks.map((task, index) => (
    <ToDoItem key={index} task={task} onDelete={() => handleDeleteTask(index)} />
  ))}
  ```


#### **5️⃣ Rimuovere un'attività**
Aggiungi un pulsante accanto a ogni attività.
Usa un evento onClick per rimuovere l'attività dall'array tasks (filtrando l'array).
**Funzione di gestione:**  
  ```jsx
  const handleDeleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };
  ```
  **bottono per l'elimino della attività** 

 ```jsx
  <button onClick={() => handleDeleteTask(index)}>❌</button>
  ```
- 

#### **6️⃣ Segnare un'attività come completata**
Aggiungi una proprietà completed a ogni attività.
Usa un evento (es. onClick o una checkbox) per aggiornare lo stato completed di un'attività.
esempio:

- **se si vuole partire con una attività predefinita al posto dell'array vuoto**  
  ```jsx
  const [tasks, setTasks] = useState([{ text: "Prova", completed: false }]);
  ```
- **Funzione di gestione:**  
  ```jsx
  const handleToggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };
  ```
 
- **Checkbox o click per aggiornare lo stato.**

```jsx
  <input
    type="checkbox"
    checked={task.completed}
    onChange={() => handleToggleTask(index)}
  />
  ```

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

```jsx
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);
  ```

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

