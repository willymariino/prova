In React, **stato** e **props** sono fondamentali per gestire i dati e la comunicazione tra i componenti:

### **Props (Proprietà)**
Le props sono **dati passati** da un componente padre a un componente figlio. Sono **immutabili**, il che significa che un componente figlio non può modificarle direttamente.

Esempio di utilizzo delle props:
```jsx
function Greeting(props) {
  return <h1>Ciao, {props.name}!</h1>;
}

function App() {
  return <Greeting name="Willy" />;
}
```
Qui `App` passa la prop `name` al componente `Greeting`, che la utilizza per mostrare un messaggio.

---

### **Stato (State)**
Lo stato è **interno** a un componente e può essere modificato da quel componente. È utile per gestire dati **dinamici**, come input degli utenti o cambiamenti nel tempo.

Esempio di gestione dello stato con **useState**:
```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Hai cliccato {count} volte.</p>
      <button onClick={() => setCount(count + 1)}>Aumenta</button>
    </div>
  );
}
```
Qui `useState` crea una variabile `count` e una funzione `setCount` per aggiornarla. Ogni volta che l'utente clicca il pulsante, il valore aumenta.

---

### **Props vs Stato**
- **Props:** Passano dati **dall'esterno** (immutabili)
- **Stato:** Cambia **internamente** (mutabile)

Nel tuo caso, il carrello (`cartItems`) viene probabilmente gestito tramite **stato globale** (con `useCart()` dal `CartContext`). Vuoi approfondire la gestione dello stato in un **context globale**, come Redux o la Context API di React? 🚀
