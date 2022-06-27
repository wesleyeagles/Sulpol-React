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

    const { open2, handleClose2 } = React.useContext(ContextProdutos)

  return (
    <div>


      <Modal
        open={open2}
        onClose={handleClose2}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Projetos especiais
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          ​Possuímos departamento de engenharia interno, com profissionais altamente capacitados, e temos totais condições de desenvolver um projeto para facilitar o seu processo de fabricação, agregando ainda mais qualidade ao seu produto final.
          </Typography>
          <Typography sx={{ mt: 2 }}>
          A SULPOL oferece ao mercado equipamentos e serviços de alta qualidade. Todo processo iniciado pela engenharia passa por análise de elementos finitos 3D, garantindo a resistência apropriada para cada design criado. Os insumos são selecionados criteriosamente, junto a fornecedores mundialmente reconhecidos e que respaldam o trabalho formando um único time.
          </Typography>
        </Box>
      </Modal>


    </div>
  );
}