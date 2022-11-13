import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import useTitle from '../../../Hook/UseTitle';

const News = () => {
    const news = useLoaderData()
    useTitle('News Details')
    // console.log(news)
    const { title, details, image_url, category_id } = news;
    return (
        <div>
            <Card>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details.slice(0, 200) + '...'}
                    </Card.Text>
                    <Link to={`/category/${category_id}`}>
                        <Button variant="primary">All This Category News</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default News;