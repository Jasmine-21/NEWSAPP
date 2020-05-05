import React, {Component} from 'react';
import {BrowseRouter as Router } from 'react-router-dom';
import {library} from '@fortawesome/fontawesome-svgc-core';
import {faIgloo} from '@fortawesome/free-solid-svg-icons';
import Home from '../scrrens/Home/Home'
 library.add(faIgloo)

 class AppRouter extends Component
 {
     render()
     {
         return
         (
             <Router>
                 <div className="main-controller">
                    <Route exact path='/' render={(props)=><Home {...props} baseUrl={this.baseUrl} />} />
                 </div>
             </Router>
         )
     }
 }

 export default AppRouter;