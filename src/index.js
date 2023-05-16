document.addEventListener('DOMContentLoaded', () => {

//1. Create an array of all the cards in our memory game
const cardsArray = [
    {
        name: 'Zoro',
        img : 'src/images/zoro.png',  
    },
    {
        name: 'samuraiX', 
        img : 'src/images/samuraix.jpg',  
    },
    {
        name: 'Hinata',
        img : 'src/images/hinata.jpg',  
    },
    {
        name: 'Ania',
        img : 'src/images/ania.jpg',  
    },
    {
        name: 'Kintaro',
        img : 'src/images/kintaroOe.jpg',  
    },
    {
        name: 'Itachi',
        img : 'src/images/itachi.jpg',  
    },
    {
        name: 'Kakashi',
        img : 'src/images/kakashi.jpg'
    },
    {
        name: 'Women',
        img : 'src/images/womens.jpg',  
    },
    {
        name: 'Zoro',
        img : 'src/images/zoro.png',  
    },
    {
        name: 'samuraiX',
        img : 'src/images/samuraix.jpg',  
    },
    {
        name: 'Hinata',
        img : 'src/images/hinata.jpg',  
    },
    {
        name: 'Ania',
        img : 'src/images/ania.jpg',  
    },
    {
        name: 'Kintaro',
        img : 'src/images/kintaroOe.jpg',  
    },
    {
        name: 'Itachi',
        img : 'src/images/itachi.jpg',  
    },
    {
        name: 'Kakashi',
        img : 'src/images/kakashi.jpg'
    },
    {
        name: 'Women',
        img : 'src/images/womens.jpg',  
    },
]   

//now we need to mix them up (cards) before start putting in our grid. We can do this
//with a javascript function that sorts items randomly


cardsArray.sort(() => 0.5 - Math.random())
console.log(cardsArray)



//next thig to do, is put this randomly sorted cards into our grid
const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenIds = []
let cardsWon = []

//we're gonna use js to create our board
function createBoard()
{
  for(let i = 0; i < cardsArray.length; i++) {
   const card = document.createElement('img')
   card.setAttribute('src', 'src/images/blank.jpg')
   card.setAttribute('data-id', i)
   card.addEventListener('click', flipCard) //now, we'll create another listener to listen out for if we click s specific card
   grid.appendChild(card)
  }
  
} 
 


  function flipCard()
  //so, what we wanna happend when we flip a card? i wanna get, whatever card we flips, data id
  {
    //let's use this keyword to identify whatever card that we are currently working with
    let cardId = this.getAttribute('data-id')
//now, once we have the Id. what do we do with it? we need to store it somewhere. So i'm gonna make an array (above) named
//cardsChosen and leave as empty for now coz we haven´ chosen any card so far. 
//we're gonna push into our created array, the cards name
   cardsChosen.push(cardsArray[cardId].name)
//however, we don't want this. We only want to get two items in the cardsChosen array and compare the two and if this
//2 don't match we wanna clear the cardsChosen array and start again
 //console.log(cardsChosen). Lets create empty array on cardsId and push. Se ww are strojng names and ids separately.
  cardsChosenIds.push(cardId)
  //And off course if we click the card we want that csrd to flip over before we move on 
  this.setAttribute('src', cardsArray[cardId].img)
  if(cardsChosen.length === 2){
    //after a set amount of time passed if there are 2 cards chosen in our array, I wanna check if those two cards match. If they
    //match, take them off the board. If don't, flip them back over
    setTimeout(checkForMatch, 500)
  }
   console.log(cardsChosenIds)
  }

  function checkForMatch(){
  const cards = document.querySelectorAll('img') //grab all the images
  const optionOneId = cardsChosenIds[0] 
  console.log(optionOneId)
  const optionTwoId = cardsChosenIds[1]
  console.log(optionTwoId)

  if( optionOneId == optionTwoId){
    alert('You have clicked the same image!')
    //let's flip both of them back 
     cards[optionOneId].setAttribute('src', 'src/images/blank.jpg')
     cards[optionTwoId].setAttribute('src', 'src/images/blank.jpg')
     //now let's get actually checking if we have a match
  } else if (cardsChosen[0] === cardsChosen[1]){ //chardsChosen contains the name of the character
    alert('You have found a match!')
    //if cards match, we will replace them with blank image
    cards[optionOneId].setAttribute('src', 'src/images/white.jpg')
    cards[optionTwoId].setAttribute('src', 'src/images/white.jpg')
    //but at this point, we can still click on the white img (cards that matched) and will flip over again and show original image
    //to avoid this, we need to use a js method to remove the addEventListener
    cards[optionOneId].removeEventListener('click', flipCard)
    cards[optionTwoId].removeEventListener('click', flipCard)
    //finally, we'll create another array for cards that won
    cardsWon.push(cardsChosen)
    //now, what happens of we don¿t find a match?
  } else {
    cards[optionOneId].setAttribute('src', 'src/images/blank.jpg')
    cards[optionTwoId].setAttribute('src', 'src/images/blank.jpg')
    alert('Sorry, try again')
  }
    cardsChosen = []
    cardsChosenIds = []
    resultDisplay.textContent = cardsWon.length
    if(cardsWon.length === cardsArray.length /2){
        resultDisplay.textContent = 'Congratulations! You have won'
    }

    console.log(cardsWon)
} 

  createBoard()
})




