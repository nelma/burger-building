import React from 'react';
import Aux from '../../hoc/Aux';

const layout = ( props ) => (
    // Substituir por 3 components
    <Aux>
        <div>Toolbar, SideBar, Backdrop</div>
        <main>
            {props.children}
        </main>
    </Aux>
);

export default layout;