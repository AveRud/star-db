import React, {Component} from 'react';

import './people-page.css';
import ItemList from "../item-list/item-list";
import ItemDetails from "../item-details/item-details";
import ErrorIndicator from "../error-indicator/error-indicator";
import SwapiService from "../../services/swapi-service";
import Row from '../row/row'
import ErrorBoundary from '../error-boundary/error-boundary'

export default class PeoplePage extends Component {

    swapiService = new SwapiService();

    state = {
        selectedPerson: 3
    };

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        });
    };

    render() {

        const itemList = (
            <ItemList
                onItemSelected={this.onPersonSelected}
                getData={this.swapiService.getAllPeople}>
                {(i) => (
                    `${i.name} ( ${i.birthYear})`
                )}
            </ItemList>
        );

        const personDetails = (
            <ErrorBoundary>
                <ItemDetails personId={this.state.selectedPerson}/>
            </ErrorBoundary>
        );

        return (
            <ErrorBoundary>
                <Row left={itemList} right={personDetails}/>
            </ErrorBoundary>
        )
    }
}