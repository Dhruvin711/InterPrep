import React from 'react'
import Layout from '../Layouts/Layout'
import Card from '../Components/Card'

const Home = () => {
    const cardData = [
        {
            company_name: "Oracle",
            name: "John Doe",
            time: "2 months",
            year: "2023",
            type: 1,
            role: "SDE",
            votes: 69,
            tags: ["Experience", "DSA", "OOPs"]
        },
        {
            company_name: "Orascvdacsvdcle",
            name: "John Doe",
            time: "2 months",
            year: "2023",
            type: 1,
            role: "SDE",
            votes: 69,
            tags: ["Experience", "DSA", "OOPs"]
        },
        {
            company_name: "Oracle",
            name: "John Doe",
            time: "2 months",
            year: "2023",
            type: 1,
            role: "SDE",
            votes: 69,
            tags: ["Experience", "DSA", "OOPs"]
        },

    ]
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
                                    name={card.name}
                                    time={card.time}
                                    year={card.year}
                                    type={card.type}
                                    role={card.role}
                                    votes={card.votes}
                                    tags={card.tags}
                                />
                        ))}

                    </div>
                </div>

                <div className='col-md-2' />
            </div>
        </Layout>
    )
}

export default Home