import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useQuery, gql } from '@apollo/client';
import { DisplayLocations } from './Components/DisplayLocations';

export const GET_LOCATIONS= gql`
    query GetLocations{
      locations {
        id 
        name
        description
        photo
      }
    }
  `;

function App() {

  return (
    <div className="App">
      <DisplayLocations/>
    </div>
  );
}

export default App;
