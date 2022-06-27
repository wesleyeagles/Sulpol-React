import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ContextProdutos from '../contexts/ContextProdutos';
import { FaTools } from 'react-icons/fa';
import { BsFillGearFill } from 'react-icons/bs';
import { CgPerformance } from 'react-icons/cg';
import { GiGears } from 'react-icons/gi';

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

    const { open, handleClose } = React.useContext(ContextProdutos)

  return (
    <div>


      <Modal
        open={open}
        onClose={handleClose}
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
          <div className='flex flex-wrap lg:flex-nowrap gap-10 mt-16 mb-12'>
                    <span className='text-white flex flex-col items-center gap-2 w-[40%] lg:w-auto'><FaTools size={30}/> Manutenção</span>
                    <span className='text-white flex flex-col items-center gap-2 w-[40%] lg:w-auto'><BsFillGearFill size={30}/>Operação</span>
                    <span className='text-white flex flex-col items-center gap-2 w-[40%] lg:w-auto'><CgPerformance size={30}/> Alta performance</span>
                    <span className='text-white flex flex-col items-center gap-2 w-[40%] lg:w-auto'><GiGears size={30}/> Integração simples</span>
                </div>
        </Box>
      </Modal>


    </div>
  );
}