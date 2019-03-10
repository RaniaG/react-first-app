import React, { Component } from 'react';
import { MovieList } from './list';
import fullData from '../../data';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
// import {AddMovieForm} from './add';
import './add.css';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';


export class MovieFiltering extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // fullData: data,
            searchedData: fullData,
            filteredData: fullData,
            showAddForm: false,

            Title: '',
            Year: null,

            Type: 'movie',
            Poster: '',

            searchValue: '',
            filterValue: 0
        }
        this.seachArray = this.seachArray.bind(this);
        this.filterArray = this.filterArray.bind(this);
        this.showAddForm = this.showAddForm.bind(this);
        this.closeAddForm = this.closeAddForm.bind(this);
        this.add = this.add.bind(this);
        // this.formControlHandler=this.formControlHandler.bind(this);
    }


    seachArray(event) {
        // debugger
        const filter = event.target.value;
        const newdata = fullData.filter((element) => element.Title.toLowerCase().includes(filter.toLowerCase()));
        this.setState({ searchedData: newdata, filteredData: newdata, searchValue: filter, filterValue: 0 });
        console.log(newdata);
    }
    filterArray(event) {
        // debugger;
        const filterValue = parseInt(event.target.value);
        let newData;
        switch (filterValue) {
            case 1:
                newData = this.state.searchedData.filter((element) => element.Watched && element.Watched === 'true');
                break;
            case 2:
                newData = this.state.searchedData.filter((element) => !element.Watched || element.Watched === 'false');
                break;
            default:
                newData = this.state.searchedData;
                break;
        }

        this.setState({ filteredData: newData, filterValue: filterValue });
    }
    showAddForm() {
        this.setState({ showAddForm: true });
    }
    closeAddForm() {
        this.setState({ showAddForm: false });
    }
    inputListener(formControlName) {
        console.log(this.state);
        return (e) => {
            this.setState({ [formControlName]: e.target.value });
        }
    }
    add() {

        let addedObject = {
            Title: this.state.Title,
            Year: this.state.Year,
            Type: this.state.Type,
            Poster: this.state.Poster,
            imdbID: 12
        };
        // addedObject.imdbID=1
        console.log(addedObject);
        fullData.push(addedObject);
        this.setState({ showAddForm: false, data: fullData, filterValue: 0, searchValue: '' });


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
                            <input className="form-control mr-sm-2" type="text" placeholder="Search" value={this.state.searchValue} onChange={this.seachArray} />
                            <select onChange={this.filterArray} value={this.state.filterValue}>
                                <option value="0">All</option>
                                <option value="1">Watched</option>
                                <option value="2">Not Watched</option>
                            </select>

                            <Button variant="secondary" className="ml-2" onClick={this.showAddForm}>+</Button>
                        </Col>
                    </Row>
                    <MovieList moviesList={this.state.filteredData} />
                </Container>

                {/* {this.state.showAddForm&&<AddMovieForm/>} */}
                {
                    this.state.showAddForm &&
                    <div className="my-modal-container">
                        <Modal.Dialog >
                            <Modal.Header >
                                <Modal.Title>Add New Movie/Series</Modal.Title>
                            </Modal.Header>

                            <Form>
                                <Modal.Body >
                                    <Form.Group >
                                        <Form.Label>Title</Form.Label>
                                        <Form.Control type="text" onChange={this.inputListener('Title')} />
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label>Type</Form.Label>
                                        <Form.Control as="select" onChange={this.inputListener('Type')}>
                                            <option value='movie'>Movie</option>
                                            <option value='series'>Series</option>
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group >
                                        <Form.Label>Year</Form.Label>
                                        <Form.Control type="text" onChange={this.inputListener('Year')} />
                                    </Form.Group>
                                    <Form.Group >
                                        <Form.Label>Poster URL</Form.Label>
                                        <Form.Control type="text" onChange={this.inputListener('Poster')} />
                                    </Form.Group>

                                </Modal.Body>

                                <Modal.Footer>
                                    <Button variant="secondary" onClick={this.closeAddForm}>Close</Button>
                                    <Button variant="primary" onClick={this.add}>Add movie</Button>
                                </Modal.Footer>
                            </Form>
                        </Modal.Dialog>
                    </div>

                }
            </>

        );
    }
} 