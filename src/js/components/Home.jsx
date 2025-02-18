import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'


// components
import Navbar from './Navbar.jsx';
import Jumbotron from './Jumbotron.jsx';
import Card from './Card.jsx';
import PageFooter from './PageFooter.jsx';

function Home() {
    const cardsData = [
        {
            url: "https://placehold.co/500x325",
            alt: "Placeholder Image 1",
            title: "Card Title 1"
        },
        {
            url: "https://placehold.co/500x325",
            alt: "Placeholder Image 2",
            title: "Card Title 2"
        },
        {
            url: "https://placehold.co/500x325",
            alt: "Placeholder Image 3",
            title: "Card Title 3"
        },
        {
            url: "https://placehold.co/500x325",
            alt: "Placeholder Image 4",
            title: "Card Title 4"
        }
    ];

    return (
        <>
            <Navbar />
			<div className='container'>
            <Jumbotron />
				<div className='row justify-content-center'>
				{cardsData.map((element, index) => {
					return(
						<Card 
						key={index}
						title={element.title} 
						alt={element.alt} 
						url={element.url}
					/>
					)
				})}
				</div>
			</div>
			<PageFooter />
        </>
    )
}

export default Home;