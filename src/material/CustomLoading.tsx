import { useSelector } from 'react-redux';
import { StoreStateType } from '../types/store';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function Loading() {
    let { loadingName, loadingOptions } = useSelector(
        (state: StoreStateType) => {
            return {
                loadingName: state.view.loadingName,
                loadingOptions: state.view.loadingOptions
            };
        },
    );

    const style = {
        position: 'absolute',
        top: '60%',
        left: '45%',
    };

    return (
        <>
            {['', 'hide'].includes(loadingName) ? (
                ''
            ) : (
                <Box sx={style}>
                    <CircularProgress
                        color={loadingOptions.color}
                        disableShrink={loadingOptions.disableShrink}
                        size={loadingOptions.size}
                        thickness={loadingOptions.thickness}
                    />
                </Box>
            )}
        </>
    );
}

export default Loading;
