# Consegna

L’utente clicca su un bottone che genererà una griglia di gioco quadrata.  
Ogni cella ha un numero progressivo, da 1 a 100.   
Ci saranno quindi 10 caselle per ognuna delle 10 righe.  
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

## Bonus

Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:

1. con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
2. con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
3. con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

---

# Svolgimento


HTML-CSS
-

- Creamo la struttura direttamente in html 
- Aggiungiamo lo stile 
- Se la struttura creata in html funziona ci soddisfa, la sostituiamo con una creata in js 

JS
-

- Definire una variabile che prenderà un elemento dal DOM
- Creare una funzione che crea un elemento html 
- Assegnare una classe all'elemento html creato
- Inserire al suo interno dei valori
- Creare una funzione che attacca l'elemento creato nel DOM
- Definire un ciclo per creare n elementi 
- Creare un evento al click di un bottone
- Inserire la creazione dell'elemento all'interno dell'evento
- Creare un evento al click dell'elemento che cambia colore e stampa in console un numero

Bonus
-

- Creare un select ed assegnare un valore ad ogni opzione 
- In base all'opzione scelta dare una classe diversa all'elemento creato e definire un numero diverso di iterazioni del ciclo