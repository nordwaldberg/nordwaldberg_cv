import React from 'react';
import Modal, {ModalProps} from '../misc/Modal/Modal';

const OpenContactsModal: React.FC<ModalProps> = ({visible, setVisible}) => {
    return (
        <Modal visible={visible} setVisible={setVisible}>openContacts</Modal>
    );
};

export default OpenContactsModal;