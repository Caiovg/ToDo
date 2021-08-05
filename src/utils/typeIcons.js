import iconDefault from '../assets/default.png';
import iconFooteball from '../assets/footeball.png';
import iconFood from '../assets/food.png';
import iconJob from '../assets/job.png';
import iconParty from '../assets/party.png';
import iconSchool from '../assets/school.png';
import iconShopping from '../assets/shopping.png';
import iconTravelt from '../assets/travel.png';
import iconSport from '../assets/sport.png';
//a primeira posição e nula pois quando fazemos um array de dados ele começa do 0
// o problema e que em nosso banco começamos do 1 então o primeiro valor e null
const typeIcons = [
    null,
    iconDefault, 
    iconFooteball, 
    iconFood, 
    iconJob, 
    iconParty, 
    iconSchool, 
    iconShopping, 
    iconTravelt, 
    iconSport
];

export default typeIcons;