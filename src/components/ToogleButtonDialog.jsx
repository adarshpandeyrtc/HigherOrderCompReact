import React, {useState} from 'react';
import { Button } from '@mui/material';
import {ModalDialog} from '../components/ModalDialog'
import useToggleDialog from '../hooks/useDialog';

const ToggleButtonDialog = () => {
    const {isVisible, show, hide} = useToggleDialog;
    return (
      <>
        <Button onClick={show}>Open Dialog</Button>
        {isVisible ? <ModalDialog onClose={hide} /> : null}
      </>
    )
}

export default ToggleButtonDialog;







