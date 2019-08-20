import React, {Component} from 'react';

import Header from '../header/header';
import RandomPlanet from '../random-planet/random-planet';
import ErrorIndicator from '../error-indicator/error-indicator'

import './app.css';
import PeoplePage from "../people-page/people-page";
import ItemList from "../item-list/item-list";
import PersonDetails from "../person-details/person-details";
import SwapiService from "../../services/swapi-service";
import ErrorBoundary from "../error-boundary/error-boundary";

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

        return (
            <ErrorBoundary>
                <div className='stardb-app'>
                    <Header/>
                    <RandomPlanet/>

                    <PeoplePage/>

                </div>
            </ErrorBoundary>
        );
    }
};
