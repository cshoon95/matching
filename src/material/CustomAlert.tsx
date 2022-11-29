import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import mc from '../core/Mc';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { StoreStateType } from '../types/store';

// ㅇㅣ쁘게 디자인 하면 이뻐질듯
const boxStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 200,
    height: 200,
    bgcolor: 'background.paper',
    border: '2px solid #66bb6a',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

const btnStyle = {
    position: 'absolute',
    left: '60%',
};

function CustomAlert() {
    const refBtn = useRef<HTMLButtonElement>(null);
    let { alertMessage, alertOptions } = useSelector(
        (state: StoreStateType) => {
            return {
                alertMessage: state.view.alertMessage,
                alertOptions: state.view.alertOptions,
            };
        },
    );

    useEffect(() => {
        setTimeout(() => {
            refBtn.current?.focus();
        }, 100);
    }, [alertMessage]);

    return (
        <div>
            <Modal
                open={alertMessage === '' ? false : true}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
                color={alertOptions.color}
            >
                <Box sx={{ ...boxStyle, width: 300 }}>
                    <h2 id="parent-modal-title">
                        {alertOptions?.title ? alertOptions.title : ''}
                    </h2>
                    <p id="parent-modal-description">{alertMessage}</p>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Email Address"
                        type="email"
                        fullWidth
                        variant="standard"
                    />
                    <Button
                        sx={btnStyle}
                        ref={refBtn}
                        onClick={() => {
                            mc.alert('hide');
                            if (alertOptions?.callbackFunc)
                            alertOptions.callbackFunc();
                        }}
                    >
                        {alertOptions.confirm}
                    </Button>
                </Box>
            </Modal>
        </div>
    );
}

export default CustomAlert;