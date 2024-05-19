import React,{useState} from 'react';
import Cards from './Shops/Cards/Cards';
import Nav from './Shops/Nav/Nav';
import Footer from './Shops/Footer/Footer';

const App = () => {
  const [cards,setCards]=useState([
  {
    id:"1",
    prod:"Brokoli - 1/2 Kg",
    pri:"Rp 20.000",
    star:"star",
    sale:"sale",
    img:"https://res.cloudinary.com/sivadass/image/upload/v1493620046/dummy-products/broccoli.jpg",
    sts:true,
  },
  { 
    id:"2",
    prod:"Kembang kol - 1/2 Kg",
    pri:" Rp 18.000",
    img:"https://res.cloudinary.com/sivadass/image/upload/v1493620046/dummy-products/cauliflower.jpg",
    star:"star",
    sale:"sale",
    sts:true,
  },
  {
    id:"3",
    prod:"Timun - 1/2 Kg",
    pri:" Rp 12.000",
    img:"https://res.cloudinary.com/sivadass/image/upload/v1493620046/dummy-products/cucumber.jpg",
    sale:"sale",
    star:"star",
    sts:true,


  },
  {
    id:"4",
    sts:true,
    prod:"Buah Bit - 1/2 Kg",
    img:"https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/beetroot.jpg",
    pri:" Rp 15.000",
    star:"star",
  },
  {
    id:"5",
    sts:true,
    prod:"Wortel - 1/2 Kg",
    img:"https://res.cloudinary.com/sivadass/image/upload/v1493620046/dummy-products/carrots.jpg",
    pri:" Rp 7.000",
    sale:"sale",
  },
  {
    id:"6", 
    sts:true,
    prod:"Tomat - 1/2 Kg",
    img:"https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/tomato.jpg",
    pri:" Rp 3.000",
  },
  {
    id:"7",
    sts:true,
    prod:"Kacang Panjang - 1/2 Kg",
    img:"https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/beans.jpg",
    pri:"Rp 7.000",
    sale:"sale",
    star:"star"
  },
  {
    id:"8",
    sts:true,
    prod:"Terong - 1/2 Kg",
    pri:"Rp 7.000",
    img:"https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/brinjal.jpg",
    star:"star"
  },
  {
    id:"9",
    sts:true,
    prod:"Paprika - 250 g",
    pri:"Rp 21.000",
    img:"https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/capsicum.jpg",
    star:"star"
  },
  {
    id:"10",
    sts:true,
    prod:"Jamur kancing - 250 g",
    pri:"Rp 15.000",
    img:"https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/button-mushroom.jpg",
    star:"star"
  },
  {
    id:"11",
    sts:true,
    prod:"Kentang - 1/2 Kg",
    pri:"Rp 16.500",
    img:"https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/potato.jpg",
    star:"star"
  },
  {
    id:"12",
    sts:true,
    prod:"Jagung - 1/2 Kg",
    pri:"Rp 10.000",
    img:"https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/corn.jpg",
    star:"star"
  },
  {
    id:"13",
    sts:true,
    prod:"Bawang Bombay - 250 g",
    pri:"Rp 14.000",
    img:"https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/onion.jpg",
    star:"star"
  },
  {
    id:"14",
    sts:true,
    prod:"Apel - 1/2 Kg",
    pri:"Rp 12.000",
    img:"https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/apple.jpg",
    star:"star"
  },
  {
    id:"15",
    sts:true,
    prod:"Pisang - per sisir",
    pri:"Rp 17.000",
    img:"https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/banana.jpg",
    star:"star"
  },
  {
    id:"16",
    sts:true,
    prod:"Anggur - 250 g",
    pri:"Rp 24.000",
    img:"https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/grapes.jpg",
    star:"star"
  },
  {
    id:"17",
    sts:true,
    prod:"Mangga - 250 g",
    pri:"Rp 11.000",
    img:"https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/mango.jpg",
    star:"star"
  },
  {
    id:"18",
    sts:true,
    prod:"Melon - 1 Kg",
    pri:"Rp 15.500",
    img:"https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/musk-melon.jpg",
    star:"star"
  },
  {
    id:"19",
    sts:true,
    prod:"Jeruk - 1/2 Kg",
    pri:"Rp 13.000",
    img:"https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/orange.jpg",
    star:"star"
  },
  {
    id:"20",
    sts:true,
    prod:"Pir - 1/2 Kg",
    pri:"Rp 8.500",
    img:"https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/pears.jpg",
    star:"star"
  },
  {
    id:"21",
    sts:true,
    prod:"Strawberry - 1/2 Kg",
    pri:"Rp 12.000",
    img:"https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/strawberry.jpg",
    star:"star"
  },
  {
    id:"22",
    sts:true,
    prod:"Semangka - 1 Kg",
    pri:"Rp 12.500",
    img:"https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/water-melon.jpg",
    star:"star"
  },
  {
    id:"23",
    sts:true,
    prod:"kacang Almond - 250 g",
    pri:"Rp 35.000",
    img:"https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/almonds.jpg",
    star:"star"
  },
  {
    id:"24",
    sts:true,
    prod:"Kacang Pistachio - 250 g",
    pri:"Rp 55.000",
    img:"https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/pista.jpg",
    star:"star"
  },
  {
    id:"25",
    sts:true,
    prod:"Kacang Mete - 250 g",
    pri:"Rp 37.500",
    img:"https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/cashews.jpg",
    star:"star"
  },
    
  ])

  const [value,setvalue]=useState(0);
  // const [sts,setsts]=useState(true);

  const cartInc=(id)=>{
    // setsts(false);
    const update=  cards.map((ele)=>{
      if(ele.id===id){
        
    setvalue(e=>e+1)
    return {...ele,sts:false}
    
      }
      return ele

    })
    setCards(update)
    

  }
  const cartDec=(id)=>{
    // setsts(true)
  const update= cards.map((ele)=>{
      if(ele.id===id){
    setvalue(e=>e-1)
    return {...ele,sts:true}
      }
return ele
    })
    setCards(update)
  }
  return (
    <>
    <Nav value={value}/>
   <Cards cards={cards} cartInc={cartInc} cartDec={cartDec} />

      <Footer/>
    </>
  );
};

export default App;