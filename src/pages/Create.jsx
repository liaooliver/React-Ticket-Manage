import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, useRouteMatch } from 'react-router-dom';
import BasicForm from '../components/create/BasicForm';
import AssignForm from '../components/create/AssignForm';
import Progress from '../components/create/Progress';
import Review from '../components/create/Review';

import FormContextProvider from '../hooks/context/FormContext';

const Create = () => {
    
    const { path, url } = useRouteMatch();
    const [step, setStep] = useState('1');
    const nextStep = (next) => {
        setStep(next)
    } 

    return (
        <Router>
            <div className=" max-w-xl mx-auto">
                <Progress isActive={step} />
                <FormContextProvider>
                    <Switch>
                        <Route exact path={`${path}/assigned`}>
                            <AssignForm next={nextStep} />
                        </Route>
                        <Route exact path={`${path}/review`}>
                            <Review next={nextStep} />
                        </Route>
                        <Route path={path}>
                            <BasicForm next={nextStep} />
                        </Route>
                    </Switch>
                </FormContextProvider>
            </div>
        </Router>
     );
}
 
export default Create;
