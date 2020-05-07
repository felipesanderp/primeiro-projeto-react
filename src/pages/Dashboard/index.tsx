import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => (
  <>
    <img src={logoImg} alt="Github Explorer" />
    <Title>Explore Repositórios do Github.</Title>

    <Form>
      <input placeholder="Digite o nome do repositório" />
      <button type="submit">Pesquisar</button>
    </Form>

    <Repositories>
      <a href="teste">
        <img
          src="https://avatars2.githubusercontent.com/u/46326536?s=460&u=f72b94042e77899f6c4df3c5f41c9984456cda87&v=4"
          alt="Felipe Sander"
        />
        <div>
          <strong>rocketseat/unform</strong>
          <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
        </div>

        <FiChevronRight size={20} />
      </a>
    </Repositories>
  </>
);

export default Dashboard;
