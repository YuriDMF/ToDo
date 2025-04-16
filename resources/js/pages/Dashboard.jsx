import axios from 'axios';
import React, { useEffect } from 'react';

const Dashboard = () => {

    useEffect(() => {
        // Fazer requisição para a API Laravel
        axios.get('http://localhost:8000/api/some-endpoint') // Altere para o endpoint da sua API
            .then(response => {
                console.log('Response:', response.data); // Mostra a resposta no console
            })
            .catch(error => {
                console.error('Error:', error); // Mostra o erro caso haja algum
            });
    }, []); // O array vazio faz com que a requisição seja feita uma única vez quando o componente for carregado

    return (
        <div>
            <h1>Dashboard</h1>
            <p>Verifique o console para ver a resposta da API!</p>
        </div>
    );
}

export default Dashboard;