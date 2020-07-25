import React from "react";
import {render} from "@testing-library/react";
import HomePage from "./homepage.component";
import {Provider} from "react-redux";
import configureStore from 'redux-mock-store';

describe('Home Page', () => {

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
        expect(render(<Provider store={storeWithNoUserData}>
            <HomePage currentUser={initialData.user.currentUser}/>
        </Provider>)).toMatchSnapshot()
    });

    it('should render welcome message only if user is not having token', () => {
        const { queryByTestId } = render(<Provider store={storeWithNoUserData}>
            <HomePage currentUser={initialData.user.currentUser}/>
        </Provider>);

        expect(queryByTestId('welcome-message')).toBeTruthy();
    });

    it('should not render welcome message if user is having token', () => {
        const { queryByTestId } = render(<Provider store={storeWithUserData}>
            <HomePage currentUser={loggedInUserData.user.currentUser} />
        </Provider>)

        expect(queryByTestId('welcome-message')).toBeFalsy();
    });
});
