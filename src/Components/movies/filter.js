import React, { Component } from 'react';
import { MovieList } from './list';
import fullData from '../../data';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import { AddMovieForm } from './add';
import { timingSafeEqual } from 'crypto';


export class MovieFiltering extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // fullData: data,
            Data: fullData,
            // filteredData: fullData,
            showAddForm: false,




            searchValue: '',
            filterValue: 0
        }
        this.filterResults = this.filterResults.bind(this);
        this.showAddForm = this.showAddForm.bind(this);
        this.closeAddForm = this.closeAddForm.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        // this.formControlHandler=this.formControlHandler.bind(this);
    }


    filterResults(event) {
        // debugger;
        const name = event.target.name;
        const value = event.target.value;
        const filterValue = name === 'filterValue' ? value : this.state.filterValue;
        const title = (name === 'filterValue' ? this.state.searchValue : value).toLowerCase();
        const cases = {
            1: fullData.filter((element) => (element.Watched && element.Watched === 'true') && element.Title.toLowerCase().includes(title)),
            2: fullData.filter((element) => (!element.Watched || element.Watched === 'false') && element.Title.toLowerCase().includes(title)),
            default: fullData.filter((e) => e.Title.toLowerCase().includes(title))
        }
        let newData = cases[filterValue] || cases.default;
        this.setState({ Data: newData, [name]: value });

    }
    showAddForm() {
        this.setState({ showAddForm: true });
    }
    closeAddForm() {
        this.setState({ showAddForm: false });
    }
    handleAdd(movie) {
        fullData.push(movie);
        this.setState({ showAddForm: false, searchedData: fullData, filteredData: fullData, filterValue: 0, searchValue: '' });

    }
    render() {

        return (
            <>
                <Container>


                    <Row className="justify-content-between mb-5 mt-5">
                        <Col>
                            <h3>Movies</h3>
                        </Col>
                        <Col md={6} className="d-flex flex-row">
                            <input className="form-control mr-sm-2" type="text" placeholder="Search" value={this.state.searchValue} name="searchValue" onChange={this.filterResults} />
                            <select onChange={this.filterResults} name="filterValue" value={this.state.filterValue}>
                                <option value="0">All</option>
                                <option value="1">Watched</option>
                                <option value="2">Not Watched</option>
                            </select>

                            <Button variant="secondary" className="ml-2" onClick={this.showAddForm}>+</Button>
                        </Col>
                    </Row>
                    <MovieList moviesList={this.state.Data} />
                </Container>

                {this.state.showAddForm && <AddMovieForm addFunction={this.handleAdd} closeFunction={this.closeAddForm} />}

            </>

        );
    }
} 