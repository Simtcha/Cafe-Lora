import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Header } from '../components/Header/Header';
import { Banner } from '../components/Banner/Banner';
import { Menu } from '../components/Menu/Menu';
import { Gallery } from '../components/Gallery/Gallery';
import { Contact } from '../components/Contact/Contact';
import { Footer } from '../components/Footer/Footer';

const fetchDrinks = async () => {
  const response = await fetch(`http://localhost:4000/api/drinks`)
  const json = await response.json()
  return json.data
}
 const drinks = await fetchDrinks()
 console.log(drinks)



document.querySelector('#root').innerHTML = render(
  <div className="page">
   < Header showMenu={true} />
    <main>
      < Banner />
      < Menu drinks={drinks} />
      < Gallery />
      < Contact />      
    </main>
   < Footer />  
  </div>
);


//otevirani hamburgerove nabidky a zavirani
const hamburger = document.querySelector(".nav-btn")
const nav = document.querySelector(".rollout-nav")

const vypinac = () => {
  nav.classList.toggle("nav-closed")
}
hamburger.addEventListener('click', vypinac)


//zavira hamburger pri kliknuti na link
const separateLinks = nav.querySelectorAll("a")
separateLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.add('nav-closed')
  })
})


const orderbuttons = (drinks) => {
  const forms = document.querySelectorAll('.drink__controls')
  forms.forEach(form => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      //const id = form.dataset.id
      const id = e.target.dataset.id
      //const orderBtn = form.querySelector(".order-btn") // uz neni nutne, staci to v drinks.jsx
 
      const drink = drinks.find(drink => drink.id == id)// Najde kavu v poli drinks podle id
      const newOrderedValue = !drink.ordered   //zmena hodnoty ordered na opacnou


      await fetch(`http://localhost:4000/api/drinks/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify([{ op: 'replace', path: '/ordered', value: newOrderedValue }])
      })

        localStorage.setItem('scrollPosition', window.scrollY) //ulozi aktualni pozici na strance
        window.location.reload() // udela reload

              
      // aktualizuje button a class - uz neni nutne, staci to v drinks.jsx
      //orderBtn.classList.toggle("order-btn--ordered")
      //orderBtn.textContent = newOrderedValue ? 'Zrušit objednávku' : 'Objednat'
        
        // aktualizujje ordered stav v listu drinks
        drink.ordered = newOrderedValue
        
    
    })
  })
}

orderbuttons(drinks) 

// posunuti stranky zpet po reloadu na ulozenou pozici tj. ne nahoru ale na drinky
window.addEventListener('load', () => {
  const scrollPosition = localStorage.getItem('scrollPosition')
  if (scrollPosition !== null) {
    window.scrollTo(0, parseInt(scrollPosition, 10))
    localStorage.removeItem('scrollPosition')
  }
})



/* backup code
const forms = document.querySelectorAll(".drink__controls")
forms.forEach((form) => {  
	form.addEventListener("submit", async (e) => {
    const id = e.target.dataset.id  
    const orderBtn = form.querySelector(".order-btn")
    const drink = drinks.find(drink => drink.id == id)// Najde kavu v poli drinks podle id
    const newOrderedValue = !drink.ordered   //zmena hodnoty ordered na opacnou 
   
    await fetch(`http://localhost:4000/api/drinks/${id}`, 
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify([{ op: 'replace', path: '/ordered', value: newOrderedValue }])
      })   

    localStorage.setItem('scrollPosition', window.scrollY) //ulozi aktualni pozici na strance
    window.location.reload() // udela reload    

    // aktualizuje button a class
     orderBtn.classList.toggle("order-btn--ordered")
     orderBtn.textContent = newOrderedValue ? 'Zrušit objednávku' : 'Objednat'
        
     // aktualizujje ordered stav v listu drinks
    drink.ordered = newOrderedValue
    })
  
    }) */
