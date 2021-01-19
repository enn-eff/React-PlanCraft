import React, { useState } from 'react';

import {
    IonTextarea,
    IonLabel,
    IonChip,
    IonIcon,
    IonButton,
    IonItem,
    IonPage,
    IonHeader,
    IonToolbar,
    IonAvatar,
    IonContent,
    IonList,
} from '@ionic/react';
import { enterSharp, camera, call, settings } from 'ionicons/icons';
import './ChatPage.css';

type IState = {
    myArray: string[];
};

const ChatPage = () => {
    const [inputText, setInputText] = useState<string>();
    const [message, setMessage] = useState<IState>({
        myArray: [],
    });

    function sendMessage() {
        setMessage({ myArray: [...message.myArray, inputText!] });
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonChip>
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

            <IonContent fullscreen>
                <div id='targetContainer' className='container'>
                    <IonList className='custom-List '>
                        {message.myArray.map(
                            (message: string, index: number) => (
                                <IonItem
                                    style={{ textAlign: 'center' }}
                                    key={index}
                                    className='custom-ListItem'>
                                    <p> </p>

                                    <IonLabel className='custom-Label'>
                                        {message}
                                    </IonLabel>
                                </IonItem>
                            )
                        )}
                    </IonList>
                    <div>
                        <div className='grid-styling'>
                            <div className='backgroundcolor'>
                                <IonTextarea
                                    placeholder='Type a message...'
                                    onIonChange={(e) =>
                                        setInputText(e.detail.value!)
                                    }></IonTextarea>
                            </div>
                            <div className='btn custom-btn'>
                                <IonChip>
                                    <IonButton onClick={() => sendMessage()}>
                                        <IonIcon icon={enterSharp}></IonIcon>
                                    </IonButton>
                                </IonChip>
                            </div>
                        </div>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default ChatPage;
