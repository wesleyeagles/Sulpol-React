import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ContextProdutos from '../contexts/ContextProdutos';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'black',
  color: 'white',
  boxShadow: 24,
  p: 4,
  transition: 200,
  outline: 'none',

  '@media (max-width: 428px)' : {
    width: 370
  }
};

export default function BasicModal() {

    const { open3, handleClose3 } = React.useContext(ContextProdutos)

  return (
    <div>


      <Modal
        open={open3}
        onClose={handleClose3}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Treinamentos
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          A SULPOL disponibiliza treinamentos operacionais e de manutenção básica de seus equipamentos. Nossos treinamentos são ministrados por nossa equipe técnica, visando qualificar os profissionais que vão trabalhar com nossos equipamentos, desde operadores, preparadores e programadores de produção até o setor de manutenção para que este possa intervir num caso de falha, evitando assim longas paradas na produção. A SULPOL disponibiliza também treinamentos na sua estrutura fabril, para que seus colaboradores conheçam nossas instalações, possam ver como são montados os equipamentos e adquiram maior conhecimento, aumentando ainda mais o conhecimento sobre os produtos e processos.
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Teremos o maior prazer em receber a sua equipe de colaboradores. Entre em contato conosco e programe o treinamento da sua equipe.
          </Typography>
        </Box>
      </Modal>


    </div>
  );
}