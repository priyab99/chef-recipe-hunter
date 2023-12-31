
import React, { useEffect, useState } from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ChefDetails = () => {

    const {chefId}=useParams();
    const chefs=useLoaderData();
    const [chefDetail,setChefDetails]=useState({});
    const [disableButton1, setDisableButton1] = useState(false);
    const [disableButton2, setDisableButton2] = useState(false);
    const [disableButton3, setDisableButton3] = useState(false);
    useEffect(()=>{
        if(chefs&&chefs.length){
            const chef=chefs.find(chef=>chef.id==chefId);
            setChefDetails(chef);
        }
    },[chefs,chefId])

    const showToastMessage = (buttonNumber) => {
        toast.success('This recipe is your favourite', {
            position: toast.POSITION.TOP_RIGHT
        });
        if (buttonNumber === 1) {
            setDisableButton1(true);
        } else if (buttonNumber === 2) {
            setDisableButton2(true);
        } else if (buttonNumber === 3) {
            setDisableButton3(true);
        }
    };

    const {name,img,experience,likes,bio,numRecipes,recipeImage1,recipeName1,ingredients1,method1,rating1,recipeImage2,recipeName2,ingredients2,method2,rating2,recipeImage3,recipeName3,ingredients3,method3,rating3}=chefDetail;
    return (
        <div>
            <h2 className='text-center fw-bold mb-5'>Chef <span className='text-primary'>{name}</span></h2>
            <Card className="d-flex flex-row my-3">
        <Card.Img variant="top" src={img} style={{ width: '500px', height: '400px', objectFit: 'cover' }} />
        <Card.Body className=" mt-10 align-items-center justify-content-center text-w" style={{ width: '60%', fontSize: '14px', backgroundColor: 'black',color:'white' } }>
          <Card.Title>{name}</Card.Title>
          <p>{bio}</p>
          <Card.Text>{experience}+ experience</Card.Text>
          <p>{likes} Likes</p>
          <p>Number of Recipes: {numRecipes}</p>
        </Card.Body>
      </Card>

      <h2 className='text-center mt-5 mb-5 fw-bold'>Our Chef's <span className='text-primary'>Especiality</span></h2>

      <CardGroup>
      <Card>
        <Card.Img variant="top" src={recipeImage1} style={{height: "400px"}} />
        <Card.Body>
          <Card.Title>{recipeName1}</Card.Title>
          <Card.Text>
          <span style={{ color: 'black', fontWeight: 'bold' }}>Ingredients:</span> {ingredients1}

          </Card.Text>
          <Card.Text>
          <span style={{ color: 'black', fontWeight: 'bold' }}>Cooking Method:</span> {method1}

          </Card.Text>
          <p><span style={{ color: 'black', fontWeight: 'bold' }}>Rating:</span> {rating1}</p>
          <button className='bg-info rounded'disabled={disableButton1} onClick={() => showToastMessage(1)}>Favorite</button>
          <ToastContainer />

        </Card.Body>

      </Card>
      <Card>
      <Card.Img variant="top" src={recipeImage2} style={{height: "400px"}} />
        <Card.Body>
          <Card.Title>{recipeName2}</Card.Title>
          <Card.Text className='text-black'>
          <span style={{ color: 'black', fontWeight: 'bold' }}>Ingredients:</span> {ingredients2}

          </Card.Text>
          <Card.Text>
          <span style={{ color: 'black', fontWeight: 'bold' }}>Cooking Method:</span> {method2}

          </Card.Text>
          <p><span style={{ color: 'black', fontWeight: 'bold' }}>Rating:</span> {rating2}</p>
          <button className='bg-info rounded'disabled={disableButton2} onClick={() => showToastMessage(2)}>Favorite</button>
          <ToastContainer />

        </Card.Body>
      </Card>
      <Card>
      <Card.Img variant="top" src={recipeImage3} style={{height: "400px"}}/>
        <Card.Body>
          <Card.Title>{recipeName3}</Card.Title>
          <Card.Text>
          <span style={{ color: 'black', fontWeight: 'bold' }}>Ingredients:</span> {ingredients3}

          </Card.Text>
          <Card.Text>
          <span style={{ color: 'black', fontWeight: 'bold' }}>Cooking Method:</span> {method3}

          </Card.Text>
          <p><span style={{ color: 'black', fontWeight: 'bold' }}>Rating:</span> {rating3}</p>
          <button className='bg-info rounded'disabled={disableButton3} onClick={() => showToastMessage(3)}>Favorite</button>
          <ToastContainer />

        </Card.Body>
      </Card>
    </CardGroup>
            


            
        </div>
    );
};

export default ChefDetails;