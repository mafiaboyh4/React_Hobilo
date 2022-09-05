import React, { useRef } from 'react'
import { OverlayPanel } from 'primereact/overlaypanel';
import { Button } from 'primereact/button';

export const ListOPTemplate = ({ children , btnLabel }: { children: any , btnLabel:string }) => {
    const op = useRef<OverlayPanel>(null);
    return <>
       <Button
            type="button"
            label={btnLabel}
            onClick={(e) => op.current?.toggle(e)}
            aria-haspopup
            aria-controls="overlay_panel"
            className="select-product-button"
          />

     <OverlayPanel
            ref={op}
            showCloseIcon
            id="overlay_panel"
            style={{ width: "100%" , maxWidth:'450px' }}
            className="overlaypanel-demo"
          >
            <>
           {children}
            </>
          </OverlayPanel>
    </>
};