import React, { useContext } from 'react';
import { AlertContext } from '../../context/alert/alertContext';
import { CSSTransition } from 'react-transition-group';
import  { default as AlertMui }from '@material-ui/lab/Alert';

const Alert = () => {
    const {alert, hide} = useContext(AlertContext);

    return (
        <CSSTransition
            in={alert.visible}
            timeout={{
                enter: 600,
                exit: 400
            }}
            classNames={'alert'}
            mountOnEnter
            unmountOnExit
        >
            <AlertMui variant='outlined' severity={`${alert.type || 'warning'}`}>
                {alert.type === 'success'
                    ? <strong>You rock it !</strong>
                    : <strong>Warning !</strong>
                }
                &nbsp;{alert.text}
                <button type='button' className='close' aria-label='Close' onClick={hide}>
                    <span aria-hidden='true'>
                        &times;
                    </span>
                </button>
            </AlertMui>


            {/* <div className={`alert alert-${alert.type || 'warning'} alert-dismissible`}>
                
            </div> */}
        </CSSTransition>
        
    )
}

export default Alert;
