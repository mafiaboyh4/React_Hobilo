import React from 'react';
import { Button } from 'primereact/button';
import { useFormik  } from 'formik';
import { InputText } from 'primereact/inputtext';
import { classNames } from 'primereact/utils';
import { Checkbox } from 'primereact/checkbox';

const FormUpdateNetwork = ({ network , onSubmit }: { network: any , onSubmit:Function }) => {

    const formik = useFormik({
        initialValues:{
            name:network.name ?? null ,
            RpcLink:network.RpcLink ?? null ,
            wsLink:network.wsLink ?? null ,
            symbol:network.symbol ?? null ,
        },
        onSubmit: (data) => {
            onSubmit(data);
            // formik.resetForm();
        }
    });

    //@ts-ignore
    const isFormFieldValid = (name:string) => !!(formik.touched[name] && formik.errors[name]);
    const getFormErrorMessage = (name:string) => {
        //@ts-ignore
        return isFormFieldValid(name) && <small className="p-error">{formik.errors[name]}</small>;
    };
    
    return (
        <form onSubmit={formik.handleSubmit} className="p-fluid">
            <div className="row mx-0 pt-4">
                <div className="col-md-6 mb-4">
                    <div className="field">
                        <span className="p-float-label">
                            <InputText type={'text'} id="name" name="name" value={formik.values.name} onChange={formik.handleChange} autoFocus  />
                            <label htmlFor="name" >Name</label>
                        </span>
                    </div>
                </div>
                
                
                <div className="col-md-6 mb-2">
                    <div className="field">
                        <span className="p-float-label">
                            <InputText type={'text'} id="wsLink" name="wsLink" value={formik.values.wsLink} onChange={formik.handleChange} autoFocus  />
                            <label htmlFor="wsLink" >web socket Link </label>
                        </span>
                    </div>
                </div>
                
                <div className="col-md-6 mb-2">
                    <div className="field">
                        <span className="p-float-label">
                            <InputText type={'text'} id="RpcLink" name="RpcLink" value={formik.values.RpcLink} onChange={formik.handleChange} autoFocus  />
                            <label htmlFor="RpcLink" >Rpc Link </label>
                        </span>
                    </div>
                </div>

                <div className="col-md-6 mb-2">
                    <div className="field">
                        <span className="p-float-label">
                            <InputText type={'text'} id="symbol" name="symbol" value={formik.values.symbol} onChange={formik.handleChange} autoFocus  />
                            <label htmlFor="symbol" >Symbol </label>
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

export default React.memo(FormUpdateNetwork);