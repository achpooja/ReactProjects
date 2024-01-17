import photo from './photo.JPG';
import './App.css';
import {useState} from 'react';

// 1st part of today lession

function MyButton(){
  return(
    <button>
      I am button
    </button>
  );
}
// 2nd part of the today lession

  function AboutPage()
  {
    return(
      <>
      <h1>
        About
        </h1>
        <p>Hello there. <br/> How do you do?</p>
        </>
    );
  }

  // 3rd part of the today lession
  const user ={
    name:'Pooja Acharya',
    // imageUrl:'https://i.imgur.com/yXOvdOSs.jpg',
    imageUrl:photo,
    imageSize: 150,
  };

// 4th part of the today lession 

const products =[
  {title : 'Cabbage ',isFruit:false, id:1},
  {title :'Garlic',isFruit:false, id:2},
  {title:'Apple',isFruit:true, id:3},
];

const listItems=products.map(product=>
  <li key={product.id}
  style={{color:product.isFruit? 'red' : 'green'}}>
    {product.title}
    </li>
    );

//  5th part of the today lession   

  function MeroButton(){
    const [count, setCount]=useState(0);

    function handleClick(){
      setCount(count+1);
    }
    return (
      <button onClick={handleClick}>
        Clicked {count} times
      </button>
    );
  }

// 6th part of the lession



// export default function MyApp() {
//   const [count, setCount] = useState(0);

//   function handleClick() {
//     setCount(count + 1);
//   }

//   return (
//     <div>
//       <h1>Counters that update together</h1>
//       <MyButton count={count} onClick={handleClick} />
//       <MyButton count={count} onClick={handleClick} />
//     </div>
//   );
// }

// function MyButton({ count, onClick }) {
//   return (
//     <button onClick={onClick}>
//       Clicked {count} times
//     </button>
//   );
// }


export default function MyApp(){
  return (
    <div>
      {/* <h1>Welcome to my app</h1>
      <MyButton/>
      <AboutPage/>

      <h1>{user.name}</h1>
      <img className='avatar'
      src={user.imageUrl}
      alt={'Photo of '+user.name}
      style={{
        width:user.imageSize,
        height:user.imageSize
      }}

      />

      <ul>{listItems}</ul> */}

      <h1>Counters that update separate</h1>
      <MeroButton />
      <br/>
      <MeroButton />
    </div>
  );
}

