import React from 'react';
import Modal, {ModalProps} from '../misc/Modal/Modal';

const ShowCertificatesModal: React.FC<ModalProps> = ({visible, setVisible}) => {
    return (
        <Modal visible={visible} setVisible={setVisible}>showCertificates</Modal>
    );
};

export default ShowCertificatesModal;