import { Modal, ModalProps } from 'antd'
import { FC } from 'react'

interface IModal extends ModalProps {
  title: string
}

export const CustomModal: FC<IModal> = ({ title, children, ...rest }) => {
  return (
    <Modal title={title} {...rest} className="">
      {children}
    </Modal>
  )
}
