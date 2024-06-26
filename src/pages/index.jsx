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
   < Header />
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


//tohle by melo zavrit hamburger pri kliknuti na link
const separateLinks = nav.querySelectorAll("a")
separateLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.add('nav-closed')
  })
})
