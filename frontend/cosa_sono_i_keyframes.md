###  Cosa sono esattamente i `@keyframes`?

Con `@keyframes` dici al browser:  
> "Guarda, voglio che questo elemento **parta così**, **finisca cosà**, e magari faccia qualcos'altro nel mezzo."

Esempio semplice:

```css
@keyframes fadeIn {
  0%   { opacity: 0; }
  100% { opacity: 1; }
}
```

Poi applichi quell’animazione a un elemento:

```css
.polaroid {
  animation: fadeIn 1s ease-in;
}
```

---

### Dove si mettono nel CSS?

Li puoi scrivere **dove vuoi** nel foglio CSS, anche in fondo. Non devono per forza stare prima o dopo le media query. Un buon approccio è metterli **in fondo al file**, così stanno insieme e non ti "sporcano" lo stile principale.

---

### Quando si usano i `keyframes`?

Usali ogni volta che vuoi fare un’animazione **personalizzata nel tempo**, ad esempio:

- Far **apparire** un elemento (tipo un fade-in o una caduta)
- Far **ruotare**, **ingrandire**, **spostare** qualcosa
- Simulare movimenti complessi (tipo onde, battiti, salti...)

Se vuoi solo un piccolo effetto (tipo hover), puoi anche usare solo `transition`. Ma appena vuoi un effetto temporizzato e coreografato — entra in scena `@keyframes`.

---

### **Schema base per usare un'animazione CSS con `@keyframes`**

#### **1. Definisci l’animazione con `@keyframes`**
È la “coreografia” del movimento, scritta in percentuali:

```css
@keyframes nomeAnimazione {
  0% {
    /* Stato iniziale */
  }
  100% {
    /* Stato finale */
  }
}
```

Puoi usare anche 50% per effetti intermedi!

---

#### **2. Applica l’animazione all’elemento che vuoi animare**

```css
elementoSelezionato {
  animation-name: nomeAnimazione;
  animation-duration: 1s;         /* Durata totale */
  animation-timing-function: ease; /* Velocità/interpolazione */
  animation-delay: 0s;           /* (opzionale) Ritardo in partenza */
  animation-fill-mode: forwards; /* (opzionale) Mantieni lo stato finale */
}
```

Oppure tutto in una riga:

```css
animation: nomeAnimazione 1s ease forwards;
```

---

#### **3. Posizionamento nel foglio CSS**

Metti i `@keyframes` **in qualunque punto del CSS**. Di solito **alla fine** per tenerli in ordine, ma funziona ovunque!

---

#### **4. Quando usarli?**

- Per entrare in scena (fade-in, slide-in)
- Per effetti dinamici (salti, rotazioni, onde)
- Per transizioni tra due stati che non si possono fare solo con `:hover` o `transition`

---

#### **5. Bonus: Animazioni a cascata**

Puoi far partire animazioni in sequenza con `animation-delay`:

```css
.polaroid:nth-child(1) { animation-delay: 0s; }
.polaroid:nth-child(2) { animation-delay: 0.2s; }
.polaroid:nth-child(3) { animation-delay: 0.4s; }
```

Così sembrano cadere una dopo l'altra!

