import React, {useEffect, useState} from 'react'
import Layout from '../Layouts/Layout'
import Card from '../Components/Card'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import "../CSS/home.css";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
    const navigate = useNavigate();
    const tags = ["Experience", "DSA", "OOPs"];

    const [cardData,setCardData] = useState([]);

    const getAllProducts = async () => {
        try{
            const {data} = await axios.post(`${process.env.REACT_APP_BASE_URL}/`);
            console.log(data);
            setCardData(data);
        } catch (error){
            console.log(error);
        }
    }

    useEffect(() => {
        getAllProducts();
    }, []);

    return (
        <Layout>
            <div className='container-fluid row mt-3 home-page'>
                <div className='col-md-3 filters'>

                </div>
                <div className='col-md-7'>

                    <div className='pt-5 mt-3'>
                        <h1> Home </h1>
                        {cardData.map((card) => (
                                <Card
                                    company_name={card.company_name}
                                    name={card.post_username}
                                    time={card.post_time}
                                    year={card.company_year}
                                    type={card.role_type}
                                    role={card.company_role}
                                    votes={69}
                                    tags={tags}
                                />
                        ))}

                    </div>
                </div>

                <div className='col-md-2' >
                    <div id='fixedButton' onClick={() => navigate('/compose')}>
                        <Fab color="primary" aria-label="add">
                            <AddIcon />
                        </Fab>
                    </div>
                </div>

            </div>
        </Layout>
    )
}

export default Home