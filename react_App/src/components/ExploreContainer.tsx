import React, { useState } from 'react';

import {
    IonTextarea,
    IonItem,
    IonLabel,
    IonList,
    IonChip,
    IonIcon,
    IonGrid,
    IonRow,
    IonCol,
    IonButton,
} from '@ionic/react';
import { image, attach, enterSharp } from 'ionicons/icons';

import './ExploreContainer.css';

interface ContainerProps {
    name: string;
}
var iterator = 0;
var cv = false;
var mainDiv: HTMLDivElement;
const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
    const [text, setText] = useState<string>();
    const [value, setValue] = useState<string>();

    function registroUsuario() {
        setValue(text);
        createElement();
    }

    function createElement() {
        iterator++;
        var container = document.getElementById('targetContainer');
        if (container !== null) {
            if (cv === false) {
                mainDiv = document.createElement('div');
                mainDiv.setAttribute('id', 'mainChat');
                container.insertBefore(mainDiv, container.firstChild);
                cv = true;
            }
        }

        var div = document.createElement('div');
        div.innerHTML = `<IonList> <IonItem> <IonLabel>${text}</IonLabel></IonItem></IonList>`;
        div.setAttribute('id', '' + iterator + '');

        mainDiv.appendChild(div);
    }

    return (
        <div className='mainDiv'>
            <div id='targetContainer' className='container'>
                <div>
                    <IonGrid className='grid-styling'>
                        <IonRow>
                            <IonCol>
                                <div className='backgroundcolor'>
                                    <IonTextarea
                                        placeholder='Type a message...'
                                        onIonChange={(e) =>
                                            setText(e.detail.value!)
                                        }
                                    ></IonTextarea>
                                </div>
                            </IonCol>
                            <IonCol>
                                <div>
                                    <IonChip slot='end'>
                                        <IonButton
                                            onClick={() => registroUsuario()}
                                        >
                                            <IonIcon
                                                icon={enterSharp}
                                            ></IonIcon>
                                        </IonButton>
                                    </IonChip>
                                </div>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </div>
            </div>
        </div>
    );
};

export default ExploreContainer;
