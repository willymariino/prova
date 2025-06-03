Ecco la struttura del componente **OrderConfirmationModal**, che puoi importare in `SingleProductPage` per mostrare il pop-up quando l'utente clicca su **"Completa Ordine"**.

### **📌 Struttura del componente**
✅ **Gestisce lo stato di visibilità**  
✅ **Mostra il codice ordine generato**  
✅ **Ha un overlay scuro che copre la pagina**  
✅ **Si chiude cliccando il pulsante "Chiudi"**  

---

### **🔹 OrderConfirmationModal.jsx (Componente separato)**
```jsx
import { useState } from "react";
import "./OrderConfirmationModal.css"; // Importa il file CSS

function OrderConfirmationModal({ isOpen, onClose, orderCode }) {
  if (!isOpen) return null;

  return (
    <div className="overlay">
      <div className="modal">
        <button className="close-btn" onClick={onClose}>✖</button>
        <h2>Ordine Completato!</h2>
        <p>Il tuo codice ordine è: <strong>{orderCode}</strong></p>
      </div>
    </div>
  );
}

export default OrderConfirmationModal;
```

---

### **🔹 OrderConfirmationModal.css (Overlay e stile)**
```css
.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
}

.modal {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    text-align: center;
    width: 400px;
    max-width: 90%;
    max-height: 50%;
    display: flex !important;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 999;
}

.close-btn {
    font-size: 20px;
    background-color: rgba(240, 254, 255, 0.284);
    cursor: pointer;
    color: black;
    padding: 5px 10px;
    font-size: 18px;
    cursor: pointer;
    border-radius: 35px;
}
```

---

### **🔹 Integrazione in `SingleProductPage.jsx`**
Ora importiamo il componente in `SingleProductPage`, gestendo lo stato quando l'utente clicca **"Completa Ordine"**:

```jsx
import { useState } from "react";
import OrderConfirmationModal from "./OrderConfirmationModal";

function SingleProductPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const orderCode = `#${Math.floor(Math.random() * 1000000)}`; // Genera codice casuale

  return (
    <div>
      <button onClick={() => setIsModalOpen(true)}>Completa Ordine</button>

      <OrderConfirmationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        orderCode={orderCode}
      />
    </div>
  );
}
```

---

### **📌 Come funziona?**
✅ Quando l'utente **clicca "Completa Ordine"**, il pop-up appare.  
✅ Il codice ordine viene **generato casualmente**.  
✅ L'overlay scuro blocca interazioni con la pagina.  
✅ Cliccando **"✖"**, il pop-up si chiude.

Ora puoi testarlo e personalizzarlo! Vuoi aggiungere un timer per chiuderlo automaticamente dopo qualche secondo? 🚀
