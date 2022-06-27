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

    const { open5, handleClose5 } = React.useContext(ContextProdutos)

  return (
    <div>


      <Modal
        open={open5}
        onClose={handleClose5}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Peças de Reposição
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Precisa de peça de reposição, vedações, ou até mesmo itens reservas para seu equipamento?
          </Typography>

          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          A chave base para um atendimento rápido, é ter um grande volume de estoque. A SULPOL tem uma estrutura de estoque invejável, com os mais diversos itens em armazenados, inclusive para equipamentos mais antigos, o que traz mais confiança aos nossos clientes para aquisição de novos equipamentos.
          </Typography>

          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Todo equipamento é projeto por equipe técnica e engenheiros especializados, cada componente é estudado minuciosamente e sua seleção é criteriosa. Contudo, consulte a SULPOL quando houver necessidade de reposição, e utilize peças originais da SULPOL, assim a vida útil do seu equipamento será prolongada e seu tempo de máquina parada será menor, reduzindo os custos desnecessários.
          </Typography>

          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Tenha sempre em mãos o número de série do equipamento e o seu manual de operação. Lá você encontrará todos os conjuntos de montagem da máquina e o código de cada peça existente. Assim, quando entrar em contato com a SULPOL, basta fornecer as informações necessárias e terá um atendimento muito mais ágil.
          </Typography>
        </Box>
      </Modal>


    </div>
  );
}