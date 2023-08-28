import React, { useState } from 'react';
import Navigation from '../Components/Navigation/Index'
import './Client.scss'
import Card from '../Components/Card/Index'
import FormInput from '../Components/FormInput'
import Button from '../Components/Button/Index'
import { useRecoilState, } from 'recoil';
import { usersState } from '../Components/Atoms/Atoms';
import { v4 } from 'uuid'
import ModalUpdate from '../Components/ModalUpdate/Index'
import SendIcon from '@mui/icons-material/Send';




const Home = () => {



  const [nom, setnom] = useState()
  const [prenom, setprenom] = useState()
  const [offre, setoffre] = useState()

  const [user, setuser] = useRecoilState(usersState)


  const send = () => {

    const newUser = {
      id: v4(),
      nom,
      prenom,
      offre
    }


    setuser((prev) => ([...prev, newUser]))
    setnom("")
    setprenom("")
    setoffre("")

  }

  const [open, setOpen] = useState(false);
  const [UpDate, setUpdate] = useState();
  const handleOpen = () => {

    setOpen(true)
  };
  const handleClose = () => setOpen(false);

  return (
    <div className='Home'>
      <div className='nav'>
        <Navigation />
      </div>

      <div className='all'>

        <div className='left'>

          <FormInput onChange={(e) => setnom(e.target.value)} label="Nom" value={nom} />
          <FormInput onChange={(e) => setprenom(e.target.value)} label="Prenom" value={prenom} />
          <FormInput onChange={(e) => setoffre(e.target.value)} label="Offre" value={offre} />
          <Button onClick={send} icon={<SendIcon />} >Send</Button>


        </div>
        <div className='right'>

          {user.map(e => <Card
            key={e.key}
            id={e.id}
            nom={e.nom}
            prenom={e.prenom}
            offre={e.offre}
            set={setuser}
            update={handleOpen}
          />)}

          {user.map(e => <ModalUpdate
            id={e.id}
            nom={e.nom}
            prenom={e.prenom}
            offre={e.offre}
            handleClose={handleClose}
            open={open} />
          )}




        </div>
      </div>
    </div>
  );
};

export default Home;