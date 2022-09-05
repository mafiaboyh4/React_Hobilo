import { OverlayPanel } from 'primereact/overlaypanel';
import React, { useRef } from 'react'

export const DescriptionComponent = ({ text }: { text: string })=> {
    const op = useRef<OverlayPanel>(null);

    return (
        <>
        <p className='big-text cp' 
            onClick={(e) => op.current?.toggle(e)}
            aria-haspopup
            aria-controls="overlay_panel">{text}</p>

        <OverlayPanel
            ref={op}
            showCloseIcon
            id="overlay_panel"
            style={{ width: "100%" , maxWidth:'450px' }}
            className="overlaypanel-demo"
          >
            <p>{text}</p>
          </OverlayPanel>
        </>
    )
};