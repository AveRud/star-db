import React, {Component} from 'react';

import Header from '../header/header';
import ErrorIndicator from '../error-indicator/error-indicator'
import './app.css';
import SwapiService from "../../services/swapi-service";
import ErrorBoundary from "../error-boundary/error-boundary";

import {
    PersonList,
    PlanetList,
    StarshipList,
    PersonDetails,
    PlanetDetails,
    StarshipDetails
} from '../sw-components';

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

        return (
            <ErrorBoundary>
                <div className='stardb-app'>
                    <Header/>
                    {/*<RandomPlanet/>*/}
                    <PersonDetails itemId={11}/>
                    <PlanetDetails itemId={5}/>
                    <StarshipDetails itemId={9}/>

                    <PersonList>
                        {({name}) => <span>{name}</span>}
                    </PersonList>

                    <StarshipList>
                        {({name}) => <span>{name}</span>}
                    </StarshipList>

                    <PlanetList>
                        {({name}) => <span>{name}</span>}
                    </PlanetList>

                </div>
            </ErrorBoundary>
        );
    }
};


