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

    const { open4, handleClose4 } = React.useContext(ContextProdutos)

  return (
    <div>


      <Modal
        open={open4}
        onClose={handleClose4}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          Assistência Técnica
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          A SULPOL disponibiliza um completo serviço de pós-venda, oferecendo assistência técnica e peças de reposição. Com estrutura local de atendimento, e profissionais altamente capacitados, prezamos sempre pela agilidade no diagnóstico de falhas e resposta rápida para a solução de problemas.
          </Typography>

          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          A Equipe de assistência técnica da SULPOL é divida em duas, externa e interna. A equipe externa é responsável pela instalação dos equipamentos fornecidos, treinamentos, acompanhamento do start-up de produção, diagnóstico e correção de falhas, também auxilia nas demandas internas. Já a equipe interna, é reponsável pelo reparo de peças e atendimento inicial.
          </Typography>

          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Conte com a gente, estaremos sempre disponível para ajudar!
          </Typography>
        </Box>
      </Modal>


    </div>
  );
}