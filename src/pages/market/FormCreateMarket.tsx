import React from 'react';
import { Button } from 'primereact/button';
import { useFormik  } from 'formik';
import { InputText } from 'primereact/inputtext';
import { Checkbox } from 'primereact/checkbox';
import { classNames } from 'primereact/utils';

const FormCreateMarket = ({  onSubmit }: {  onSubmit:Function }) => {

    const formik = useFormik({
        initialValues:{
            name:'' ,
            minimum:'',
            minPrice:'',
            symbol:'',
            base:'',
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
                            <InputText type={'text'} id="name" name="name" value={formik.values.name} onChange={formik.handleChange} autoFocus  />
                            <label htmlFor="name" >Full Name</label>
                        </span>
                    </div>
                </div>
                <div className="col-md-6 mb-3">
                    <div className="field">
                        <span className="p-float-label">
                            <InputText type={'text'} id="minimum" name="minimum" value={formik.values.minimum} onChange={formik.handleChange} autoFocus  />
                            <label htmlFor="minimum" >minimum </label>
                        </span>
                    </div>
                </div>
                <div className="col-md-6 mb-3">
                    <div className="field">
                        <span className="p-float-label">
                            <InputText type={'text'} id="minPrice" name="minPrice" value={formik.values.minPrice} onChange={formik.handleChange} autoFocus  />
                            <label htmlFor="minPrice" >minPrice </label>
                        </span>
                    </div>
                </div>
                <div className="col-md-6 mb-3">
                    <div className="field">
                        <span className="p-float-label">
                            <InputText type={'text'} id="symbol" name="symbol" value={formik.values.symbol} onChange={formik.handleChange} autoFocus  />
                            <label htmlFor="symbol" >symbol </label>
                        </span>
                    </div>
                </div>
                <div className="col-md-6 mb-3">
                    <div className="field">
                        <span className="p-float-label">
                            <InputText type={'text'} id="base" name="base" value={formik.values.base} onChange={formik.handleChange} autoFocus  />
                            <label htmlFor="base" >base Coin</label>
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

export default React.memo(FormCreateMarket);