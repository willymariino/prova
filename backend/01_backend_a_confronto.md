#  Backend a confronto: PHP, Node.js e Java

Una guida pratica per capire:
- Le differenze tra PHP, Node.js e Java nel backend
- Paradigmi come sincrono/asincrono e OOP
- Come si strutturano oggetti, classi, prototipi
- Quando usare Laravel vs Express
- Mini progetti CRUD in tutti e tre i linguaggi

---

##  Tecnologie backend: panoramica

| Caratteristica        | PHP                   | Node.js                        | Java (Spring Boot)              |
|------------------------|------------------------|----------------------------------|----------------------------------|
| Linguaggio             | PHP                    | JavaScript lato server          | Java                             |
| Paradigma              | Procedurale + OOP      | Event-driven, asincrono         | OOP classico                    |
| Hosting                | Facile (shared, Apache)| VPS o servizi moderni           | Server Java (Tomcat, Jetty)     |
| Performance            | Buona                  | Ottima per I/O e real-time      | Alta, soprattutto in enterprise |
| Casi d’uso ideali      | CMS, blog, e-commerce  | API REST, real-time, microservizi | Sistemi bancari, enterprise    |

---

## Paradigmi a confronto

- **Sincrono**: esecuzione lineare, come in PHP
- **Asincrono**: esecuzione non bloccante, come in Node.js
- **Event-driven**: in Node, tutto gira intorno a eventi (richiesta ricevuta, dato letto, ecc.)
- **OOP**: oggetti, classi, ereditarietà (Java, PHP, anche JS)

---

##  Mini progetto CRUD: “Rubrica utenti”

### ✅ PHP (senza framework)
- File `users.php`
- Accesso a `users.json`
- Esegue operazioni CRUD con metodi `$_SERVER['REQUEST_METHOD']`
- Lineare, leggibile, funziona subito con Apache o XAMPP

### ✅ Node.js + Express
- Routing con `GET`, `POST`, `PUT`, `DELETE`
- Middleware per body JSON
- Lettura/scrittura su `users.json`
- Asincronia con callback o `fs.writeFileSync`

### ✅ Java con Spring Boot
- REST Controller con `@GetMapping`, `@PostMapping` ecc.
- Classe `User` come entity
- Repository JPA
- Compilato, strutturato, potente

---

##  Laravel vs Express

| Aspetto              | Laravel (PHP)                        | Express (Node.js)                 |
|----------------------|----------------------------------------|------------------------------------|
| Struttura            | MVC completo, opinato                 | Libero, minimalista               |
| ORM incluso          | Eloquent                             | No (opzionale: Sequelize, Prisma) |
| CLI potente          | Artisan                               | No CLI nativa                     |
| Sicurezza integrata  | ✅                                    | Serve integrare (es. Helmet)      |

---

##  Oggetti, classi e prototipi

### JavaScript ha 3 modi di rappresentare oggetti:

1. **Oggetto letterale**:  
```js
const persona = { nome: "Marco", età: 32 };
```

2. **Classe moderna**:  
```js
class Persona {
  constructor(nome) {
    this.nome = nome;
  }
}
```

3. **Prototipo**:  
```js
function Persona(nome) {
  this.nome = nome;
}
Persona.prototype.saluta = function() { ... }
```

💡 Le `class` moderne sono solo “zucchero sintattico” sopra i prototipi.

---

## Esempio: Mini rubrica dei contatti

### Versione senza classi (oggetti letterali)
```js
const contatti = [];

function aggiungiContatto(nome, telefono) {
  contatti.push({ nome, telefono });
}
```

### Versione con classi
```js
class Contatto {
  constructor(nome, telefono) {
    this.nome = nome;
    this.telefono = telefono;
  }
}
```

### Versione con prototipo
```js
function Contatto(nome, telefono) {
  this.nome = nome;
  this.telefono = telefono;
}
Contatto.prototype.stampa = function() { ... }
```

---

## Conclusioni

- PHP è più diretto, buono per iniziare e per siti classici
- Node.js è asincrono e potente per API moderne e real-time
- Java è massiccio, sicuro, solido: perfetto per ambienti enterprise
- Le classi non sono obbligatorie in JS, ma utili nei progetti strutturati
- Laravel è un framework completo “cucina attrezzata”; Express è flessibile ma serve costruirselo



