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

    const { open6, handleClose6 } = React.useContext(ContextProdutos)

  return (
    <div>


      <Modal
        open={open6}
        onClose={handleClose6}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          Upgrades e Retrofits
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          ​A SULPOL se orgulha da durabilidade de seus equipamentos, tendo os primeiros ainda trabalhando mesmo depois de 30 Anos. Mas sabemos que a tecnologia evolui rapidamente, e tais equipamento fabricados na época, não possuem os avanços tecnológicos atuais, a SULPOL oferece a opção de atualizar/adaptar equipamentos de geração mais antiga para padrões equivalentes modernos. Seja atualizações de componentes elétricos ou eletrônicos, ou ainda, a adaptação de peças obsoletas, temos uma solução.
          </Typography>

          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Entre em contato hoje mesmo com nosso setor de serviços para obter informações sobre a atualização do seu equipamento.
          </Typography>
        </Box>
      </Modal>


    </div>
  );
}