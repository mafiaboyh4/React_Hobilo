import React from 'react';
import { Button } from 'primereact/button';
import { useFormik  } from 'formik';
import { InputText } from 'primereact/inputtext';
import { Checkbox } from 'primereact/checkbox';
import { classNames } from 'primereact/utils';
import { Calendar } from 'primereact/calendar';

const FormInsertMainWallet = ({  onSubmit }: {  onSubmit:Function }) => {

    const formik = useFormik({
        initialValues:{
            walletAddress:'' ,
            date:new Date(),
            status:true
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
                <div className="col-md-6 mb-3">
                    <div className="field">
                        <span className="p-float-label">
                            <InputText type={'text'} id="walletAddress" name="walletAddress" value={formik.values.walletAddress} onChange={formik.handleChange} autoFocus  />
                            <label htmlFor="walletAddress" >wallet Address</label>
                        </span>
                    </div>
                </div>
                <div className="col-md-6 mb-3">
                    <div className="field">
                        <span className="p-float-label">
                        <Calendar id="date" name="date" value={formik.values.date} onChange={formik.handleChange} dateFormat="yy/mm/dd" mask="9999/99/99" showIcon />
                            <label htmlFor="date" >Date </label>
                        </span>
                    </div>
                </div>
            
                <div className="col-md-6 mb-3">
                    <div className="d-flex flex-row align-items-center">
                        <div className="field-checkbox w-50 mb-0">
                            <Checkbox inputId="status" name="status" checked={formik.values.status} onChange={formik.handleChange}  />
                            <label  htmlFor="status" >Status : <span className={classNames({ 'px-2':true,'p-error': !formik.values.status , 'green': formik.values.status})}> {formik.values.status ? 'Active':'DeActive'}</span></label>
                        </div>
                        <div className="w-50 pl-2">
                            <Button  type="submit" label='Create' className='p-button-raised p-button-success ' />
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
};

export default React.memo(FormInsertMainWallet);