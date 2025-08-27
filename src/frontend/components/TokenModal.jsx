import {
    Modal,
    ModalBody,
    ModalTransition,
    ModalTitle,
    ModalFooter,
    ModalHeader,
    Form,
    useForm,
    Textfield,
    Label,
    Button,
} from "@forge/react";
import React, {useState} from "react";

// `useForm` internal state should be in it's own component so that it can reset it's internal state when it unmounts via the modal closing
const FormInModal = ({onClose, onSaveToken}) => {
    const { handleSubmit, getFieldId, register } = useForm();

    const onSubmit = handleSubmit((data) => {
        const tokenPart = data.token.substring(0,3);
        console.log(`Saving token ${tokenPart}...` );
        onClose();
        onSaveToken(data.token);
    });

    return (
        <Form onSubmit={onSubmit}>
            <ModalHeader>
                <ModalTitle>Provide GitHub token</ModalTitle>
            </ModalHeader>
            <ModalBody>
                <Label labelFor={getFieldId("token")}>Paste your GitHub API Token to continue</Label>
                <Textfield {...register("token")} />
            </ModalBody>
            <ModalFooter>
                <Button appearance="subtle" onClick={onClose}>
                    Close
                </Button>
                <Button appearance="primary" type="submit">
                    Connect
                </Button>
            </ModalFooter>
        </Form>
    );
};

const TokenModal = ({saveToken}) => {
    const [isOpen, setIsOpen] = useState(true);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <>
            {/*<Button appearance="primary" onClick={openModal}>*/}
            {/*    Open modal*/}
            {/*</Button>*/}

            <ModalTransition>
                {isOpen && (
                    <Modal onClose={closeModal}>
                        <FormInModal onClose={closeModal} onSaveToken={saveToken} />
                    </Modal>
                )}
            </ModalTransition>
        </>
    );
};

export default TokenModal;