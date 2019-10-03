import React, { Component } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import './Index.css';
import Button from 'react-bootstrap/Button'
import { Row, Col, Badge } from 'reactstrap';


import Toast from 'react-bootstrap/Toast'


class Index extends Component {
    state = {
        value: ''
    }
    constructor(props) {
        super(props);
        const cookies = new Cookies();

        axios.post('/api/', {
            value: 'hi'
        }).then(function (response) {
            let data = response.data;
            console.log('Success', data);
            const cookies = new Cookies();
            if (data.success === true) {

                cookies.set('value', 'hi',
                    {
                        path: '/',
                        maxAge: 21700
                    });


                this.props.history.push('/');
            }

        }).catch(function (error) {
            console.error('axios Error', error);
        });
        let value = cookies.get('value');
    }



    render() {

        return (
            <div >

                Hello world
            </div>
        );
    }
}

export default Index;
