import React, { useState } from 'react';

import {
    IonTextarea,
    IonLabel,
    IonChip,
    IonIcon,
    IonButton,
    IonPage,
    IonHeader,
    IonToolbar,
    IonAvatar,
    IonContent,
} from '@ionic/react';

import { enterSharp, camera, call, settings } from 'ionicons/icons';

import './ChatPage.css';

var iterator = 0;
var cv = false;
var mainDiv: HTMLDivElement;

const ChatPage = () => {
    const [text, setText] = useState<string>();
    const [value, setValue] = useState<string>();

    function registroUsuario() {
        setValue(text);
        createElement();
    }

    function createElement() {
        iterator++;
        let container = document.getElementById('targetContainer');
        let disappear = document.getElementById('ion-page');
        debugger;
        if (container !== null) {
            if (cv === false) {
                mainDiv = document.createElement('div');
                mainDiv.setAttribute('id', 'mainChat');
                container.insertBefore(mainDiv, container.firstChild);

                cv = true;
            }
        }

        let div = document.createElement('div');
        div.innerHTML = `<IonList> <IonItem> <IonLabel>${text}</IonLabel></IonItem></IonList>`;
        div.setAttribute('id', '' + iterator + '');

        disappear && disappear.setAttribute('style', 'display: none;');
        mainDiv.appendChild(div);
    }

    return (
        <IonPage id='pagee'>
            <IonHeader>
                <IonToolbar>
                    <IonChip class='badgeSize'>
                        <IonAvatar>
                            <img src='https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y' />
                        </IonAvatar>
                        <IonLabel>Alexander Noll</IonLabel>
                    </IonChip>

                    <IonChip slot='end'>
                        <IonIcon icon={camera}></IonIcon>
                    </IonChip>

                    <IonChip slot='end'>
                        <IonIcon icon={call}></IonIcon>
                    </IonChip>

                    <IonChip slot='end'>
                        <IonIcon icon={settings}></IonIcon>
                    </IonChip>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                <div className='mainDiv'>
                    <div id='targetContainer' className='container'>
                        <div>
                            <div className='grid-styling'>
                                <div className='backgroundcolor'>
                                    <IonTextarea
                                        placeholder='Type a message...'
                                        onIonChange={(e) =>
                                            setText(e.detail.value!)
                                        }></IonTextarea>
                                </div>
                                <div className='btn'>
                                    <IonChip>
                                        <IonButton
                                            onClick={() => registroUsuario()}>
                                            <IonIcon
                                                icon={enterSharp}></IonIcon>
                                        </IonButton>
                                    </IonChip>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default ChatPage;
