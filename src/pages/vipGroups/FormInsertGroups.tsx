import React from 'react';
import { Button } from 'primereact/button';
import { useFormik  } from 'formik';
import { InputText } from 'primereact/inputtext';
import { Checkbox } from 'primereact/checkbox';
import { classNames } from 'primereact/utils';
import { Calendar } from 'primereact/calendar';

const FormInsertGroups = ({  onSubmit , data }: { data:any , onSubmit:Function }) => {

    const formik = useFormik({
        initialValues:{
            id:data.id ?? '',
            gName:data.gName ?? '',
            sellCP:data.sellCP ?? '',
            buyCP:data.buyCP ?? '',
            swapCP:data.swapCP ?? '',
            minWithdraw:data.minWithdraw ?? '',
            status:data.status ?? true
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
                            <InputText type={'text'} id="gName" name="gName" value={formik.values.gName} onChange={formik.handleChange} autoFocus  />
                            <label htmlFor="gName" >Group Name</label>
                        </span>
                    </div>
                </div>
                <div className="col-md-6 mb-3">
                    <div className="field">
                        <span className="p-float-label">
                            <InputText type={'text'} id="sellCP" name="sellCP" value={formik.values.sellCP} onChange={formik.handleChange} autoFocus  />
                            <label htmlFor="sellCP" >Sales commission percentage</label>
                        </span>
                    </div>
                </div>
                <div className="col-md-6 mb-3">
                    <div className="field">
                        <span className="p-float-label">
                            <InputText type={'text'} id="buyCP" name="buyCP" value={formik.values.buyCP} onChange={formik.handleChange} autoFocus  />
                            <label htmlFor="buyCP" >Purchase fee percentage</label>
                        </span>
                    </div>
                </div>
                <div className="col-md-6 mb-3">
                    <div className="field">
                        <span className="p-float-label">
                            <InputText type={'text'} id="swapCP" name="swapCP" value={formik.values.swapCP} onChange={formik.handleChange} autoFocus  />
                            <label htmlFor="swapCP" >Swap fee percentage</label>
                        </span>
                    </div>
                </div>
                <div className="col-md-6 mb-3">
                    <div className="field">
                        <span className="p-float-label">
                            <InputText type={'text'} id="minWithdraw" name="minWithdraw" value={formik.values.minWithdraw} onChange={formik.handleChange} autoFocus  />
                            <label htmlFor="minWithdraw" >Min Withdraw</label>
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
                            <Button  type="submit" label='Submit' className='p-button-raised p-button-success ' />
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
};

export default React.memo(FormInsertGroups);