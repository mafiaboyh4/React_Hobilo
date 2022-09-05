import React from 'react';
import { Button } from 'primereact/button';
import { useFormik  } from 'formik';
import { InputText } from 'primereact/inputtext';
import { classNames } from 'primereact/utils';
import { Checkbox } from 'primereact/checkbox';

const FormSetMainWallet = ({ mainWallet , onSubmit }: { mainWallet: string , onSubmit:Function }) => {

    const formik = useFormik({
        initialValues:{
            wallet:mainWallet ,
        },
        onSubmit: (data) => {
            onSubmit(data);
            // formik.resetForm();
        }
    });

    //@ts-ignore
    // const isFormFieldValid = (name:string) => !!(formik.touched[name] && formik.errors[name]);
    // const getFormErrorMessage = (name:string) => {
    //     //@ts-ignore
    //     return isFormFieldValid(name) && <small className="p-error">{formik.errors[name]}</small>;
    // };
    
    return (
        <form onSubmit={formik.handleSubmit} className="p-fluid">
            <div className="row mx-0 pt-4">
                <div className="col-md-6 mb-2">
                    <div className="field">
                        <span className="p-float-label">
                            <InputText type={'text'} id="wallet" name="wallet" value={formik.values.wallet} onChange={formik.handleChange} autoFocus  />
                            <label htmlFor="wallet" >Main Wallet </label>
                        </span>
                    </div>
                </div>
               
                <div className="col-md-6 mb-2">
                    <Button  type="submit" label='Submit' className='p-button-raised p-button-success' />
                </div>
            </div>
        </form>
    )
};

export default React.memo(FormSetMainWallet);