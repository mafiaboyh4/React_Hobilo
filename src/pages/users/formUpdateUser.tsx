import React from 'react';
import { Button } from 'primereact/button';
import { UsersGetModel } from './../../models/userModel';
import { useFormik , FormikHelpers  } from 'formik';
import { InputText } from 'primereact/inputtext';
import { classNames } from 'primereact/utils';
import { Checkbox } from 'primereact/checkbox';
import { InputNumber } from 'primereact/inputnumber';

const FormUpdateUser = ({ user , onSubmit }: { user: UsersGetModel , onSubmit:Function }) => {

    const formik = useFormik({
        initialValues:{
            active:user.accept ?? true,
            level:user.level,
            banned:user.banned ?? false,
            id:user._id,
            passwordwrong:user.passwordwrong
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
                <div className="col-md-6 mb-4">
                    <div className="field">
                        <span className="p-float-label">
                            <InputText type={'number'} id="passwordwrong" name="passwordwrong" value={formik.values.passwordwrong} onChange={formik.handleChange} autoFocus  />
                            <label htmlFor="passwordwrong" >Password wrong</label>
                        </span>
                    </div>
                </div>
                <div className="col-md-6 mb-2 d-flex flex-row justify-content-between">
                    <div className="field-checkbox">
                        <Checkbox inputId="active" name="active" checked={formik.values.active} onChange={formik.handleChange}  />
                        <label htmlFor="accept" >is accept : <span className={classNames({ 'p-error': !formik.values.active , 'green': formik.values.active})}>{String(formik.values.active)}</span></label>
                    </div>
                    <div className="field-checkbox">
                        <Checkbox inputId="banned" name="banned" checked={formik.values.banned} onChange={formik.handleChange}  />
                        <label htmlFor="banned" >is Banned : <span className={classNames({ 'p-error': !formik.values.banned , 'green': formik.values.banned})}>{String(formik.values.banned)}</span> </label>
                    </div>
                </div>
                <div className="col-md-6 mb-2">
                    <div className="field">
                        <span className="p-float-label">
                            <InputText type={'number'} id="level" min={0} name="level" value={formik.values.level} onChange={formik.handleChange} autoFocus  />
                            <label htmlFor="level" >Level </label>
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

export default React.memo(FormUpdateUser);