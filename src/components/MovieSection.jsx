// src/components/MovieSection.jsx
import React, { useEffect, useState } from 'react';

const urlPatterns = {
    Megabox: (company, date) => `${company}/${company}Chart_${date}.json`
};

function generateUrl(company, date) {
    const formattedDate = date.toISOString().slice(0, 10);
    const pattern = urlPatterns[company];
    if (pattern) {
        return `https://raw.githubusercontent.com/kimyih/movie-chart2/main/${pattern(company, formattedDate)}`;
    } else {
        console.error(`No URL pattern found for company: ${company}`);
        return null;
    }
}

function MovieSection({ company, title }) {
    const [data, setData] = useState([]);
    const today = new Date();

    useEffect(() => {
        const fetchData = async () => {
            const url = generateUrl(company, today);
            if (!url) return;

            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setData(data.slice(0, 10));
            } catch (error) {
                console.error(`There was an error fetching the data for ${company}:`, error);
            }
        };

        fetchData();
    }, [company, today]);

    return (
        <div id={company.toLowerCase()}>
            <ul className='Main__info' style={{ display: 'flex', flexWrap: 'wrap' }}>
                {data.map((item, index) => (
                    <li key={index} style={{ listStyle: 'none', padding: '10px' }}>
                        <img src={item.imageURL} alt={item.title} style={{ width: "100%", height: "auto" }} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MovieSection;
