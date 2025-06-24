##  Cheat Sheet: Animazioni CSS con `@keyframes`

### 1. Definisci l’animazione

Scrivi lo “script” dell’animazione:

```css
@keyframes nomeAnimazione {
  0%   { /* stato iniziale */ }
  100% { /* stato finale */ }
}
```

Puoi inserire anche percentuali intermedie (es. 50%).

---

### 2. Applica l’animazione a un elemento

```css
.mioElemento {
  animation: nomeAnimazione durata ease delay fill-mode;
}
```

Esempio completo:

```css
.polaroid {
  animation: caduta-polaroid 0.8s ease-out forwards;
}
```

---

### 3. Proprietà disponibili

| Proprietà               | Cosa fa                                 | Esempio            |
|------------------------|------------------------------------------|--------------------|
| `animation-name`       | Nome definito nei `@keyframes`           | `caduta-polaroid`  |
| `animation-duration`   | Durata totale                            | `1s`, `500ms`      |
| `animation-delay`      | Ritardo prima di partire                 | `0.3s`             |
| `animation-timing-function` | Ritmo dell'animazione            | `ease`, `linear`   |
| `animation-fill-mode`  | Stato dopo l’animazione (`forwards` mantiene quello finale) | `forwards`         |
| `animation-iteration-count` | Quante volte si ripete         | `1`, `infinite`    |

---

###  4. Dove metterli?

- I `@keyframes` possono stare **ovunque** nel CSS
- Meglio tenerli **in fondo** per tenerli ordinati
- Funzionano anche **dentro media query**

---

###  5. Effetti a cascata

```css
.polaroid:nth-child(1) { animation-delay: 0s; }
.polaroid:nth-child(2) { animation-delay: 0.2s; }
.polaroid:nth-child(3) { animation-delay: 0.4s; }
```

Per dare un “effetto domino” alle animazioni.
