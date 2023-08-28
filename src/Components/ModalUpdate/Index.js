import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import FormInput from '../FormInput'
import Button from '../Button/Index';
import './index.scss'
import CloseIcon from '@mui/icons-material/Close';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
};

export default function Index(props) {


	return (
		<div>
			<Modal
				open={props.open}
				onClose={props.handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<Typography id="modal-modal-title" variant="h6" component="h2">
						MODIFIER CLIENT
          </Typography>
					<Typography id="modal-modal-description" sx={{ mt: 2 }}>
						<FormInput label="Nom" value={props.nom}/>

					</Typography>
					<Typography id="modal-modal-description" sx={{ mt: 2 }}>
						<FormInput label="Prenom" value={props.prenom}/>
					</Typography>
					<Typography id="modal-modal-description" sx={{ mt: 2 }}>
						<FormInput label="Offre" value={props.offre} />
					</Typography>
					<div className="btn">
						<Button>Save</Button>
						<Button icon={<DeleteForeverIcon/>}>Delete</Button>
						<Button onClick= {props.handleClose} icon={<CloseIcon/>}>Close</Button>
						
					</div>
				</Box>
			</Modal>
		</div>
	);
}