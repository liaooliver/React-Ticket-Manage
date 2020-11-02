import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, useRouteMatch } from 'react-router-dom';

import BasicForm from '../components/create/BasicForm';
import AssignForm from '../components/create/AssignForm';
import Progress from '../components/create/Progress';
import Review from '../components/create/Review';
import withForm from '../components/HOC/WithForm';

import FormContextProvider from '../hooks/context/FormContext';

const BasicFormWithCommon = withForm(BasicForm);
const AssignFormWithCommon = withForm(AssignForm);
const ReviewWithCommon = withForm(Review);


const Create = () => {
    
    const { path } = useRouteMatch();
    const [step, setStep] = useState('1');
    const getQuery = (query) => {
        setStep(query.get("step"))
    }

    return (
        <Router>
            <div className=" max-w-xl mx-auto">
                <Progress isActive={step} />
                <FormContextProvider>
                    <Switch>
                        <Route path={`${path}/review`}>
                            <ReviewWithCommon getQuery={getQuery} />
                        </Route>
                        <Route path={`${path}/assigned`}>
                            <AssignFormWithCommon getQuery={getQuery} />
                        </Route>
                        <Route exact={true} path={`${path}`}>
                            {/* <ReviewWithCommon getQuery={getQuery} /> */}
                            <BasicFormWithCommon getQuery={getQuery} />
                        </Route>
                    </Switch>
                </FormContextProvider>
            </div>
        </Router>
     );
}
 
export default Create;
