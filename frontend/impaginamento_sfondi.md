###  Il problema iniziale

1. **Lo sfondo del sughero non arrivava fino in fondo alla pagina sui dispositivi mobili** (es. 480px).
2. **Hai dovuto aggiungere un `<img>` nel tuo HTML per vedere lo sfondo del sughero**, altrimenti non si visualizzava.

---

### Cosa causava tutto ciò

- Il `background` del sughero era impostato su `.bacheca`, ma **questo elemento non aveva un’altezza garantita**, quindi lo sfondo si fermava a metà.
- La griglia `#polaroid-grid` era posizionata con `position: absolute`, quindi **non contribuiva all’altezza del contenitore `.bacheca`**.
- Inizialmente, per vedere il sughero visivamente, hai inserito un’immagine `<img class="sfondo-sughero">`, perché lo sfondo via CSS **non veniva mostrato completamente**.

---

### Come abbiamo risolto passo-passo

1. **Abbiamo dato a `html` e `body` un’altezza del 100%**, così il layout flessibile poteva funzionare correttamente:

   ```css
   html, body {
     height: 100%;
     margin: 0;
     padding: 0;
   }
   ```

2. **Abbiamo reso il `body` un contenitore flex in colonna** per far crescere `.bacheca` nel resto dello spazio:

   ```css
   body {
     display: flex;
     flex-direction: column;
     background: url(img/wall.png);
     background-size: cover;
   }
   ```

3. **Abbiamo impostato `.bacheca` con `flex: 1`**, per dire: "cresci e riempi tutto lo spazio disponibile sotto l’header", e con `background` corretto:

   ```css
   .bacheca {
     background: url(img/cork.png);
     background-size: cover;
     flex: 1;
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
   }
   ```

4. **Abbiamo rimosso `position: absolute` da `#polaroid-grid`**, altrimenti fluttuava senza influenzare l’altezza della `.bacheca`.

5. **Abbiamo eliminato l’immagine HTML `sfondo-sughero`**, che era un workaround temporaneo e non più necessario.

---

### Risultato finale

- Lo sfondo del sughero si estende perfettamente fino in fondo, anche su mobile.
- L’`header` resta separato in alto con il suo sfondo muro bianco.
- Il layout è pulito, semantico e flessibile.

