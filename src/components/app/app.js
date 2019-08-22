import React, {Component} from 'react';

import Header from '../header/header';
import RandomPlanet from '../random-planet/random-planet';
import ErrorIndicator from '../error-indicator/error-indicator'
import './app.css';
import PeoplePage from "../people-page/people-page";
import ItemList from "../item-list/item-list";
import ItemDetails from "../item-details/item-details";
import SwapiService from "../../services/swapi-service";
import ErrorBoundary from "../error-boundary/error-boundary";
import Row from "../row/row";

export default class App extends Component {

    swapiService = new SwapiService();

    state = {
        showRandomPlanet: true,
        hasError: false
    };

    componentDidCatch() {
        console.log('Error');
        this.setState({
            hasError: true
        })
    }

    render() {

        if (this.state.hasError) {
            return <ErrorIndicator/>
        }

        const {
            getPerson,
            getStarship,
            getPersonImage,
            getPlanetImage,
            getStarshipImage
        } = this.swapiService;

        const personDetails = (
            <ItemDetails
                itemId={11}
                getData={getPerson}
                getImageUrl={getPersonImage}/>
        );

        const starshipDetails = (
            <ItemDetails
                itemId={10}
                getData={getStarship}
                getImageUrl={getStarshipImage}/>
        );

        return (
            <ErrorBoundary>
                <div className='stardb-app'>
                    <Header/>
                    {/*<RandomPlanet/>*/}

                    {/*<PeoplePage/>*/}

                    <Row
                        left={personDetails}
                        right={starshipDetails}/>
                </div>
            </ErrorBoundary>
        );
    }
};
