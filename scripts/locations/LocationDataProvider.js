const locationCollection=[
  {
    city:"Madrid" , 
    country:"Spain" , 
    latitude:"40.4 N" ,
    longitude:"3.7 W",
    region: "Western Europe", 
    advice: "When you get to Spain go to the boat shop on the island and tell them that Martin sent you."
  }, 
  {
    city:"Nassau" , 
    country:"Bahamas" , 
    latitude:"25 N" ,
    longitude:"77 W", 
    region: "Carribean", 
    advice: "When you get to the Carribean go to the boat shop on the island and tell them that Martin sent you."
  }, 
  {
    city:"Antananarivo" , 
    country:"Madagascar" , 
    latitude:"18.9 S" ,
    longitude:"47.5 E", 
    region:"African Coast", 
    advice: "When you get to the Carribean go to the boat shop on the island and tell them that Martin sent you."
  }, 
  {
    city:"NosyBe" , 
    country:"Madagascar" , 
    latitude:"13.3 S" ,
    longitude:"48.2 E", 
    region:"African Coast", 
    advice: "When you get to the Carribean go to the boat shop on the island and tell them that Martin sent you."
  }, 
  {
    city:"Melbourne" , 
    country:"Australia" , 
    latitude:"37.8 S" ,
    longitude:"144.9 E", 
    region:"Pacific Ocean", 
    advice: "When you get to the Carribean go to the boat shop on the island and tell them that Martin sent you."
  }, 
  {
    city:"Manila" , 
    country:"Phillipines" , 
    latitude:"14.6 N" ,
    longitude:"121 E", 
    region:"Pacific Ocean", 
    advice: "When you get to the Carribean go to the boat shop on the island and tell them that Martin sent you."
  } 

]
export const useLocation = () =>{
  return locationCollection
}
// ^ this is done to preserve the original data= immutability 