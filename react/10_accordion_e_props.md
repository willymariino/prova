L'accordion utilizza il **comportamento nativo di Bootstrap**, gestito tramite gli **attributi HTML `data-bs-toggle` e `data-bs-target`**. Ciò significa che non è necessario scrivere codice JavaScript aggiuntivo per aprirlo e chiuderlo!

### **🔹 Funzionamento dell’accordion**
Quando l'utente clicca sul pulsante dell’accordion:
1️⃣ Bootstrap rileva l’evento `click` sul **button**  
2️⃣ Modifica automaticamente la classe dell’elemento target (`collapsed` → visibile)  
3️⃣ Se un altro pannello era aperto, lo chiude (grazie all’attributo `data-bs-parent`)  

### **🔹 Struttura dell’accordion nel tuo codice**
Il pulsante dell’accordion è già impostato per **aprirsi e chiudersi automaticamente**:

```jsx
<button
  className="accordion-button collapsed"
  type="button"
  data-bs-toggle="collapse"
  data-bs-target="#relatedProducts"
  aria-expanded="false"
  aria-controls="relatedProducts"
>
  🔗 Vedi prodotti correlati
</button>
```

L'elemento che si espande è collegato tramite **id**:

```jsx
<div id="relatedProducts" className="accordion-collapse collapse">
  <div className="accordion-body">
    <RelatedProducts category={category_name} />
  </div>
</div>
```

### **💡 Vuoi personalizzare l’animazione o farlo aprire automaticamente?**
Se vuoi gestire **manualmente** l'apertura e la chiusura con **React**, possiamo usare uno **state** e modificare la classe dell’accordion dinamicamente! 🚀
Fammi sapere se vuoi questa personalizzazione. 😊

__________

Ottima domanda! 🚀 Ti spiego tutto nel dettaglio.

### **🔹 1. Cosa significano gli attributi nell'`<button>`**
Questi attributi servono per **gestire l’interazione con l’accordion** usando Bootstrap:

- **`data-bs-toggle="collapse"`** → Indica che il bottone deve "attivare" un **collapse**, cioè espandere o chiudere un elemento.
- **`data-bs-target="#relatedProducts"`** → Specifica **quale elemento** deve essere aperto/chiuso. In questo caso, corrisponde all’`id="relatedProducts"` della sezione correlata.
- **`aria-expanded="false"`** → È un attributo di **accessibilità**: indica se l’accordion è attualmente chiuso (`false`) o aperto (`true`).
- **`aria-controls="relatedProducts"`** → Indica quale elemento viene controllato dal pulsante, migliorando la navigabilità per utenti con assistenza vocale.

### **🔹 2. Perché ho usato `{category_name}` invece di `{category}`**
In React, quando passi una **prop**, il valore deve corrispondere ai dati già presenti nel tuo componente. Nel tuo `SingleProductPage.jsx`, `category_name` è definito dentro `productSlug`, quindi dobbiamo passarlo esattamente come lo hai dichiarato.

```jsx
const { category_name } = productSlug;  // Dati del prodotto

<RelatedProducts category={category_name} />
```

Se avessi usato solo `{category}`, React non lo riconoscerebbe, perché la variabile `category` **non è stata definita** nel componente. Invece, `category_name` proviene direttamente dai dati del prodotto e viene passato correttamente a `RelatedProducts.jsx`.

### **💡 Vuoi personalizzare ulteriormente la gestione dell’accordion?**
Potrei aiutarti a farlo aprire **automaticamente** in alcune condizioni o **chiuderlo quando si clicca fuori**! 😃
