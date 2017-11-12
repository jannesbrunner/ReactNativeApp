import { StackNavigator } from 'react-navigation';

import Contacts from '../screens/Contacts';
import Details from '../screens/Details';

export const Navigator = StackNavigator(
    {

        Contacts: {
            screen: Contacts,
            navigationOptions: {
                title: 'Contacts',
            },

        },

        Details: {
            screen: Details,
            navigationOptions: {
                title:  `Details`,
              },

        },

    });


      


