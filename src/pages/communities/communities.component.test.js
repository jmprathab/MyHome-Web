import React from "react";
import {render} from "@testing-library/react";
import CommunitiesPage from "./communities.component";
import {Provider} from "react-redux";
import configureStore from 'redux-mock-store';
import { BrowserRouter } from "react-router-dom";

describe('Communities Page', () => {

    const mockStore = configureStore();
    const initialData = {
        user: {
            currentUser: null
        }
    };
    const loggedInUserData = {
        user: {
            currentUser: {
                userId: 'any-uuid',
                token: 'any-token'
            }
        }
    };

    const storeWithNoUserData = mockStore(initialData);
    const storeWithUserData = mockStore(loggedInUserData);

    it('should match snapshot test for home page component', () => {
        expect(render(<BrowserRouter>
            <Provider store={storeWithNoUserData}>
                <CommunitiesPage currentUser={initialData.user.currentUser}/>
            </Provider>
        </BrowserRouter>)).toMatchSnapshot()
    });

    it('should render welcome message only if user is not having token', () => {
        const { queryByTestId } = render(<BrowserRouter>
            <Provider store={storeWithNoUserData}>
                <CommunitiesPage currentUser={initialData.user.currentUser}/>
            </Provider>
        </BrowserRouter>);

        expect(queryByTestId('welcome-message')).toBeTruthy();
    });

    it('should not render welcome message if user is having token', () => {
        const { queryByTestId } = render(<BrowserRouter>
            <Provider store={storeWithUserData}>
                <CommunitiesPage currentUser={loggedInUserData.user.currentUser} />
            </Provider>
        </BrowserRouter>)

        expect(queryByTestId('welcome-message')).toBeFalsy();
    });
});
