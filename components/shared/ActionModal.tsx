import React from 'react'

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '../ui/dialog'

import { cn } from '@/lib/utils'
import { Button } from '../ui/button'

type ActionModalProps = {
    openActionModal: boolean;
    setOpenActionModal: (open: boolean) => void;
    children: React.ReactNode;
    title?: string;
    description?: string;
    className?: string;
    rounded?: string;
    locked?: boolean;
}

const ActionModal: React.FC<ActionModalProps> = ({
    openActionModal,
    setOpenActionModal,
    children,
    title = "",
    description = "",
    className = "",
    rounded = "rounded-2xl",
    locked = false
}) => {
    return (
        <Dialog
            open={openActionModal}
            onOpenChange={(open) => !locked && setOpenActionModal(open)}
        >
            <DialogContent
                className={`w-full max-w-lg max-h-[80vh] shadow-lg overflow-hidden p-6 ${rounded} ${className}`}
            >
                <DialogHeader className=''>
                    <DialogTitle className="text-lg font-semibold">
                        {title}
                    </DialogTitle>
                    <DialogDescription className="text-sm text-muted-foreground mt-1">
                        {description}
                    </DialogDescription>
                </DialogHeader>

                <div className='p-2 overflow-y-auto max-h-[calc(80vh-60px)]'>
                    {children}
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default ActionModal
