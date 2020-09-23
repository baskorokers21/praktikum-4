import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './Home';
import Covid from './Covid';
import Gallery from './Gallery';
import Hari_besar from './Hari_besar';
import Beranda from './Beranda';
import List from './List'


const Utama = () => (
    <switch>
        <Route exatc path="/" component={Home} />
        <Route path="/Covid" component={Covid} />
        <Route path="/Gallery" component={Gallery} />
        <Route path="/Hari_besar" component={Hari_besar}/>
        <Route path="/Beranda" component={Beranda}/>
        <Route path="/List" component={List}/>
    </switch>
)

    export default Utama;